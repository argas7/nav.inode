const { Router } = require('express');

const router = Router();

router.route('/books').post((req, res) => {
  res.send('Livro criado');
});

router.route('/books').get((req, res) => {
  res.send('Mostrando algum livro');
});

router.route('/books').put((req, res) => {
  res.send('Livro atualizado');
});

router.route('/books').delete((req, res) => {
  res.send('Livro deletado');
});

module.exports = router;
