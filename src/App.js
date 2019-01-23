import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import List from './components/List/List';

// const apiPathGenerate = 'http://ec2-3-17-28-164.us-east-2.compute.amazonaws.com:9000/api/generate/';
const apiPathGenerate = 'http://localhost:9000/api/generate/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      generatedUrl: '',
      latestUrls: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  onChange(val) {
    this.setState({
      url: val,
    });
  }

  onSubmit() {
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
  };

  addToList(item) {
    this.setState({
      latestUrls: [...this.state.latestUrls, item],
    });
  }

  render() {
    const generatedUrl = this.state.generatedUrl;
    return (
      <div className="App">
        <div className="App-body">
          <h1 className="App-name" >leetLink</h1>
          <Form url={this.state.url} onChange={this.onChange} onSubmit={this.onSubmit}></Form>
          <div>
            <p>This is the generated url: <a className="generated-url" href={generatedUrl}>{generatedUrl}</a></p>
          </div>
          <List latestUrls={this.state.latestUrls}></List>
        </div>
      </div>
    );
  }
}

export default App;
