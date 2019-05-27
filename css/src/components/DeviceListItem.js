import React from 'react';
import cls from './listitem.less';

const DeviceListItem = ({ index, item = {}, onClick = () => { } }) => {
  const rankColorArr = ['#3bc14c', '#ffb627', '#1e72ea'];
  const { deviceName, amount, } = item;
  return (
    <li onClick={() => onClick(item, index)} className={cls.deviceList}>
      <span style={{ background: rankColorArr[index] }} className={cls.circle}>{index + 1}</span>
      <p className={cls.leftText}>{deviceName}</p>
      <span style={{ color: rankColorArr[index] }} className={cls.rightText}>{amount || 0}</span>
    </li>
  )
}

export default DeviceListItem;