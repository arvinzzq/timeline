import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import ProgressBar from './ProgressBar';

export default class TaskItem extends (PureComponent || Component) {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    beginTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired
  };

  state = {
    disabled: false
  }

  handleCheck = (e) => {
    console.log('checkbox is clicked ~');
    this.setState({
      disabled: e.target.checked
    });
  }

  render() {
    const { disabled } = this.state;
    const { title, color, beginTime, endTime } = this.props;
    return (
      <div
        className={`item-task${disabled ? ' task--done' : ''}`}
      >
        <div
          className="item__title"
        >
          <Checkbox onChange={this.handleCheck}>
            <span
              className="title__content"
            >
              {title}
            </span>
          </Checkbox>
        </div>
        <div
          className="item__progress-bar"
        >
          <ProgressBar
            style={{
              width: '100%',
              position: 'absolute',
              top: '50%',
              marginTop: '-10px'
            }}
            className="progress-bar"
            color={color}
            beginTime={beginTime}
            endTime={endTime}
          />
        </div>
      </div>
    )
  }
};