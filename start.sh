#!/bin/bash
export $(xargs < ./db/.env)
docker-compose up