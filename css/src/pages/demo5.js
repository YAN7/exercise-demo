import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import cls from './index.less';

export default class Demo5 extends Component {
  render() {
    return (
      <div>
        <div className={cls.demo5}></div>
        <Button onClick={() => router.push('/demo6')}>demo6</Button>
      </div>
    );
  }
}
