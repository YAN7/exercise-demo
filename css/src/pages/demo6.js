import React, { Component } from 'react';
import { Button } from 'antd';
import cls from './index.less';
import router from 'umi/router';

export default class Demo6 extends Component {
  render() {
    return (
      <div className={cls.demo6}>
        <img src="http://csssecrets.io/images/adamcatlace.jpg" alt="img" />
        <img src="http://csssecrets.io/images/adam-sleeping.jpg" alt="img" />
        <img className={cls.circle} src="http://csssecrets.io/images/adamcatlace.jpg" alt="img" />
        <div>
          <div className={cls.path1}></div>
          <div className={cls.path2}></div>
          <div className={cls.path3}></div>
          <div className={cls.path4}></div>
          <div></div>
        </div>
        <Button onClick={() => router.push('/demo7')}>demo7</Button>
      </div>
    );
  }
}
