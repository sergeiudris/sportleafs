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
import Link from '../Link';
import Box from 'adven-ui/src/GFlexbox';
const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Navigation extends React.Component {

  componentDidMount() {
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <Box rootType="nav" style={_extends({},this.props.style,{ flexFlow: 'row nowrap', justifyContent:'space-between' })}>
         <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sport/nba">NBA</Link>
          <Link to="/sport/football">Football</Link>
          <Link to="/sport/nhl">NHL</Link>
          <Link to="/sport/nfl">NFL</Link>
          <Link to="/sport/tennis">Tennis</Link>
          <Link to="/sport/olympics">Olympics</Link>
          <Link to="/privacy">Privacy & Terms</Link>
          <Link to="/not-found">Not Found (demo) </Link>
      </Box>
    );
  }

}

export default Navigation;
