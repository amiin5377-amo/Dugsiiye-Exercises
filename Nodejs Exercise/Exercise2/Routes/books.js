const express = require('express');
const router = express.Router();
const {
  getBooks,
  createBooks,
  getBooksById,
  updateBook,
  deleteBook,
} = require('../Controllers/bookcontrollers');

router.get('/', getBooks);
router.post('/', createBooks);
router.get('/:id', getBooksById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
