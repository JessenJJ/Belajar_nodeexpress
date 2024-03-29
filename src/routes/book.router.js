const express = require('express');
const bookController = require('../controllers/book.controller');
const authMiddleware = require('../middleware/auth.middleware');
const bookRouter = express.Router();

//localhost:4000/books
bookRouter.get('/',bookController.getBooks);
//endpoint w/ token: create, update, delete
bookRouter.post('/', authMiddleware.tokenMiddleware,bookController.makeBooks);

module.exports = bookRouter;