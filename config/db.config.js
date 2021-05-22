const {createPool} = require("mysql");

const db = createPool({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"my-posts",
    connectionLimit:10
});

module.exports = db;