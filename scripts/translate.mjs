#!/usr/bin/env zx

import 'zx/globals'

$.verbose = false

function exitWithError(errorMessage) {
  console.error(chalk.red(errorMessage));
  process.exit(1);
}

const inputFiles = argv.inputFiles.split(' ').filter(file => file.match(/\/.[^\/]*\.md/));
if (!inputFiles) {
  exitWithError("Error: You must specify the --inputFiles argument with either an array of files. File path must be absolute path.");
}

const htmlInputFiles = inputFiles.map(file => file.replace('docs/ja/', 'generated/docs/ja/').replace('.md', '.html'))
const htmlOutputFiles = inputFiles.map(file => file.replace('docs/ja/', 'generated/docs/en/').replace('.md', '.html'))
const outputFiles = inputFiles.map(file => file.replace('docs/ja/', 'docs/en/'))
const tempInputDirectories = [...new Set(inputFiles.map(file => file.replace('docs/ja/', 'generated/docs/ja/').replace(/\/.[^\/]*\.md/, '')))]
const tempOutputDirectories = [...new Set(outputFiles.map(file => file.replace('docs/en/', 'generated/docs/en/').replace(/\/.[^\/]*\.md/, '')))]
const outputDirectories = [...new Set(outputFiles.map(file => file.replace(/\/.[^\/]*\.md/, '')))]

for (let index = 0; index < tempInputDirectories.length; index++) {
  const directory = tempInputDirectories[index];
  await $`mkdir -p ${directory}`
}

for (let index = 0; index < tempOutputDirectories.length; index++) {
  const directory = tempOutputDirectories[index];
  await $`mkdir -p ${directory}`
}

for (let index = 0; index < outputDirectories.length; index++) {
  const directory = outputDirectories[index];
  await $`mkdir -p ${directory}`
}

for (let index = 0; index < inputFiles.length; index++) {
  const inputFile = inputFiles[index];
  const htmlInputFile = htmlInputFiles[index];
  const htmlOutputFile = htmlOutputFiles[index];
  const outputFile = outputFiles[index];

  await $`pandoc ${inputFile} --from gfm --to html5 --no-highlight --output ${htmlInputFile}`
  let response = await $`curl -X POST 'https://api-free.deepl.com/v2/document' \
                                -H 'Authorization: DeepL-Auth-Key ${process.env.DEEPL_TOKEN}' \
                                -F 'source_lang=JA' \
                                -F 'target_lang=EN' \
                                -F 'file=@${htmlInputFile}'`
  const json = JSON.parse(response.stdout)

  let status = "queued"
  while (["queued", "translating"].includes(status)) {
    response = await $`curl -X POST 'https://api-free.deepl.com/v2/document/${json.document_id}' \
                            -H 'Authorization: DeepL-Auth-Key ${process.env.DEEPL_TOKEN}' \
                            -d 'document_key=${json.document_key}'`
    status = JSON.parse(response.stdout).status
    let seconds_remaining = JSON.parse(response.stdout).seconds_remaining
    await $`sleep 3`
  }

  await $`curl -X POST 'https://api-free.deepl.com/v2/document/${json.document_id}/result' \
                -H 'Authorization: DeepL-Auth-Key ${process.env.DEEPL_TOKEN}' \
                -d 'document_key=${json.document_key}' \
                --output '${htmlOutputFile}'`
  await $`pandoc ${htmlOutputFile} --from html --to gfm --no-highlight --output ${outputFile}`
}

await $`rm -r generated`
