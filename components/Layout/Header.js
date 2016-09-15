import React from 'react';

import FirebaseLogins from 'firebase-logins';
import config from '../../config.js';

import Link from '../Link';
import cx from 'classnames';
import s from './header.css';
import logo from '../../img/sportleafs-1024.png'

require('adven-ui/css/flexbox.css');
require('adven-ui/css/sizes.css');

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
        <div className="flexbox row nowrap">
          <Link to="/" className={s.logo}><img  className={s.img}  src={logo} /></Link>
          <div className={cx("flexbox row nowrap", s.rhs) }>
            <FirebaseLogins config={config} className={s.logins}  google facebook twitter github/>
          </div>
        </div>
       
      </div>
    );
  }

}

export default Header;
