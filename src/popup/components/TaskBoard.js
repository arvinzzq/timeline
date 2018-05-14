import React, {PureComponent, Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import TaskItem from './TaskItem';
import NewTaskForm from './NewTaskForm';
import { popupStorage } from '../../lib/utils';
import IconAdd from '../images/add.svg';
import ImgEmpty from '../images/empty.svg';

export default class TaskBoard extends (PureComponent || Component) {
  state = {
    visible: false,
    listTasks: []
  };

  componentDidMount() {
    this.refreshBoard();
  }

  handleButtonClick = () => {
    this.setState({
      visible: true
    });
  };

  handleNewTaskCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleNewTaskOk = () => {
    this.setState({
      visible: false
    });
    this.refreshBoard();
  };

  refreshBoard = () => {
    this.setState({
      listTasks: popupStorage.getItem('listTasks') || []
    })
  };

  renderTaskList = () => {
    const { listTasks } = this.state;
    return (
      <div
        className="list-task"
      >
        {listTasks.length ? listTasks.map((item, index) => (
          <TaskItem
            key={`${item.title}-${index}`}
            index={index}
            title={item.title}
            color={item.color}
            beginTime={item.beginTime}
            endTime={item.endTime}
            status={item.status}
            itemUpdate={this.refreshBoard}
          />
        )) : (
          <img
            className="image-no-task"
            src={ImgEmpty}
          />
        )}
      </div>
    );
  };

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
  );
  
  render() {
    const { visible } = this.state;
    return (
      <div
        className={`container-timeline clearfix${visible ? ' timeline--open' : ''}`}
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
          onCancel={this.handleNewTaskCancel}
          footer={null}
        >
          <NewTaskForm
            handleOk={this.handleNewTaskOk}
            handleCancel={this.handleNewTaskCancel}
          />
        </Modal>
      </div>
    )
  }
}