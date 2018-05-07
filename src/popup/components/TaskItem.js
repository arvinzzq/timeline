import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';

export default class TaskItem extends (PureComponent || Component) {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const { title } = this.props;
    return (
      <div
        className="item-task"
      >
        {title}
      </div>
    )
  }
};