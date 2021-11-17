const AllUsers = [];

const create = (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
  }

  AllUsers.push(user);

  console.log(AllUsers);
  res.json(user);
};

const read = (req, res) => {
  console.log(AllUsers);

  res.json(AllUsers);
};

const update = (req, res) => {
  const id = req.params;
  const { name, email } = req.body;

  console.log('================> Before')
  console.log(AllUsers);

  const user = AllUsers.find((user) => user.id === id);

  if (user) {
    user.name = name,
    user.email = email,

    console.log('================> After');
    console.log(AllUsers);
    res.json(user);
  } else {
    res.status(400).send('User not found');
  }
};

const destroy = (req, res) => {
  const id = req.params;

  console.log('================> Before')
  console.log(AllUsers);

  const userIndex = AllUsers.findIndex((user) => user.id === id);

  if (userIndex) {
    AllUsers.splice(userIndex - 1, 1);

    console.log('================> After');
    console.log(AllUsers);
    res.status(204).send();
  } else {
    res.status(400).send('User not found');
  }
};

module.exports = {
  create,
  read,
  update,
  destroy,
};