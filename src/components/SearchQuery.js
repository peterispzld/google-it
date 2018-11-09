import React from 'react';

const SearchQuery = ({ searchQuery }) => {
    const handleComplete = () => {
        searchQuery.complete();
    }

    return (
        <div className='search-query row p-3'>
            <a
                className="mx-auto text-light"
                href={`https://www.google.lv/search?q=${searchQuery.text.split(' ').join('+').toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleComplete}>
                {searchQuery.text}
            </a>
        </div>
    )
}

export default SearchQuery;
