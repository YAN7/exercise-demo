
import React from 'react';
import cls from './listitem.less';

const aliIcon = require('@i/icon_alipay.png');
const wxIcon = require('@i/icon_wechat.png');
const cashIcon = require('@i/icon_5_modify_package.png');

// const payType = {
//   1: {

//   },
//   2: '支付宝'
// }

const payType = [
  {},
  { title: '微信', icon: wxIcon },
  { title: '支付宝', icon: aliIcon },
]

const DetailListItem = ({ index, platType, coinInTime, deviceName, address, amount, orderType, addTime }) => {
  const rankColorArr = ['#3bc14c', '#ffb627', '#1e72ea'];
  return (
    <li className={cls.detailList}>
      <div className={cls.payInfo}>
        <img className={cls.payIcon} src={orderType ? (payType[platType].icon) : cashIcon} alt='icon' />
        <div className={cls.leftText}>
          <p>{platType ? payType[platType].title : '现金兑币'}支付</p>
          <small>{coinInTime || addTime}</small>
        </div>
        <span style={{ color: rankColorArr[index] }} className={cls.rightText}>{amount}</span>
      </div>
      <div className={cls.deviceName}>
        <span>设备名称</span>
        <span>{deviceName}</span>
      </div>
      <div className={cls.deviceName}>
        <span>交易名店</span>
        <span>{address}</span>
      </div>
    </li>
  )
}

export default DetailListItem;