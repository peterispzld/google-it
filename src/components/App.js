import React from 'react';
import AddSearchQuery from './AddSearchQuery';
import SearchQueryList from './SearchQueryList';
import EmptySearchQueryList from './EmptySearchQueryList';
import History from './History';

const App = ({ store }) => {
  if (store.activeCount) {
    return (
      <div className='container'>
        <AddSearchQuery addSearchQuery={store.addSearchQuery} />
        <SearchQueryList searchQueryList={store.searchQueries} />
        <History completedCount={store.completedCount} searchQueryList={store.searchQueries} />
      </div>
    );
  } else {
    return (
      <div className='container'>
        <AddSearchQuery addSearchQuery={store.addSearchQuery} />
        <EmptySearchQueryList />
        <History completedCount={store.completedCount} searchQueryList={store.searchQueries} />
      </div>
    );
  }
}

export default App;
