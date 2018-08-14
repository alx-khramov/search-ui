<template>
  <div class="search-results">
    <div class="loading-spinner-wrapper" v-if="searchResultsLoading">
      <LoadingSpinner/>
    </div>

    <template v-else-if="resultIsSingle">
      <TheSingleResult :result="searchResults[0]"/>
    </template>

    <template v-else-if="searchResults.length">
      <TheSingleResult :result="commonKeyValues" v-if="Object.keys(commonKeyValues).length"/>

      <TheResultsTable :searchResults="searchResults" :keysWithoutCommon="keysWithoutCommon"/>
    </template>

    <template v-else-if="nothingFound">
      <TheNoResults/>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TheSingleResult from '@/components/TheSingleResult.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import TheResultsTable from '@/components/TheResultsTable.vue';
import TheNoResults from '@/components/TheNoResults.vue';

export default {
  name: 'TheResults',
  components: {
    TheSingleResult,
    LoadingSpinner,
    TheResultsTable,
    TheNoResults
  },
  computed: {
    resultIsSingle() {
      return this.$store.state.searchResults.length === 1;
    },

    ...mapState(['searchResults', 'searchResultsLoading', 'nothingFound']),

    ...mapGetters(['commonKeyValues', 'keysWithoutCommon'])
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.search-results {
  box-sizing: border-box;
  width: 100%;
  margin: 70px auto 20px;
  text-align: center;
}

.loading-spinner-wrapper {
  margin-top: 100px;
  text-align: center;
}
</style>
