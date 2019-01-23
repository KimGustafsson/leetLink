import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    const originalUrl = this.props.item.url;
    const generatedUrl = this.props.item.generatedUrl;
    return (
      <div>
        <li>
          <p>Original url: <a href={originalUrl}>{originalUrl}</a></p>
          <p>Generated url: <a href={generatedUrl}>{generatedUrl}</a></p>
        </li>
      </div>
    )
  }
}

export default ListItem