import { types } from 'mobx-state-tree';

const SearchQuery = types
    .model('SearchQuery', {
        id: types.identifierNumber,
        text: types.string,
        completed: false
    })
    .actions(self => ({
        complete() {
            if (!self.completed) {
                self.completed = !self.completed;
            }
        }
    }));

const SearchQueryStore = types
    .model('SearchQueryStore', {
        searchQueries: types.array(SearchQuery),
    })
    .views(self => ({
        get completedCount() {
            return self.searchQueries.reduce((count, searchQuery) => (searchQuery.completed ? count + 1 : count), 0)
        },
        get activeCount() {
            return self.searchQueries.length - self.completedCount
        }
    }))
    .actions(self => ({
        addSearchQuery(text) {
            const id = self.searchQueries.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
            self.searchQueries.unshift({
                id,
                text
            })
        }
    }));

// export default SearchQueryStore;
export default SearchQueryStore;