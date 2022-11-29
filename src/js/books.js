const express = require('express')
const router = express.Router()

const books = [];
let id = 0;

function getIncrementId() {
  return id += 1
}

router.get('/', (req, res, next) => {
  res.send(books)
})

router.post('/', (req, res, next) => {
  const book = req.body
  book.id = getIncrementId()

  console.log('book', book)
  books.push(req.body)
  res.sendStatus(200)
})

router.put('/:id', (req, res, next) => {
  const index = books.findIndex((book) => book.id == req.params.id)

  books.splice(index, 1, req.body)
  res.sendStatus(200)
})

router.delete('/:id', (req, res, next) => {
  const index = books.findIndex((book) => book.id == req.params.id)

  books.splice(index, 1)
  res.sendStatus(200)
})

module.exports = router