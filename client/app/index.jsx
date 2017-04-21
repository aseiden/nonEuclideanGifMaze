import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/testComp.jsx';
import NavButton from './components/navButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: [],
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(direction) {
    var newLoc = this.state.currentLocation;
    if (this.checkForBacktrack(direction)) {
      newLoc.pop();
      this.setState({
        currentLocation: newLoc,
      });
    } else {
      newLoc.push(direction[0]);
      this.setState({
        currentLocation: newLoc,
      });
    }
  }

  checkForBacktrack(direction) {
    if (direction[0] === 'N' && this.state.currentLocation[this.state.currentLocation.length - 1] === 'S') {
      return true;
    }

    if (direction[0] === 'S' && this.state.currentLocation[this.state.currentLocation.length - 1] === 'N') {
      return true;
    }

    if (direction[0] === 'E' && this.state.currentLocation[this.state.currentLocation.length - 1] === 'W') {
      return true;
    }

    if (direction[0] === 'W' && this.state.currentLocation[this.state.currentLocation.length - 1] === 'E') {
      return true;
    }

    return false;
  }
  
  render () {

    return (
      <div>
        <p>You are currently at {this.state.currentLocation}</p>
        <NavButton 
          direction={'North'}
          handleNavClick={this.handleNavClick}
        />
        <NavButton 
          direction={'East'}
          handleNavClick={this.handleNavClick}
        />
        <NavButton 
          direction={'South'}
          handleNavClick={this.handleNavClick}
        />
        <NavButton 
          direction={'West'}
          handleNavClick={this.handleNavClick}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));