# first of all

## outline

Vite (French word meaning "quick", pronounced like `/vit/` vite) is a
build tool that aims to provide a faster and leaner development
experience for modern web projects:

- A development server that provides [rich enhancements](./page1) using
  [native ES
  modules](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules),
  including very fast [Hot Module Replacement (HMR](./page1) ).

- A build command that bundles code with [Rollup](https://rollupjs.org).
  It is preconfigured to output highly optimized static assets for
  production.

Vite comes with practical out-of-the-box defaults and is designed to be
used in its project-generated configuration, but is also highly
extensible through the [Plugin API](./page2) and [JavaScript
API](./page2) with full type support.

You can learn more about the basic principles behind the project in the
[Why Vite](./page2) section.

## Browser Support

The default build is for [native ES
modules,](https://caniuse.com/es6-module)[native ESM dynamic imports,
and](https://caniuse.com/es6-module-dynamic-import) browsers that
support
[`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta).
Legacy browsers are supported via the official
[@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy).
See the [Build for Production](./page1) section for more information.

## Try Vite Online

You can try Vite online with [StackBlitz](https://vite.new/), which runs
a Vite-based build setup directly in your browser, much like a local
setup, but without having to install anything on your machine. Go to
`vite.new/{template}` You can navigate to vite.new/{template} and select
the framework you want to use.

Supported template presets are

|                JavaScript                |                TypeScript                 |
|:----------------------------------------:|:-----------------------------------------:|
|   [vanilla](https://vite.new/vanilla)    | [vanilla-ts](https://vite.new/vanilla-ts) |
|       [vue](https://vite.new/vue)        |     [vue-ts](https://vite.new/vue-ts)     |
|     [react](https://vite.new/react)      |   [react-ts](https://vite.new/react-ts)   |
|    [preact](https://vite.new/preact)     |  [preact-ts](https://vite.new/preact-ts)  |
| [lit (i.e. light)](https://vite.new/lit) |     [lit-ts](https://vite.new/lit-ts)     |
|    [svelte](https://vite.new/svelte)     |  [svelte-ts](https://vite.new/svelte-ts)  |

## Generating your first Vite project

When using NPM:

``` bash
$ npm create vite@latest
```

If you use Yarn:

``` bash
$ yarn create vite
```

When using PNPM:

``` bash
$ pnpm create vite
```

Now all you have to do is follow the on-screen prompts!

The project name and the template to use can also be specified directly
by additional command line options. For example, to generate a Vite +
Vue project, run the following command:

``` bash
# npm 6.x npm create vite@latest my-vue-app --template vue # npm 7+ needs two extra dashes: npm create vite@latest my-vue-app -- --template vue # yarn yarn create vite my-vue-app --template vue # pnpm pnpm create vite my-vue-app --template vue
```

See
[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
for details on each supported template: `vanilla`, `vanilla-ts`, `vue`,
`vue-ts`, `react`, `react-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`,
`svelte`, `svelte-ts`.

## Community Templates

create-vite is a tool for quickly starting a project based on a basic
template for a commonly used framework. You can use tools like
[degit](https://github.com/Rich-Harris/degit) to generate projects from
these templates.

``` bash
npx degit user/project my-project cd my-project npm install npm run dev
```

If your template project uses `main` as its default branch, you must
append `#main` to the end of the project repository.

``` bash
npx degit user/project#main my-project
```

## `index.html` and the project root

You may have noticed that in the Vite project, `index.html` is not
hidden in `public`, but in the most prominent place. This is
intentional. During development, Vite is the server, and `index.html` is
the entry point for the application.

Vite treats `index.html` as source code and as part of the module graph;
it resolves references to JavaScript source code
`<script type="module" src="..."``>` that references JavaScript source
code. CSS referenced by inline `<script type="module">` and
`<link href>` can also take advantage of Vite-specific features.
Additionally, URLs in `index.html` are automatically rebased, so no
special `%PUBLIC_URL%` placeholders are needed.

Like a static http server, Vite has the concept of a "root directory"
from which files are served. It is denoted as `<root>` in the rest of
the documentation. Absolute URLs in the source code are resolved using
the project root as a base, so you can write code as if you were using a
regular static file server (except that it is far more powerful!). Vite
can also handle dependencies that resolve to filesystem locations
outside the root, so it can be used in monorepo-based configurations.

Vite also supports [multi-page apps](./page1#マルチページアプリ) with
multiple `.html` entry points.

#### Specifying an alternate route

When you run `vite`, it starts a development server that uses your
current working directory as root. `vite serve some/sub/dir` allows you
to specify an alternate root.

## command line interface

You can use `vite` binaries in npm scripts in projects that have Vite
installed, or run them directly with `npx vite`. The default npm script
for a generated Vite project is

``` json
{ "scripts": { "dev": "vite", // Start the development server. Aliases: `vite dev`, `vite serve` "build": "vite build", // build for production "preview": "vite preview" // preview the production build locally }
```

You can specify additional CLI options such as `--port` and `--https`.
For a list of all CLI options, run `npx vite --help` in your project.

## Using unreleased commits

If you can't wait for a new release to try the latest features, you'll
need to clone the [vite repo](https://github.com/vitejs/vite) to your
local machine and then build and link it yourself (requires
[pnpm](https://pnpm.io/) ):

``` bash
git clone https://github.com/vitejs/vite.git cd vite pnpm install cd packages/vite pnpm run build pnpm link --global # Use your favorite package manager for this step You can use your favorite package manager for this step
```

Then go to your Vite-based project and run `pnpm link --global vite (`
or whatever package manager you used to link `vite` globally). Then
restart your development server and get on the cutting edge!

## community

If you have questions or need support, contact the community on
[Discord](https://chat.vitejs.dev) or [GitHub
Discussions](https://github.com/vitejs/vite/discussions).
