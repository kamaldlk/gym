import React, { Component } from 'react';
import styles from './styles/app.css';
import Isvg from 'react-inlinesvg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.homeContainer}>
        I Love You Baby :) :)
      </div>
    );
  }
}

export default App;
