
import React from 'react';
import Header from './Header';

import Footer from '../Footer';
import UnderContruction from 'adven-ui/under-construction';

import Link from '../Link';
import s from './Layout.css';
require('adven-ui/css/flexbox.css');
require('adven-ui/css/normalize.scss');
require('adven-ui/css/global.scss');
require('font-awesome/scss/font-awesome.scss');
import cx from 'classnames';
import Message from '../message';
class Layout extends React.Component {

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={cx("flexbox column nowrap", s.root) }>
        <Header/>
        <Message />
        <section className={s.content}>{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
