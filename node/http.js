const http = require('http');

const serve = http.createServer((req, res) => {
    // 最简单的路由系统
    if (req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/req') {
        res.write(JSON.stringify({a: 123, b: 456}));
        res.end();
    }
    if (req.url === '/res') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

serve.listen(3000);

console.log('the server is listenning at port 3000')