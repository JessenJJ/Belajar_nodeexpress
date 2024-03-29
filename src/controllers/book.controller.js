const bookModel = require("../models/book.model");

module.exports = {
    //get books
    getBooks:async(req,res)=>{
        try{
            const data = await bookModel.findAll();
            return res.status(200).json({
                message:"Get book successfully",
                data,
            });

        }catch(error){
            console.log("🚀 ~ getBooks:async ~ error:", error);
            return res.status(500).json(error);
        };
    },

    makeBooks:async(req,res)=>{
        try{
            const {judul,deskripsi,pengarang} = req.body;
            await bookModel.saveBooks({
                title:judul,
                desc:deskripsi,
                author:pengarang
            })
            const data = await bookModel.findAll();
            
            return res.status(201).json({
                message:"Save book successfully",
                data,
            });

        }catch(error){
            console.log("🚀 ~ getBooks:async ~ error:", error);
            return res.status(500).json(error);
        };
    }
}