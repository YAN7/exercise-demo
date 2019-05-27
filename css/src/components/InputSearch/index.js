/**
 * InputSearch
 */

import React, { Component } from 'react';
import s from './index.less';
import si from './icon_search.png';
import di from './icon_clear_keywords.png';

export default class InputSearch extends Component {
	state = {}
	focusInput = (e) => {
		const value = e.target.value;
		const length = e.target.value.length;
		this.setState({ del: length > 0, value });
	}
	del = () => {
		const { onSubmit } = this.props;
		this.dom.value = '';
		this.setState({ del: false });
		onSubmit('');
	}
	render() {
		const { del, value } = this.state;
		const { onSubmit, placeholder } = this.props;
		return (
			<div className={s.search}>
				<form action="#" onSubmit={(e) => onSubmit(value, e)}>
					<input type="search" onChange={this.focusInput} ref={d => this.dom = d} />
				</form>
				{del ?
					<img className={s.img} src={di} onClick={this.del} alt="icon" /> :
					<span><img src={si} alt="icon" />{placeholder}</span>
				}
			</div>
		);
	}
}

