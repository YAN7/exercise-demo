import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import cls from './index.less';

export default class Demo3 extends Component {
  render() {
    return (
      <div>
        <div className={cls.demo3}>
          Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock.
          Sausage beef beef ribs aliquip t-bone mollit.
          Quis beef tri-tip sunt, cupim ut magna salami t-bone.
          Ut laboris bresaola ribeye biltong landjaeger.
          Chuck pork belly sed sausage.
        </div>
        <Button onClick={() => router.push('/demo3')}>demo3</Button>
      </div>
    );
  }
}
