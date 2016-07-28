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
import Tweet from '../../components/Tweet';
import {connectToTwitterStream, changeFeed} from '../../data/twitter-openshift.js'
import {connect} from 'react-redux';
//import { title, html } from './index.md';
import GJson from 'adven-ui/src/GJson';
import Box from 'adven-ui/src/GFlexbox';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const title = 'Sport';



class SportPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }

  componentDidMount() {
    document.title = title;
    connectToTwitterStream();
    changeFeed({ sport: [this.props.params.sport] })
    console.log("did mount")
    // twttr.widgets.createTimeline({
    //   sourceType: "list",
    //   ownerScreenName: "JoggenSerge",
    //   slug: "nba"
    // }, document.getElementById("twitter"));

  }
  componentWillReceiveProps(nextProps) {
    console.log('will receive props');

    console.log(this.props.params.sport);
    console.log(nextProps.params.sport);

    if (this.props.params.sport != nextProps.params.sport) {
      changeFeed({ sport: [nextProps.params.sport] })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    // connect(this);
    console.log('will update');
  }
  componentWillUnmount(nextProps, nextState) {
    console.log('will unmount');
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
    const tweets = this.props.tweets || this.state.tweetsf || this.state.tweets || [];
    // <li key={i} className={Box.s.flexbox} >

    //   </li>
    function runAnimation(i, evt) {
      this.refs["velocity" + i].runAnimation({ stop: true });
    }

    return (
      <Layout>
        <h1>{title}</h1>
        <h3>{this.props.params.sport}</h3>
        <input type="text" placeholder="search..." ref="search" onKeyUp={this.onKeyUp.bind(this) } />
        <Box  style={{ flexFlow: 'row nowrap' }}>
          <VelocityTransitionGroup
            runOnMount
            enter={{ animation: { opacity: 1, } }}
            leave={{ animation: { opacity: 0 } }}
            duration={100}
            component={Box}

            style={{ flexFlow: 'column nowrap' }}
            >
            {
              tweets.map((el, i, a) => {
                return (
                  <Box key={i} style={{ flexFlow: 'column nowrap', margin: "1vw" }}>
                    <VelocityComponent animation="callout.tada" duration={500} ref={"velocity" + i}>
                      <Tweet tweet={el}/>
                    </VelocityComponent>
                  </Box>
                );
              })
            }
          </VelocityTransitionGroup>
          <div id="twitter" style={{ width: "200px", height: "500px" }}></div>
        </Box>
      </Layout>
    );
  }

}

export default connect((state) => { return { tweets: state.tweets }; })(SportPage);
