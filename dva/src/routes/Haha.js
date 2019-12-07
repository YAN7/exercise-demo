import React from 'react';
import PropTypes from 'prop-types';

class Haha extends React.Component {

  static propType = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 123 | 456,
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

export default Haha;
