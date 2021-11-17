const express = require('express');

const userRoutes = require('./routes/users.routes')
const bookRoutes = require('./routes/books.routes')
const bookDbRoutes = require('./routes/books.db.routes')


// ########## Configurando Database
require('./database/config');


// ########## Configurando APP e Middlewares
const app = express();
app.use(express.json({ limit: '1mb' }));

app.use(userRoutes);
app.use(bookRoutes);
app.use(bookDbRoutes);

app.listen(3001, () => {
  console.log('Application running at port 3001')
});
