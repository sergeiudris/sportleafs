/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';

let localStore = window.localStorage.getItem('store');

if (localStore) {
  localStore = JSON.parse(localStore);
} else {
  window.localStorage.setItem('store', JSON.stringify({}));
  localStore = {
    sports: {}
  };
}


// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore((state, action) => {
  // TODO: Add action handlers (aka "reduces")
  switch (action.type) {
    case 'localStorage':
      localStore = {...localStore, ...action};
      window.localStorage.setItem('store', JSON.stringify(localStore));
      return {...localStore,...state, ...action};
    default:
      return  {...localStore,...state, ...action};
  }
});

export default store;
