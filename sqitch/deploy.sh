#!/bin/bash

# Move to current dir (if executed via yarn)
cd "$(dirname "${BASH_SOURCE[0]}")"

# Import environment variables from .env
export $(echo $(cat ../.env | sed 's/#.*//g'| xargs) | envsubst)

sqitch deploy
