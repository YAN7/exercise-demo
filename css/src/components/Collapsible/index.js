/**
 * Collapsible
 * status状态 1：显示向下箭头；2：显示loading；3：显示向上箭头
 */

import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import s from './index.less';
const down = require('../../assets/images/btn_detail.png');
const up = require('../../assets/images/btn_take_up.png');
const load = require('../../assets/images/btn_refresh.png');
const signal1 = require('../../assets/images/icon_signal_1.png');
const signal2 = require('../../assets/images/icon_signal_2.png');
const signal3 = require('../../assets/images/icon_signal_3.png');
const signal4 = require('../../assets/images/icon_signal_4.png');
const signal5 = require('../../assets/images/icon_signal_5.png');
const signals = { signal1, signal2, signal3, signal4, signal5 }
const texts = {signal1: '有问题', signal2: '比较差', signal3: '一般', signal4: '良好', signal5: '极佳'}

function Item({data, detailClick}) {
	return (
		<div className={s.item} onClick={detailClick.bind(null, {detail: {...data, img: signals[`signal${data.signal}`], text: texts[`signal${data.signal}`]}})}>
			{data.name}<sub>(1币/次)</sub>
			<img src={signals[`signal${data.signal}`]} alt='icon'/>
		</div>
	)
}

export default class Collapsiblec extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { collapsibleClick, data, detailClick, refreshClick } = this.props;
		return (
			<div className={s.collapsible}>
				<Collapsible
					trigger={
						(<div className={s.coll}>
							{data.name}
							<span className={s.num}>{data.value}<span>台</span></span>
							{!data.open ? <img src={down} className={s.arrow} alt='icon'/> : <img src={up} className={s.arrow} alt='icon'/>}
							<span className={s.right}>不在线0</span>	
							{refreshClick ? <span className={s.re} onClick={refreshClick}><img className={data.loading ? s.load : s.unload} src={load} alt='icon'/>刷新</span> : null}
						</div>)
					}
					transitionTime={150}
					open={data.open}
					handleTriggerClick={collapsibleClick}
				>
					{data.items.map(v => {
						return (
							<Item key={Math.random()} data={v} detailClick={detailClick}/>
						);
					})}
				</Collapsible>
			</div>
			// <div className={s.collapsible} onClick={collapsibleClick}>
			// 	<div className={s.coll}>
			// 		{data.name}
			// 		<span className={s.num}>{data.value}<span>台</span></span>
			// 		{!data.open ? <img src={down} className={s.arrow} alt='icon'/> : <img src={up} className={s.arrow} alt='icon'/>}
			// 		<span className={s.right}>不在线0</span>	
			// 		{refreshClick ? <span className={s.re} onClick={refreshClick}><img className={data.loading ? s.load : s.unload} src={load} alt='icon'/>刷新</span> : null}
			// 	</div>
			// 	<div className={s.items}>
			// 		{data.items.map(v => {
			// 			return (
			// 				<Item key={Math.random()} data={v} detailClick={detailClick}/>
			// 			);
			// 		})}
			// 	</div>
			// 		{/* transitionTime={150}
			// 		open={data.open} */}
			// </div>
		);
	}
}

