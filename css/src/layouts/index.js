import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './index.less';

export default class extends React.Component {
  componentWillMount() {
    // 防止页面被拖拽
    // document.body.addEventListener('touchmove', (ev) => {
    //   ev.preventDefault();
    // });
    window.proprietorId = "oGkk8wJBN-Vk64ntC3hYRnUJ7Lic";
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        component="div"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div className="content-inner" key={this.props.location.pathname}>
          {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    );
  }

}