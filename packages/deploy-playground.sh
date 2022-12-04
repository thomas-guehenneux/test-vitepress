rm -rf playground.zip
zip -r playground.zip playground
scp playground.zip lance:/root/site/playground.zip

ssh lance "cd /root/site/; rm -rf guard-ui-playground; unzip playground.zip; mv playground guard-ui-playground"