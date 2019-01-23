import React, { Component } from 'react';
import styles from './Form.module.css';
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
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input className={styles.form_input} value={url} placeholder="Url goes here, hit enter to generate" name="form_input" type="text" onChange={this.onChange} />
      </form>
    )
  }
}

export default Form