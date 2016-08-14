import React from 'react';

import FirebaseLogins from 'firebase-logins';
import config from '../../config.js';
require('adven-ui/css/flexbox.css');
import Link from '../Link';
import cx from 'classnames';
import s from './header.css';

class Header extends React.Component {

  componentDidMount() {
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    // return (
    //   <header className="mdl-layout__header" ref={node => (this.root = node) }>
    //     <div className="mdl-layout__header-row" {...this.props} />
    //     <Login  />
    //   </header>
    // );

    return (
      <div className={cx("flexbox column nowrap", s.header) }>
        <div  className="flexbox column nowrap" >
          <Link to="/"><h3>Sportleafs</h3></Link>
          <FirebaseLogins config={config} google facebook twitter github/>
          <nav className="flexbox row nowrap justify-content-space-around">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sport/nba">NBA</Link>
            <Link to="/sport/football">Football</Link>
            <Link to="/sport/nhl">NHL</Link>
            <Link to="/sport/nfl">NFL</Link>
            <Link to="/sport/tennis">Tennis</Link>
            <Link to="/sport/olympics">Olympics</Link>
          </nav>
        </div>
      </div>
    );
  }

}

export default Header;
