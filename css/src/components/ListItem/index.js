import React, { Component } from 'react';
import cls from './index.less';

export default class ListItem extends Component {
  render() {
    const { icon, click, item, index, title, value, extra } = this.props;
    return (
      <div onClick={() => click(item, index)} className={cls.detail}>
        {icon}
        <div className={cls.item}>
          <p>{title}</p>
          <p>{extra}</p>
        </div>
        <span>{value}</span>
      </div>
    );
  }
}
