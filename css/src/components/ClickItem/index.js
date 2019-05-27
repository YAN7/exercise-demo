import React, { Component } from 'react';
import s from './index.less';
import img from './btn_menu_detail.png'

class ClickItem extends Component {
    state={}
    onTouch = () => {
        const { onClick} = this.props;
        this.setState({touchIng:false}, onClick)
    }
    render() {
        const { title, leftExtra, rightExtra, uneffect } = this.props;
        const { touchIng } = this.state;
        return (
            <div
                className={ touchIng && !uneffect ? s.wrap_on : s.wrap_off}
                onTouchStart={()=> this.setState({touchIng:true})}
                onTouchEnd={this.onTouch}
            >
                {title}
                {leftExtra}
                <img src={img}  alt='icon' className={s.img}/>
                {rightExtra ? <span className={s.right}>{rightExtra}</span> : null}
            </div>
        );
  }
}
export default ClickItem
