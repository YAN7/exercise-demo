import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import cls from './index.less';

export default class Demo2 extends Component {
  render() {
    return (
      <div>
        <div className={cls.loading1}>loading1</div>
        <div className={cls.loading2}>loading2</div>
        <div className={cls.loading3}>loading3</div>
        <Button onClick={() => router.push('/demo4')} >demo3</Button>
      </div>
    );
  }
}