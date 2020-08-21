const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('App listening at port %s', server.address().port);
});
