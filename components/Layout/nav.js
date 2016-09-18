import React from 'react';

import Link from '../Link';
import cx from 'classnames';
import s from './header.css';

require('adven-ui/css/flexbox.css');

class Nav extends React.Component {

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

        //<Link to="/sport/nba">NBA</Link>
        // <Link to="/sport/football">Football</Link>
        // <Link to="/sport/nhl">NHL</Link>
        // <Link to="/sport/nfl">NFL</Link>
        // <Link to="/sport/tennis">Tennis</Link>
        // <Link to="/sport/olympics">Olympics</Link>

        return (
            <nav className="flexbox row nowrap justify-content-space-around">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/tweets">Tweets</Link>
            </nav>
        );
    }

}

export default Nav;
