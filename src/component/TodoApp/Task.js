import React, { Component } from 'react'

class Task extends Component {
  jobPerformance = () => {
    let workCompleted = 0
    this.props.works.forEach(item => {
      if(item.status === 3) workCompleted ++
    })
    return workCompleted
  }
  render() {
    return (
      <>
        <span>
          {this.props.groupsStatus.map((task, index) => (
            <li key={index} onClick={() => this.props.setCurrentStatus(task.id)}>
              <button className={this.props.currentStatus === task.id ? "btn-task focus" : "btn-task"}>{task.name}</button>
            </li>
          ))}
        </span>
        <span className="job-performance">{this.jobPerformance()}/{this.props.works.length} Complete</span>
      </>
    )
  }
}

export default Task
