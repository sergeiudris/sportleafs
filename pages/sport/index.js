
import React from 'react';
import Layout from '../../components/Layout';
import Tweet from '../../components/Tweet';
import {connectToTwitterStream, changeFeed} from '../../data/twitter-openshift.js'
import {connect} from 'react-redux';
//import { title, html } from './index.md';
import Json from 'adven-ui/json';
require('adven-ui/css/flexbox.css');
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
        <div  className="flexbox row nowrap" >
          <VelocityTransitionGroup
            runOnMount
            enter={{ animation: { opacity: 1, } }}
            leave={{ animation: { opacity: 0 } }}
            duration={100}
            component={'div'}
            className="flexbox column nowrap"
            >
            {
              tweets.map((el, i, a) => {
                return (
                  <div key={i} className="flexbox column nowrap" >
                    <VelocityComponent animation="callout.tada" duration={500} ref={"velocity" + i}>
                      <Tweet tweet={el}/>
                    </VelocityComponent>
                  </div>
                );
              })
            }
          </VelocityTransitionGroup>
          <div id="twitter" style={{ width: "200px", height: "500px" }}></div>
        </div>
      </Layout>
    );
  }

}

export default connect((state) => { return { tweets: state.tweets }; })(SportPage);
