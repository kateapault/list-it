import React from 'react';

import './index.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
  state = {
    page: 'roll-letter'
  }

  changePage = pageName => {
    this.setState({
      page: pageName
    })
  }

  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        <Main page={this.state.page} />
      </div>
    );
  }
}

export default App;
