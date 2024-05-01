#!/bin/bash
rm -f documents-descriptor-bundle.zip; cd descriptor; zip -r ../documents-descriptor-bundle.zip *
cd ../modules; rm -f documents-module-bundle.zip; cd doc; zip -r ../documents-module-bundle.zip *