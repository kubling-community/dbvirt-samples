#!/bin/bash
rm -f appmodel-descriptor-bundle.zip; cd descriptor; zip -r ../appmodel-descriptor-bundle.zip *;cd ..
../kdv bundle genmod $(pwd)/modules/appmodel/ -o $(pwd)/modules/appmodel-module-bundle.zip
../kdv bundle genmod $(pwd)/modules/functions/ -o $(pwd)/modules/appmodel-functions-bundle.zip
