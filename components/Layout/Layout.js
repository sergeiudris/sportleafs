/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from './Header';

import Footer from '../Footer';
import s from './Layout.css';
import Box from 'adven-ui/src/GFlexbox';

class Layout extends React.Component {

  componentDidMount() {
   // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
   // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <Box style={{ flexFlow: 'column nowrap' }}>
          <Header/>
          <Box rootType="main">
          <div className={s.content} {...this.props} />
          </Box>
          <Box><Footer /></Box>
      </Box>
    );
  }
}

export default Layout;
