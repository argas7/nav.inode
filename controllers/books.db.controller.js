const [Book] = require('../database/config');

const create = async (req, res) => {
  const { title, summary } = req.body;

  const book = await Book.create({
    title,
    summary,
  });

  console.log(book);
  res.json(book);
};

const read = async (req, res) => {
  const allBooks = await Book.findAll();

  console.log(allBooks);

  res.json(allBooks);
};

const update = async (req, res) => {
  const {id} = req.params;
  const { title, summary } = req.body;

  const book = await Book.findByPk(id);

  if (book) {
    book.title = title,
    book.summary = summary,

    await book.save();

    res.json(book);
  } else {
    res.status(400).send('Book not found');
  }
};

const destroy = async (req, res) => {
  const {id} = req.params;

  await Book.destroy({
    where: {
      id
    }
  })

  res.send();
};

module.exports = {
  create,
  read,
  update,
  destroy,
};
