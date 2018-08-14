export default {
  keyValueOccurrencesInSearchResults: state => {
    const searchResults = state.searchResults;
    const occurrences = {};
    searchResults.forEach(searchResult => {
      Object.keys(searchResult).forEach(key => {
        if (occurrences[key] === undefined) {
          occurrences[key] = {
            value: searchResult[key],
            amount: 0
          };
        }

        if (occurrences[key].value === searchResult[key]) {
          occurrences[key].amount += 1;
        }
      });
    });
    return occurrences;
  },

  commonKeyValues: (state, getters) => {
    const searchResults = state.searchResults;
    const occurrences = getters.keyValueOccurrencesInSearchResults;
    const commonKeyValues = {};
    Object.keys(occurrences).forEach(key => {
      if (occurrences[key].amount === searchResults.length) {
        commonKeyValues[key] =
          occurrences[key].value != null ? occurrences[key].value : 'no data';
      }
    });
    return commonKeyValues;
  },

  keysWithoutCommon: (state, getters) => {
    return Object.keys(getters.keyValueOccurrencesInSearchResults)
      .map(key => {
        if (getters.commonKeyValues[key] === undefined) {
          return key;
        }
      })
      .filter(key => key != null);
  }
};
