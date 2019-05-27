import React from 'react';

import cls from './listitem.less';

const StoreListItem = ({ index, extra = "设备数", onClick, item = {} }) => {
  const rankColorArr = ['#3bc14c', '#ffb627', '#1e72ea'];
  const { deviceNum, amount, address } = item;
  return (
    <li onClick={() => onClick(item, index)} className={cls.storeList} key={index}>
      <span style={{ background: rankColorArr[index] }} className={cls.circle}>{index + 1}</span>
      <div className={cls.leftText}>
        <p>{address}</p>
        <small>{extra}:{deviceNum}</small>
      </div>
      <span style={{ color: rankColorArr[index] }} className={cls.rightText}>{amount || 0}</span>
    </li>
  )
}

export default StoreListItem;
