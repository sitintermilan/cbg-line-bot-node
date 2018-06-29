const express = require('express');
const router = express.Router()
const books = require('./books')

router.get('/',function (req,res) {
	res.json({test:'test.....'})
})

router.get('/books',(req,res) =>{
	console.log(books)
	res.json(books)
})

router.get('/books/:id', (req, res) => {
	console.log(req.params)
  res.json(books.find(book => book.id === req.params.id))
})

module.exports = router;