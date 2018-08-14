export default {
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults;
  },
  setSearchResultsLoading(state, loading) {
    state.searchResultsLoading = loading;
  },
  setNothingFound(state, nothingFound) {
    state.nothingFound = nothingFound;
  }
};
