import React from 'react'
import SearchQuery from './SearchQuery';
import './SearchQueryList.css';

const History = ({ completedCount, searchQueryList }) => {
    if (completedCount) {
        return (
            <div className="search-query-list z-depth-5 mt-5 mb-5">
                <div className="row p-3">
                    <h2 className="text-light mx-auto">HISTORY</h2>
                </div>
                {
                    searchQueryList.map(searchQuery => {
                        if (searchQuery.completed) {
                            return <SearchQuery
                                key={searchQuery.id}
                                searchQuery={searchQuery}
                            />
                        }
                    })
                }
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default History;
