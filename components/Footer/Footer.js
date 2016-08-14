import React from 'react';
import Link from '../Link';
require('adven-ui/css/flexbox.css');
import s from './footer.css';
import cx from 'classnames';

function Footer() {
  return (
    <footer className="flexbox column nowrap">
      <nav className={cx("flexbox column nowrap align-self-center",s.nav)}>
        <Link className={s.link} to="/">home</Link>
        <Link className={s.link} to="/about">about</Link>
      </nav>
    </footer>
  );
}

export default Footer;
