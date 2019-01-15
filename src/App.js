import React, { Component } from 'react'
import './App.css'
import Form from "./components/Form/Form.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-body">
          <h1 className="App-name" >leetLink</h1>
          <Form></Form>
        </header>
      </div>
    );
  }
}

export default App;
