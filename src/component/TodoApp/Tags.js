import React, { Component } from 'react'

class Tags extends Component {

  render() {
    return (
      <>
        {this.props.groupTags.map((tags, index) => (
          <li
            key={index}
            className={this.props.currentTags === tags.id ? "item is-active" : "item"}
            onClick={() => this.props.setCurrentTags(tags.id)}
          >
            <div className={tags.name.toLowerCase() + " radio"}></div>
            <span>{tags.name}</span>
          </li>
        ))}

      </>
    )
  }
}

export default Tags
