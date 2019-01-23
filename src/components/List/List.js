import React, { Component } from 'react';
import styles from './List.module.css';
import './animation.css';
import ListItem from '../ListItem/ListItem.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class List extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <p className={styles.header}>Your ten latest generated urls:</p>
          <TransitionGroup className="url_list">
            {this.props.latestUrls.map((url) => {
              return (
                <CSSTransition
                  key={url.generatedUrl}
                  timeout={500}
                  classNames="fade"
                  >
                    <ListItem key={url.generatedUrl} item={url} />
                  </CSSTransition>
              )
            })}
          </TransitionGroup>
        </ul>
      </div>
    )
  }
}

export default List