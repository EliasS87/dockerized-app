var mongoose = require('mongoose');
var chalk = require('chalk');
const dbName = process.env.MONGO_DATABASE;
const dbPassword = process.env.MONGO_PASSWORD;
const dbUser = process.env.MONGO_USERNAME;
const url = 'mongodb://'+ dbUser + ':' + dbPassword + '@' + 'mongodb:27017/' + dbName;
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var ended = chalk.bold.magenta;
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

class Database {
    constructor() {
        this._connect()
    }

_connect() {
    var db = mongoose.connection;
    mongoose.connect(url, {useNewUrlParser: true})
 

    db.once('open', function () {
        console.log("DB CONNECTED")
    });
    db.on('error', function(){console.error.bind(error(console,'connection error:'))});
    db.on('connected', function(){console.log(connected('db connected to ', url))});
    db.on('disconnected', function(){console.log(disconnected('disconnected'))});
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(ended("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
    }
}
module.exports = new Database();