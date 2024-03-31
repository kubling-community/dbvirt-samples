#!/bin/bash
rm -f initializer-descriptor-bundle.zip; cd descriptor; zip -r ../initializer-descriptor-bundle.zip *
cd ../modules; rm -f tokenbased-module-bundle.zip; cd tokenbased; zip -r ../tokenbased-module-bundle.zip *