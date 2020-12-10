const { join } = require('path');
const express = require('express');

const { postRoutes, commentRoutes } = require('./routers/index');
const errorHandele = require('./controllers/error');

const app = express();

app.set('port', process.env.PORT || 5000);

app.disable('x-powered-by');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api/v1', postRoutes);
app.use('/api/v1', commentRoutes);

app.use('*', errorHandele.error404);
app.use(errorHandele.serverError);

module.exports = { app };
