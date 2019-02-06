#!/usr/bin/env bash

printenv

if [[ true = ${DEVELOPMENT} ]]; then
    ng serve --host ${HOST} --port ${PORT} --disable-host-check
else
    npm run serve:ssr
fi
