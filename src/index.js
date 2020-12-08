const { app } = require('./app');

const Port = app.get('port' || process.env.PORT);

app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${Port}`);
});
