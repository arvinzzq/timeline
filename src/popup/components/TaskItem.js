import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import ProgressBar from './ProgressBar';
import { popupStorage } from '../../lib/utils';
import IconClose from '../images/close.svg';
const noop = () => {};

export default class TaskItem extends (PureComponent || Component) {
  static propTypes = {
    itemUpdate: PropTypes.func,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    beginTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired
  };

  static defaultProps = {
    itemUpdate: noop
  };

  handleCheck = (e) => {
    const { index } = this.props;
    const listTasks = popupStorage.getItem('listTasks');
    listTasks[index].status = (+e.target.checked);
    popupStorage.setItem('listTasks', listTasks);
    this.props.itemUpdate();
  };

  handleTaskItemDelete = () => {
    const { index } = this.props;
    const listTasks = popupStorage.getItem('listTasks');
    listTasks.splice(index, 1);
    popupStorage.setItem('listTasks', listTasks);
    this.props.itemUpdate();
  };

  render() {
    const { title, color, beginTime, endTime, status } = this.props;
    return (
      <div
        className={`item-task${status ? ' task--done' : ''}`}
      >
        <img
          className="icon--close"
          src={IconClose}
          onClick={this.handleTaskItemDelete}
        />
        <div
          className="item__title"
        >
          <Checkbox
            defaultChecked={status}
            onChange={this.handleCheck}>
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