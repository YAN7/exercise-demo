import React, { Component } from 'react';
import s from './index.less';

class Popup extends Component {
    state = {
        height: 0,
    }
    onClick = () => {
        this.setState({ height: '100vh' })
    }
    onClose = () => {
        this.setState({ height: 0 })
    }
    render() {
        const { children, renderBotton } = this.props
        return (
            <div>
                <div className={s.wrap_mask} style={this.state} />
                <div className={s.wrap} style={this.state}>
                    <div className={s.cont}>
                        <div className={s.top}>{children}</div>
                        <div className={s.btm}>{renderBotton}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Popup
