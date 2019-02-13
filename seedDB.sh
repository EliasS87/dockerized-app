#!/bin/bash
docker exec -it mongodb bash -c 'mongoimport --db test \
--collection inventory \
--authenticationDatabase admin \
--username $MONGO_INITDB_ROOT_USERNAME \
--password $MONGO_INITDB_ROOT_PASSWORD \
--host localhost \
--drop --type json --file ./mongoSeed.json'