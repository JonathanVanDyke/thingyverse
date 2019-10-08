import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import { fetchCollection, fetchCollections, createCollection, updateCollection } from './actions/collection_actions'


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState
  window.dispatch = store.dispatch
  window.fetchCollection = fetchCollection
  window.fetchCollections = fetchCollections
  window.createCollection = createCollection
  window.updateCollection = updateCollection
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
