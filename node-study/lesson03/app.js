const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

const app = express();

app.get('/', (req, res, next) => {
  superagent.get('https://cnodejs.org/')
    .end((err, sres) => {
      if (err) {
        return next(err);
      }
      const $ = cheerio.load(sres.text);
      const items = [];
      $('#topic_list .topic_title').each((idx, element) => {
        const $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href'),
        })
      })
      $('#topic_list .user_avatar img').each((idx, element) => {
        const $element = $(element);
        items[idx].anthor = $element.attr('title');
      })
      res.send(JSON.stringify(items));
    })
})

app.listen(3000, () => {
  console.log('注意,爬虫已启动!');
})
