import React, { Component } from 'react';
import './Form.css';

// const apiPathGenerate = 'http://ec2-3-17-28-164.us-east-2.compute.amazonaws.com:9000/api/generate/';
const apiPathGenerate = 'http://localhost:9000/api/generate/';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      generatedUrl: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    console.log('onChange: ', e.target.value);
    this.setState({
      url: e.target.value,
    });
  }

  onSubmit = (e) => {
    console.log('Submitting: ', this.state.url);
    e.preventDefault();
    fetch(apiPathGenerate + this.state.url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      this.setState({
        generatedUrl: result,
      });
    });
  };

  render() {
    return (
      <div>
        <h2>Generate a short link:</h2>
        <form onSubmit={this.onSubmit}>
          <input className="form-input" value={this.state.url} name="form_input" type="text" onChange={this.onChange}/>
          <input className="form-submit" type="submit"/>
        </form>
        <div>
          <p>This is the generated url: <a className="generated-url" href={this.state.generatedUrl}>{this.state.generatedUrl}</a></p>
        </div>
      </div>
    )
  }
}

export default Form

// action={apiPathGenerate}