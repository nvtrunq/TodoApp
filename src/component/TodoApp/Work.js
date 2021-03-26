import React, { Component } from 'react'
import { ListWork } from '../../data/Works'

class Work extends Component {
  state = {
    ListWork: ListWork
  }
  get home() {
    const home = this.state.ListWork.map(work => work.tag === 'Home')
    return (
      <>
        {home.map((work, index) => (
          <li key={index}>
            <input type="radio" />
            <span>{work.name}</span>
          </li>
        ))}
      </>
    )
  }

  get school() {
    const school = this.state.ListWork.map(work => work.tag === 'School')
    return (
      <>
        {school.map((work, index) => (
          <li key={index}>
            <input type="radio" />
            <span>{work.name}</span>
          </li>
        ))}
      </>
    )
  }

  render(tag) {
    if (tag === 'School') {
      return this.school
    } else if (tag === 'Home') {
      return this.home
    } else {
      return (
        <>
          {this.state.ListWork.map((work, index) => (
            <li key={index}>
              <input type="radio" />
              <span>{work.name}</span>
            </li>
          ))}
        </>
      )
    }
  }
}

export default Work
