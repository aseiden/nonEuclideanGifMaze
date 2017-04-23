import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import NavButton from './components/navButton.jsx';
import Caption from './components/caption.jsx';
import Gif from './components/gif.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: [],
      currentCaption: '',
      currentGifLink: '',
      isNewRoom: false,
      isNoGif: false,
    };

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleCaptionSubmit = this.handleCaptionSubmit.bind(this);
    this.handleGifSearch = this.handleGifSearch.bind(this);
  }

  componentDidMount() {
    var _this = this;
    axios.get('/origin').then(function(response) {
      _this.setState({
        currentCaption: response.data.caption,
      });
    });
  }

  handleNavClick(direction) {
    var _this = this;
    var newLoc = this.state.currentLocation;
    var newLocStr = '';
    if (this.checkForBacktrack(direction)) {
      newLoc.pop();
    } else {
      newLoc.push(direction[0]);
    }

    if (newLoc.length === 0) {
      newLocStr = '/origin';
    } else {
      newLocStr = '/' + newLoc.join('');
    }

    axios.get(newLocStr).then(function(response) {
      console.log(response.data);
      _this.setState({
        currentLocation: newLoc,
        currentCaption: response.data.caption,
        isNewRoom: response.data.isNewRoom,
        isNoGif: response.data.isNoGif,
      });
    });
  }

  handleCaptionSubmit(caption) {
    var _this = this;

    axios.post('/' + this.state.currentLocation, {
      location: _this.state.currentLocation.join(''),
      caption: caption,
    }).then(function(response) {
      _this.setState({
        currentCaption: response.data.caption,
        isNewRoom: response.data.isNewRoom,
      });
    });
  }

  handleGifSearch(searchString) {
    var _this = this;

    axios.post('/gif/' + this.state.currentLocation, {
      location: _this.state.currentLocation.join(''),
      searchString: searchString,
    }).then(function(response) {
      _this.setState({
        currentGifLink: response.data.gifLink,
        isNoGif: response.data.isNoGif,
      });
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
        <hr />
        <Gif 
          isNoGif={this.state.isNoGif}
          currentGif={this.state.currentGifLink}
          handleGifSearch={this.handleGifSearch}
        />
        <Caption
          caption={this.state.currentCaption}
          isNewRoom={this.state.isNewRoom}
          handleCaptionSubmit={this.handleCaptionSubmit}
        />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));