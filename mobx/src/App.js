import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { autorun, reaction, toJS } from 'mobx';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import PageHeader from 'antd/lib/page-header';
import Tag from 'antd/lib/tag';

import './App.css';

function throttle(fn, gapTime) {
  let _lastTime = null;

  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}

function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}

var throttle2 = function (func, delay) {
  var prev = Date.now();
  return function () {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}

const handler = throttle2(() => console.log(123), 1000)

const TableHeader = (
  <PageHeader
    title="Title"
    tags={<Tag color="red">100</Tag>}
  />
)


const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 22,
    width: 100,
    fixed: 'left',
    render: (text, record, index) => index,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 1,
    width: 100,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 11,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 2,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 3,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 4,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 5,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 6,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 7,
    // width: 100,
  },
  {
    title: '手机',
    dataIndex: 'address',
    key: 8,
  },
]
@inject('table')
@observer
class App extends Component {

  state = {
    selectedRowKeys: [],
  }

  // componentDidMount() {
  //   this.tableBody = document.querySelector('.ant-table-body');
  //   autorun(() => {
  //   })
  //   reaction(() => this.props.table.count, (haha) => {
  //   })
  //   window.addEventListener("beforeunload", this.handleWindowBeforeUnload);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  // }

  // handleWindowBeforeUnload = () => {
  //   return 'hahaha'
  // }

  // onChange = (selectedRowKeys, selectedRows) => {
  //   this.props.table.selectedRowKeysChange(selectedRowKeys)
  // }

  // add = () => {
  //   this.props.table.addCount();
  // }

  // addCol = () => {
  //   this.props.table.addData()
  // }

  // addLoading = () => {
  //   this.props.table.loading.set(Math.random(), !!Math.random() > 0.5)
  // }

  // // 监测tanle body的滚动
  // scroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = this.tableBody
  //   if ((scrollTop + clientHeight === scrollHeight) && scrollTop > 0) {
  //     handler()
  //   }
  // }


  render() {
    const { data, selectedRowKeys, count, hehe, loading, haha } = this.props.table;
    return (
      <div className="App" onScrollCapture={this.scroll}>
        <Button type="primary" onClick={this.addCol}>
          添加
        </Button>
        <Table
          // title={() => TableHeader}
          columns={columns}
          dataSource={data}
          rowKey="id"
          // rowSelection={{
          //   selectedRowKeys,
          //   onChange: this.onChange,
          //   fixed: true,
          // }}
          pagination={false}
          // scroll={{ x: 700, y: 800 }}
          size="middle"
        // title={(a, b) => { console.log(a, b); return <span>123</span>}}
        />
      </div>
    );
  }
}

export default App;
