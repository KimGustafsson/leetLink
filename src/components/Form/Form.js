import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  onChange = (e) => {
    this.props.onChange(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const url = this.props.url;
    return (
      <div>
        <h2>Generate a short link:</h2>
        <form onSubmit={this.onSubmit}>
          <input className="form-input" value={url} name="form_input" type="text" onChange={this.onChange} />
          <input className="form-submit" type="submit" />
        </form>
      </div>
    )
  }
}

export default Form