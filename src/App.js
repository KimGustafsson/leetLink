import React, { Component } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form.js';
import List from './components/List/List.js';
const apiPathGenerate = 'http://ec2-3-17-28-164.us-east-2.compute.amazonaws.com:9000/api/generate/';
// const apiPathGenerate = 'http://localhost:9000/api/generate/';
const storage = window.localStorage;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      generatedUrl: '',
      latestUrls: storage.latestUrls ? JSON.parse(storage.latestUrls) : [],
    };
  }

  // Save url list in localStorage
  saveInStorage = (list) => {
    storage.clear();
    storage.setItem('latestUrls', JSON.stringify(list));
  }

  // Save input to state
  onChange = (val) => {
    this.setState({
      url: val,
    });
  }

  // Post input to server to be saved in the database
  onSubmit = () => {
    if (this.state.url !== '') {
      console.log('Submitting: ', this.state.url);
      fetch(apiPathGenerate, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: this.state.url,
        })
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          this.setState({
            generatedUrl: result.generatedUrl,
          });
          this.addToList({
            url: this.state.url,
            generatedUrl: result.generatedUrl
          });
        });
    }
  };

  // Updates url list in localStorage
  addToList = (item) => {
    let newList;
    if (this.state.latestUrls.length < 10) {
      newList = [item, ...this.state.latestUrls];
    }
    else {
      newList = this.state.latestUrls.filter((url) => {
        return url !== this.state.latestUrls[9];
      });
      newList.unshift(item);
    }
    this.setState({
      latestUrls: newList,
    });
    this.saveInStorage(this.state.latestUrls);
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app_header}>
          <h1 className={styles.app_name} >leetLink</h1>
        </div>
        <div className={styles.app_body}>
          <Form url={this.state.url} onChange={this.onChange} onSubmit={this.onSubmit}></Form>
          <div>
          </div>
          <List latestUrls={this.state.latestUrls}></List>
        </div>
      </div>
    );
  }
}

export default App;