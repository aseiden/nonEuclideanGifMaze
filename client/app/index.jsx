import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import AwesomeComponent from './components/testComp.jsx';
import NavButton from './components/navButton.jsx';
import Caption from './components/caption.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: [],
      currentCaption: ''
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  componentDidMount() {
    var _this = this;
    axios.get('/origin').then(function(response) {
      _this.setState({
        currentCaption: response.data,
      });
    });
  }

  handleNavClick(direction) {
    var newLoc = this.state.currentLocation;
    if (this.checkForBacktrack(direction)) {
      newLoc.pop();
    } else {
      newLoc.push(direction[0]);
    }

    console.log(this.state.currentCaption);

    this.setState({
      currentLocation: newLoc,
    });
  }

  checkForBacktrack(direction) {
    var cL = this.state.currentLocation;
    if (direction[0] === 'N' && cL[cL.length - 1] === 'S') {
      return true;
    }

    if (direction[0] === 'S' && cL[cL.length - 1] === 'N') {
      return true;
    }

    if (direction[0] === 'E' && cL[cL.length - 1] === 'W') {
      return true;
    }

    if (direction[0] === 'W' && cL[cL.length - 1] === 'E') {
      return true;
    }

    return false;
  }

  loadCaptionFromServer(location) {
    axios.get(this.state.currentLocation).then(function(response) {
      console.log('THIS IS THE AXIOS GET RESPONSE: ', response);
    }).catch(function(error) {
      console.log(error);
    });
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
        <Caption
          caption={this.state.currentCaption}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));