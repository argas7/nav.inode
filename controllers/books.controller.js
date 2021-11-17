const AllUBooks = [];

const create = (req, res) => {
  res.send('Criação de livros')
};

const read = (req, res) => {
  res.send('Listagem de livros');
};

const update = (req, res) => {
  res.send('Livro atualizado');
};

const destroy = (req, res) => {
  res.send('Livro deletado');
};

module.exports = {
  create,
  read,
  update,
  destroy,
};
