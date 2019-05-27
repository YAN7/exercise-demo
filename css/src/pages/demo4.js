import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import cls from './index.less';

export default class Demo4 extends Component {
  render() {
    return (
      <div className={cls.demo4}>
        <h1>css is awesome!</h1>
        <Button onClick={() => router.push('/demo5')}>demo5</Button>
      </div>
    );
  }
}
