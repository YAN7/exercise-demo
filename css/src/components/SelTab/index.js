import React, { Component } from 'react';
import clns from 'classnames';
import cls from './index.less';

export default class SelTab extends Component {

  state = {
    sel: 0,
  }

  selTab = (i, t) => {
    this.setState({
      sel: i
    })
    this.props.selTab && this.props.selTab(i, t);
  }

  render() {

    const { tabs, theme } = this.props;
    const { sel } = this.state;
    const left = (sel + 0.5) / tabs.length * 100;
    return (
      <header className={clns(cls.header, cls[theme])}>
        <div style={{ left: `${left.toFixed(2)}%` }} className={cls.line}></div>
        {tabs.map((t, i) => (
          <div className={cls[sel === i ? 'active' : '']} key={i} onClick={() => this.selTab(i, t)}>{t.title}</div>
        ))}
      </header>
    );
  }
}
