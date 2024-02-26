#!/bin/bash
rm -f minimal-descriptor-bundle.zip; cd descriptor; zip -r ../minimal-descriptor-bundle.zip *
cd ../modules; rm -f main-module-bundle.zip; cd main; zip -r ../main-module-bundle.zip *