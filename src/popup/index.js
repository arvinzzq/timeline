import React, {PureComponent, Component} from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './components/TaskItem';
import IconAdd from './images/add.svg';
import './popup.scss';

const listTasks = [{
  title: '嘿嘿嘿1'
}, {
  title: '嘿嘿嘿2'
}, {
  title: '嘿嘿嘿3'
}, {
  title: '嘿嘿嘿4'
}, {
  title: '嘿嘿嘿5'
}, {
  title: '嘿嘿嘿6'
}, {
  title: '嘿嘿嘿7'
}, {
  title: '嘿嘿嘿8'
}, {
  title: '嘿嘿嘿9'
}, {
  title: '嘿嘿嘿10'
}, {
  title: '嘿嘿嘿11'
}]

class App extends (PureComponent || Component) {
  renderTaskList = () => (
    <div
      className="list-task"
    >
      {listTasks.map((item) => (
        <TaskItem
          key={String(item.title)}
          title={item.title}
        />
      ))}
    </div>
  )
  renderBottomButton = () => (
    <div
      className="button-timeline--bottom"
    >
    <img
      className="icon--add"
      src={IconAdd}
    />
      New Task
    </div>
  )
  render() {
    return (
      <div
        className="container-timeline"
      >
        {this.renderTaskList()}
        {this.renderBottomButton()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));