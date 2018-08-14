import axios from 'axios';

export default {
  sendSearchRequest({ commit }, query) {
    if (query === '') {
      commit('setSearchResults', []);
      commit('setNothingFound', false);
    } else {
      commit('setSearchResultsLoading', true);
      axios
        .post('https://example.org', {
          token: 'some_token',
          message_body: query
        })
        .then(response => {
          const data = response.data.data;
          commit('setSearchResults', data);
          commit('setSearchResultsLoading', false);
          if (!data.length) {
            commit('setNothingFound', true);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
