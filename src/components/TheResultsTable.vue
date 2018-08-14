<template>
  <div class="results-table-wrapper">
    <table class="results-table">
      <thead class="results-table__head">
        <tr class="results-table__captions-row">
          <th class="results-table__cell is-caption" v-for="key in keysWithoutCommon" :key="key">
            {{formatKey(key)}}
          </th>
        </tr>
      </thead>

      <tbody class="results-table__body">
        <tr class="results-table__row" v-for="(result, index) in searchResults" :key="index">
          <td class="results-table__cell" v-for="key in keysWithoutCommon" :key="key">
            {{result[key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { searchResultKeyFormat } from '@/util/format.js';

export default {
  name: 'TheResultsTable',
  methods: {
    formatKey: searchResultKeyFormat
  },
  props: {
    keysWithoutCommon: Array,
    searchResults: Array
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.results-table-wrapper {
  display: inline-block;
  position: relative;
  overflow: auto;
  max-height: 600px;
  max-width: 95%;
  border: 1px solid $c-table-border;
}

.results-table {
  table-layout: fixed;
  border-collapse: collapse;
  margin: 0 auto 1px auto;

  &__row {
    margin-bottom: 20px;

    &:nth-child(2n) {
      background: rgba($c-brand-yellow, 0.05);
    }

    &:hover {
      background: rgba($c-brand-yellow, 0.2);
    }
  }

  &__cell {
    position: relative;
    box-sizing: border-box;
    padding: 12px;
    vertical-align: middle;
    min-width: 150px;
    text-align: left;
    border: 1px solid $c-table-border;
    color: $c-gray;
    font-size: 14px;
    font-weight: 300;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border-right: 0;
    }

    &.is-caption {
      text-transform: uppercase;
      color: $c-brand-orange-light;
      font-weight: 700;
      border-top: 0;
    }
  }
}
</style>
