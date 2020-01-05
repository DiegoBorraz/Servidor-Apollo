const dbMysql = require('./.env');
var db = require('knex')(dbMysql);
module.exports = db;