import React, { Component } from 'react'
import Tags from './Tags'
import List from './ListWork'
import Task from './Task'



import { works } from '../../data/works'
import { tags } from '../../data/tags'
import { status } from '../../data/status'


// const task = {
//   id: 1,
//   name: 'Hoc tieng anh',
//   groupId: 1,
//   status: 'COMPLETED', // PENDING, DOING, ....
// }

class TodoApp extends Component {
  state = {
    tasks: works,
    groupTags: tags,
    groupStatus: status,
    currentTags: 0,
    currentStatus: 0,
    valueAdd: ''
  }

  iconAdd = React.createRef()
  inputAdd = React.createRef()

  setCurrentTags = id => {
    this.setFilterData({
      currentTags: id,
      currentStatus: this.state.currentStatus
    })
  }

  setCurrentStatus = id => {
    this.setFilterData({
      currentTags: this.state.currentTags,
      currentStatus: id
    })
  }

  setFilterData = ({currentTags, currentStatus}) => {
    this.setState({
      currentTags,
      currentStatus,
    })
  }

  createId = () => {
    let max = 0

    this.state.tasks.forEach(item => {
      if (item.id > max) {
        max = item.id
      }
    })

    return max + 1
  }

  addWork = () => {
    const value = this.inputAdd.current.value
    const tagId = this.state.currentTags
    const work = {
      id: this.createId(),
      name: value,
      tag: tagId,
      status: 1
    }
    const newData = this.state.tasks
    newData.push(work)
    if (tagId !== 0 && value) {
      this.setState({
        currentTags: tagId,
        tasks: newData,
        valueAdd: ''
      })
    } else {
      if (!value) {
        alert ('Please enter a task')
      }
      if (tagId === 0) {
        alert ('Please choose a tag')
      }
    }

  }

  enterAdd = (e) => {
    if(e.charCode === 13) {
      this.addWork()
    }
  }

  changeStatus = id => {
    const item = this.state.tasks.find(row => row.id === id)
    if(item.status !== 1)
    {
      item.status = 1
    }else{
      item.status = 3
    }
    this.setState ({
      ...this.state
    })
  }

  deleteWork = (id) => {
    const newData = this.state.tasks.filter(item => item.id !== id)
    this.setState({
      tasks: newData,
      filteredTasks: newData
    })
  }

  onChange = (e) => {
    const {value} = e.target
    this.setState({
      valueAdd: value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>REACT TODO APP</h1>
          <div className="border"></div>
        </div>

        <div className="content">
          <div className="inputAdd">
            <input ref = {this.inputAdd} type="text" placeholder="What do you need to do?"
              onKeyPress={(e) => this.enterAdd(e)} value={this.state.valueAdd} onChange={(e) => this.onChange(e)}
            />
            <i ref = {this.iconAdd} className="fas fa-plus" onClick={this.addWork}></i>
          </div>

          <div className="tag">
            <li className="item-tags">Tags</li>
            <Tags
              groupTags={this.state.groupTags}
              currentTags={this.state.currentTags}
              setCurrentTags={this.setCurrentTags}
            />
            <li className="item">Reset</li>
          </div>

          <div className="list-work">
            <List
              changeStatus={this.changeStatus}
              works={this.state.tasks}
              deleteWork={this.deleteWork}
              currentTags={this.state.currentTags}
              currentStatus={this.state.currentStatus}
            />
          </div>

          <div className="task">
            <Task
              groupsStatus={this.state.groupStatus}
              currentStatus={this.state.currentStatus}
              setCurrentStatus={this.setCurrentStatus}
              works={this.state.tasks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp
