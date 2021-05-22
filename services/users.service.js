const db = require("../config/db.config");

exports.register = (data, callback)=>{
    db.query(
        `INSERT INTO users (firstName,lastName, emailId, password) VALUES (?, ?, ?, ?)`, [
            data.firstName,
            data.lastName,
            data.emailId,
            data.password
        ],(error, results, fields)=>{
            if(error){
                console.log("error111")
                return callback(error);
            }
            return callback(null, `Registration Successfull`);
        }
    )
}

exports.login = (data, callback)=>{
    db.query(
        `SELECT id from users WHERE emailId = ? AND password = ?`, 
        [
            data.emailId,
            data.password
        ],(error, results, fields)=>{
            if(error){
                console.log("error111")
                return callback(error);
            }
            if(results.length > 0){
                return callback(null, "Login Success");
            } else{
                return callback("Invalid Credentials");
            }
        }
    )
}