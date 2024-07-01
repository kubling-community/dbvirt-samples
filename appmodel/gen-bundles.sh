#!/bin/bash
rm -f appmodel-descriptor-bundle.zip; cd descriptor; zip -r ../appmodel-descriptor-bundle.zip *;cd ..
docker run --rm -v $(pwd)/modules/:/modules/ kubling/dbvirt-cli:latest bundle genmod /modules/appmodel -o /modules/appmodel-module-bundle.zip
docker run --rm -v $(pwd)/modules/:/modules/ kubling/dbvirt-cli:latest bundle genmod /modules/functions -o /modules/appmodel-functions-bundle.zip
