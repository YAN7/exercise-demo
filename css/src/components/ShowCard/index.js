import React, { Component } from 'react';
import cls from './index.less';

export default class ShowCard extends Component {
  render() {
    return (
      <div className={cls.main}>
        <div className={cls.card}>
          <span className={cls.title}>总营收(元)</span>
          <span className={cls.money}>4000.00</span>
          <div className={cls.distribution}>
            <div>
              <p>2800.00</p>
              <p>线上营收(元)</p>
            </div>
            <div>
              <p>1200.00</p>
              <p>现金营收(元)</p>
            </div>
          </div>
        </div>
        <div className={cls.consume}>
          <span>礼品消耗: 0</span>
          <span>投币数: 线上152 + 线下83</span>
        </div>
      </div>
    );
  }
}
