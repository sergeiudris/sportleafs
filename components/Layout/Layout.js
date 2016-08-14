
import React from 'react';
import Header from './Header';

import Footer from '../Footer';
import Link from '../Link';
import s from './Layout.css';
require('adven-ui/css/flexbox.css');
require('adven-ui/css/global.css');


class Layout extends React.Component {

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="flexbox column nowrap">
        <Header/>
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
