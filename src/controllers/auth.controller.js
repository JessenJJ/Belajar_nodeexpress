const authModel = require("../models/auth.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.config");

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkUser = await authModel.findByEmail({ email });
      if (checkUser.length > 0) {
        return res.status(400).json({
          message: "email is already registered!",
        });
      }
      console.log(checkUser);
      const hash = await argon2.hash(password);

      await authModel.saveUser({ email, password: hash });

      return res.status(201).json({
        message: "success registered",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  login: async (req, res) => {
    try {
      //check email
      const { email, password } = req.body;
      const checkEmail = await authModel.findByEmail({ email });
      //if email gaada, res 400, email blm terdaftar
      if (checkEmail.length <= 0) {
        return res.status(400).json({
          message: "Email not found, please register",
        });
      }
      //Ambil email dari database
      const userData = checkEmail[0];
      //verify password
      const checkPass = await argon2.verify(userData.password,password)
      //if pass false return res status 401
      if(!checkPass){
        return res.status(401).json({
            message:"bad credentials"
        })
      }
      const token = jwt.sign({email: userData.email},JWT_SECRET);
      return res.status(200).json({
        message: "success login",
        token,
      });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
