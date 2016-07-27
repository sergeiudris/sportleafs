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
import Layout from '../../components/Layout';
import twit from '../../data/localhost.js'
//import { title, html } from './index.md';
import GJson from 'adven-ui/src/GJson';
import Box from 'adven-ui/src/GFlexbox';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const title = 'Sport';



class SportPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [], omdba: [] };
  }

  componentDidMount() {
    document.title = title;
    twit(this);

    // twttr.widgets.createTimeline({
    //   sourceType: "list",
    //   ownerScreenName: "JoggenSerge",
    //   slug: "nba"
    // }, document.getElementById("twitter"));

  }



  onClick(e) {

  }

  onKeyUp(e) {
    // const value = e.target.value;
    // const filtered = this.state.omdba.filter(function(e,i,a){
    //   return e.Title.match(new RegExp(`^${value}.*$`,'gi'));
    // })
    // this.setState({omdbaf: filtered.length ?filtered:null})
  }

  render() {
    const omdba = this.state.omdbaf || this.state.omdba || [];
    // <li key={i} className={Box.s.flexbox} >

    //   </li>
    function runAnimation(i, evt) {
      this.refs["velocity" + i].runAnimation({ stop: true });
    }

    return (
      <Layout>
        <h1>{title}</h1>
        <h3>{this.props.location.params.sport}</h3>
        <input type="text" placeholder="search..." ref="search" onKeyUp={this.onKeyUp.bind(this) } />
        <VelocityTransitionGroup
          runOnMount
          enter={{ animation: { opacity: 1, } }}
          leave={{ animation: { opacity: 0 } }}
          duration={100}
          component={Box}
          style={{ flexFlow: 'row wrap' }}
          >
          {
            omdba.map((el, i, a) => {

              return (
                <Box key={i} style={{ flexFlow: 'column nowrap', width: "20vw", margin: "1vw" }}>
                  <VelocityComponent animation="callout.tada" duration={500} ref={"velocity" + i}>
                    <Box rootType="div" title={el.Title || el.t} style={{ justifyContent: 'center', textAlign: 'center' }}>{el.Title || el.t}</Box>
                  </VelocityComponent>
                  <GJson ass-ass data={el}  style={{ justifyContent: "space-around" }}/>
                </Box>
              );
            })
          }
          <Box style={{ alignItems: 'center', width: "20vw", margin: "1vw" }} onMouseUp={this.onClick.bind(this) }>More...</Box>
        </VelocityTransitionGroup>
        <div id="twitter" style={{width:"200px", height:"500px"}}></div>
      </Layout>
    );
  }

}

export default SportPage;
