import React from 'react';
import Link from '../Link';
require('adwen-ui/css/flexbox.css');
import s from './footer.css';
import cx from 'classnames';
import Nav from '../navigation';

function Footer() {
  return (
    <footer className={cx('flexbox column nowrap align-items-center', s.footer)}>
      <hr className={s.hr} />
      <Nav className="flexbox row wrap justify-content-center" />
      <span className={cx('', s.copyright)}>
      <i className="fa fa-copyright" />
      &nbsp;
      2016&nbsp;-
      &nbsp;
      </span>
    </footer>
  );
}

export default Footer;
