import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/testComp.jsx';
import NavButton from './components/navButton.jsx';

class App extends React.Component {
  // handleNorthClick
  // handleEastClick
  // handleWestClick
  // handleSouthClick
  // handle gif input
  // handle caption input

  
  
  render () {
    console.log(NavButton);
    return (
      <div>
        <NavButton direction={'North'}/>
        <NavButton direction={'East'}/>
        <NavButton direction={'South'}/>
        <NavButton direction={'West'}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));