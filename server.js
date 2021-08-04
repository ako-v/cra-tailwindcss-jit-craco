const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(path.resolve(), '/build')));

app.get('*', (req, res) => {
  res.sendFile('/build/index.html');
})

app.listen(3000);