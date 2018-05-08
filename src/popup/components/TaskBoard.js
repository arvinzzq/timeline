import React, {PureComponent, Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import TaskItem from './TaskItem';
import NewTaskBoard from './NewTaskBoard';
import IconAdd from '../images/add.svg';

const listTasks = [{
  title: '嘿嘿嘿1',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525790828895
}, {
  title: '嘿嘿嘿2',
  color: '#0e0',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿3',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿4',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿5',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿6',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿7',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿8',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿9',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿10',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}, {
  title: '嘿嘿嘿11',
  color: '#e00',
  beginTime: 1525757128895,
  endTime: 1525797828895
}];

export default class TaskBoard extends (PureComponent || Component) {
  state = {
    visible: false
  };

  handleButtonClick = () => {
    this.setState({
      visible: true
    });
  };

  handleNewTaskOk = () => {
    this.setState({
      visible: false
    });
  };

  handleNewTaskCancel = () => {
    this.setState({
      visible: false
    });
  };

  renderTaskList = () => (
    <div
      className="list-task"
    >
      {listTasks.map((item) => (
        <TaskItem
          key={String(item.title)}
          title={item.title}
          color={item.color}
          beginTime={item.beginTime}
          endTime={item.endTime}
        />
      ))}
    </div>
  )
  renderBottomButton = () => (
    <div
      className="button-timeline--bottom"
      onClick={this.handleButtonClick}
    >
    <img
      className="icon--add"
      src={IconAdd}
    />
      New Task
    </div>
  )
  render() {
    const { visible } = this.state;
    return (
      <div
        className="container-timeline"
      >
        <div
          className="board-task"
        >
          {this.renderTaskList()}
          {this.renderBottomButton()}
        </div>
        <Modal
          title="New Task"
          visible={visible}
          onOk={this.handleNewTaskOk}
          onCancel={this.handleNewTaskCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}