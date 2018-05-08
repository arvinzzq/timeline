import React, {PureComponent, Component} from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './components/TaskItem';
import IconAdd from './images/add.svg';
import './popup.scss';

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

class App extends (PureComponent || Component) {
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