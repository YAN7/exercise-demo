const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();


// 新增路由接口
app.get('/data/:module', (req, res, next) => {
  const c_path = req.params.module;
  console.log('c_path', c_path);
  const Action = require(`./sever/action/data/${c_path}`);
  Action.execute(req, res);
})

app.get('/', (req, res) => {
  res.render('index');
})

app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件设置
app.use('./client/static', express.static(path.join(__dirname, './client/static')));

// 启动一个8888端口的服务器
const serve = app.listen(8888, () => {
  const host = serve.address().address;
  const port = serve.address().port;
  console.log('Listening at http://', host, port);
})

