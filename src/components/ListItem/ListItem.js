import React, { Component } from 'react';
import styles from './ListItem.module.css';

class ListItem extends Component {
  render() {
    const originalUrl = this.props.item.url;
    const generatedUrl = this.props.item.generatedUrl;
    return (
      <li className={styles.list_item}>
        <p className={styles.generated_url}><span>Generated url: </span><a href={generatedUrl}>{generatedUrl}</a></p>
        <p className={styles.original_url}><span>Original url: </span> {originalUrl}</p>
      </li>
    )
  }
}

export default ListItem