import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SearchQueryStore from './models/SearchQueryStore';
import { getSnapshot, destroy, onSnapshot } from 'mobx-state-tree';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const localStorageKey = "google-it";

const initialState = localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : { searchQueries: [] }

let store;
let snapshotListener;
function createSearchQueryStore(snapshot) {
    if (snapshotListener) snapshotListener()
    if (store) destroy(store)

    store = SearchQueryStore.create(snapshot)

    snapshotListener = onSnapshot(store, snapshot =>
        localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
    );

    return store
}

function renderApp(App, store) {
    ReactDOM.render(<App store={store} />, document.getElementById("root"))
}

renderApp(App, createSearchQueryStore(initialState))

if (module.hot) {
    module.hot.accept(["./models/SearchQueryStore"], () => {
        renderApp(App, createSearchQueryStore(getSnapshot(store)))
    })
    module.hot.accept(["./components/App"], () => {
        renderApp(App, store)
    })
}

serviceWorker.unregister();
