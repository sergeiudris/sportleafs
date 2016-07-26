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
import Login from '../Login';
import Box from 'adven-ui/src/GFlexbox';
import Navigation from '../Navigation';

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
      <Box style={{ flexFlow: 'column nowrap'}}>
        <Box  style={{ flexFlow: 'row nowrap', justifyContent: 'space-around', alignItems:'center' }} >
          <Box style={{ flexFlow: 'row nowrap'}}><h3>SportLeafs</h3></Box>
          <Navigation style={{ flexFlow: 'row nowrap'}}/>
        </Box>
        <Login style={{alignSelf:'flex-end'}}  />
      </Box>
    );
  }

}

export default Header;
