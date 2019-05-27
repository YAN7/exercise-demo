import React, { Component } from 'react';
import cls from './index.less';

export default class Demo7 extends Component {
  render() {
    return (
      <div className={cls.demo7}>
        <main>
          <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
        <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
          </blockquote>
        </main >
      </div>
    );
  }
}
