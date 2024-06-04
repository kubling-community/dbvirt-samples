#!/bin/bash
rm -f azure-descriptor-bundle.zip; cd descriptor; zip -r ../azure-descriptor-bundle.zip *;cd ..
../kdv bundle genmod $(pwd)/modules/delegate/ -o $(pwd)/modules/azure-module-bundle.zip
../kdv bundle genmod $(pwd)/modules/parser/ -o $(pwd)/modules/azure-sql-fn-parser-bundle.zip
