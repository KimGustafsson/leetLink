import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.latestUrls.map((url) => {
            return (
              <ListItem key={url.generatedUrl} item={url} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default List