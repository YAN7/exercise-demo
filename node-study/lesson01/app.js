// import express from 'express';
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world!');
})

app.get('/node', (req, res) => {
  res.send('hello node');
})

app.listen(3000, () => {
  console.log('now app is listenning at port 3000!');
});