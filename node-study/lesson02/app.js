const express = require('express');
const utility = require('utility');

const app = express();

app.get('/', (req, res) => {
  const q = req.query.q;
  const md5Value = utility.md5(q);
  res.send(md5Value);
});

app.listen(3000, () => {
  console.log('now app is listenning at port 3000!');
})
