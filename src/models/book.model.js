const db = require("../config/db.config")

//query untuk crud
module.exports = {
    // read /retrieve data
    findAll: () => {
        return new Promise((resolve,reject)=>{
            db.query('SELECT * FROM `books`;',(err,rows,fields)=>{
                if(err)reject(err)
                console.log("🚀 ~ db.query ~ rows:", rows)
                resolve(rows)
            })
               
        })
    },

    saveBooks:({title,desc,author}) => {
        return new Promise((resolve,reject)=>{
            db.query('INSERT INTO books( title, description, author)VALUES(?,?,?);',
            [title,desc,author],
            (err,rows,fields)=>{
                if(err)reject(err);
                resolve(rows);
            }
            );
        })
    }
}