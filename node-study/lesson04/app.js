const express = require('express');
const eventproxy = require('eventproxy');
const superagent = require('superagent');
const cheerio = require('cheerio');
const url = require('url');

const cnodeUrl = 'https://cnode.org/';
const app = express();

superagent.get(cnodeUrl)
  .end((err, res) => {
    if (err) {
      return console.log('err', err);
    }
    const topicUrls = [];
    const $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each((idx, element) => {
      const $element = $(element);
      const href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    })
    const ep = new eventproxy();
    ep.after('topic_html', topicUrls.length - 35, (topics) => {
      topics = topice.map((topicPair) => {
        const topicUrl = topicPair[0];
        const topicHtml = topicPair[1];
        const $ = cheerio.load(topicHtml);
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim(),
        })
      })
    })
    console.log('topics', topics);
  })

