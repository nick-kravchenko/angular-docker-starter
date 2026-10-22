#!/usr/bin/env bash

printenv

if [[ true = ${DEVELOPMENT} ]]; then
    ng serve --host ${HOST} --port ${PORT} --allowed-hosts
else
    npm run serve:ssr
fi
