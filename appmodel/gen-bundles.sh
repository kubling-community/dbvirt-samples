#!/bin/bash
rm -f appmodel-descriptor-bundle.zip; cd descriptor; zip -r ../appmodel-descriptor-bundle.zip *
cd ../modules; rm -f appmodel-module-bundle.zip; cd appmodel; zip -r ../appmodel-module-bundle.zip *
cd ../; rm -f appmodel-functions-bundle.zip; cd functions; zip -r ../appmodel-functions-bundle.zip *