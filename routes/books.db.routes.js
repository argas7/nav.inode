const { Router } = require('express');

const bookController = require('../controllers/books.db.controller');

const router = Router();

router.route('/books-db').post(bookController.create);
router.route('/books-db').get(bookController.read);
router.route('/books-db/:id').put(bookController.update);
router.route('/books-db/:id').delete(bookController.destroy);

module.exports = router;
