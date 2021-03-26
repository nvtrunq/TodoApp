import React, { Component } from 'react'

class List extends Component {
  filterData = () => {
    const {works, currentStatus, currentTags} = this.props
    const data = works.filter(item => {
      if (currentStatus === 0 && currentTags === 0) {
        return true
      }
      if (currentStatus === 0 && currentTags !== 0) {
        return item.tag === currentTags
      }
      if (currentStatus !== 0 && currentTags === 0) {
        return item.status === currentStatus
      }
      if (currentStatus !== 0 && currentTags !== 0) {
        return item.status === currentStatus && item.tag === currentTags
      }
    })
    return data
  }
  changeClass = id => {
    const item = this.props.works.find(row => row.id === id)
    if (item.status === 2) return 'doing'
    if (item.status === 3) return 'completed'
  }

  render() {
    return (
      <>
        {

          this.filterData().map((work, index) => (
            <li key={index}>
              <div className="work">
                <input type="checkbox" id ={index} onClick={() => this.props.changeStatus(work.id)}/>
                <label htmlFor={index} className={this.changeClass(work.id)}>{work.name}</label>
              </div>
              <div className="delete-work" onClick={() => this.props.deleteWork(work.id)}>
                <i className="fas fa-times"></i>
              </div>
            </li>
        ))}
      </>
    )
  }
}

export default List
