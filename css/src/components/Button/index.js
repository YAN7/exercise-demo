import React, { Component } from 'react';

const styles = {
    btn: {
        display: 'inline-block',
    },
    on: {
        backgroundColor: '#ccc',
        opacity: .8,
    }
}

class Button extends Component {
    state={}
    onTouch = () => {
        const { onClick } = this.props;
        this.setState({touchIng:false}, onClick)
    }
    render() {
        const { children, className: cn, style } = this.props;
        const { touchIng } = this.state;
        const o = touchIng ? styles.on : {};
        return (
            <div
                className={cn}
                style={{...styles.btn, ...style, ...o}}
                onTouchStart={()=> this.setState({touchIng:true})}
                onTouchEnd={this.onTouch}
            >
                {children || '点击'}
            </div>
        );
  }
}
export default Button
