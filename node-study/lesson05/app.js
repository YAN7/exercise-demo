const async = require('async');

let concurrentCount = 0;
const fetchUrl = (url, callback) => {
  const delay = parseInt(Math.random() * 10000000 % 2000, 10);
  concurrentCount++;
  console.log(`现在的并发数是${concurrentCount}, 正在抓取的是${url}, 耗时${delay}毫秒`);
  setTimeout(() => {
    concurrentCount--;
    callback(null, `${url} html content`);
  }, delay);
}

const urls = [];
for (let i = 0; i < 10; i++) {
  urls.push(`http://datasource${i}`);
}

async.mapLimit(urls, 2, (url, callback) => {
  fetchUrl(url, callback);
}, (err, result) => {
  console.log(`final: ${result}`);
})
