const { JWT_SECRET } = require("../config/env.config");
const jwt = require("jsonwebtoken")

module.exports = {
    tokenMiddleware:(req,res,next)=>{
        try{
            const{authorization} = req.headers;
            console.log("🚀 ~ authorization:", authorization)
            const token = authorization.slice(7)
            
            
            jwt.verify(token,JWT_SECRET);
            next();
        }catch(error){
            console.log(error);
            return res.status(403).json({message:"access forbiden"});
        }
    }
}