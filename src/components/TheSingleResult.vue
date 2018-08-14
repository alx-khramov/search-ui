<template>
  <div class="result">
    <div class="result__property-list">
      <div class="result-property" v-for="(value, key) in result" :key="key">
        <div class="result-property__caption">
          {{formatKey(key)}}
        </div>
        <div class="result-property__value">
          {{value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchResultKeyFormat } from '@/util/format.js';

export default {
  name: 'TheSingleResult',
  methods: {
    formatKey: searchResultKeyFormat
  },
  props: {
    result: Object
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.result {
  text-align: center;
  margin-bottom: 40px;

  &__property-list {
    display: inline-flex;
    max-width: 1000px;
    min-width: 625px;
    margin: 0 auto;
    padding: 15px 0;
    flex-wrap: wrap;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    text-align: left;
  }
}

.result-property {
  margin: 15px 20px;

  &__caption {
    color: $c-brand-orange-light;
    font-weight: 700;
    margin-bottom: 7px;
    text-transform: capitalize;
  }

  &__value {
    color: $c-gray;
    font-size: 14px;
    font-weight: 300;
  }
}
</style>
