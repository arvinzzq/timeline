import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';

export default class NewTaskBoard extends (PureComponent || Component) {
  static propTypes = {
    isClose: PropTypes.bool
  };

  static defaultProps = {
    isClose: true
  };

  render() {
    const { isClose } = this.props;
    return (
      <div
        className={`container-new-task${isClose ? ' board--close' : ''}`}
      >
      add new task
      </div>
    );
  }
};