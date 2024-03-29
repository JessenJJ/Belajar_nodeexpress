const db = require("../config/db.config")

module.exports = {

    saveUser : ({email, password}) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO users( email, password)
            VALUES (?,?)`,
            [email, password],
            (err,rows,fields)=>{
                if(err)reject(err)
                console.log("🚀 ~ returnnewPromise ~ rows:", rows)
                resolve(rows);
            }
                
            );
        })
    },

    findByEmail : ({email}) =>{
        return new Promise((resolve,reject)=>{
            db.query(`Select * from users where email = ?`,
            [email],
            (err,rows,fields)=>{
                if(err)reject(err)
                resolve(rows)
                }
            
            );
        })
    }
}