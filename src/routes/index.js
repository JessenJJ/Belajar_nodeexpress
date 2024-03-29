const express = require('express');
const bookRouter = require('./book.router');
const authRouter = require('./auth.router');
const router = express.Router();

//router book
router.use('/books',bookRouter)

//router auth
router.use('/auth',authRouter)

router.get('/:id',(req,res)=>{
    //query params: localhost:4000/books?title=laskar-pelangi
    const name = req.query.nama;
    //path variable: localhost:4000/:id
    const id = req.params.id;
    //body req: {title: 'judul',author:'pengarang'}
    // return res.json({user: 'geeeek 2'});
    res.send(`hello ${name}world 2024, id = ${id}`);
});

router.post("/user",(req,res)=>{
    res.status = 200;
    //body req: {title: 'judul',author:'pengarang'}
    const {firstname, lastname, username} = req.body;
    // console.log("🚀 ~ router.post ~ firstname, lastname, username:", firstname, lastname, username)
    return res.json({firstname, lastname, username});
    // return res.json({
        //     status: res.status,
        //     message:"get user",
        //     data:{
            //         username:"fam",
            //         password:"pass",
            //     },
            // });
            
});

module.exports = router;