import React from 'react';
import SearchQuery from './SearchQuery';
import './SearchQueryList.css';

const SearchQueryList = ({ searchQueryList }) => {
    return (
        <div className="search-query-list z-depth-5">
            <div className="row p-3">
                <h2 className="text-light mx-auto">GOOGLE IT</h2>
            </div>
            {
                searchQueryList.map(searchQuery => {
                    if (!searchQuery.completed) {
                        return <SearchQuery
                            key={searchQuery.id}
                            searchQuery={searchQuery}
                        />
                    }
                })
            }
        </div>
    );
}

export default SearchQueryList;
