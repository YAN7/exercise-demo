import React, { Component } from 'react';
import router from 'umi/router';
import { Button } from 'antd';

import cls from './index.less';

export default class Home extends Component {

  state = {
    num: 0,
  }

  add = (flag) => {
    this.setState(({ num }) => ({
      num: ++num,
    }))
  }

  render() {
    const { num } = this.state;
    return (
      <div className={cls.wrapper}>
        <div className={cls.demo1} data-num={num} data-width='200px'></div>
        <Button onClick={this.add}>加1</Button>
        <Button onClick={() => router.push('/demo2')}>demo2</Button>
      </div>
    );
  }
}
