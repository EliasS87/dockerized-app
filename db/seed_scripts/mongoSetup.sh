#!/bin/bash
mongo <<EOF
use test
db.createUser({
  user:  '$MONGO_USERNAME',
  pwd: '$MONGO_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: 'test'
  }]
})
EOF