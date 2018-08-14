<template>
  <div class="query-input-wrapper">
    <input type="text" class="query-input"
           placeholder="Enter what you want to know about"
           v-model="query"
           v-focus
           @keyup.enter="sendSearchRequest(query)"/>
    <button type="button" class="query-submit" @click="sendSearchRequest(query)"></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheQueryInput',
  data: () => ({
    query: ''
  }),
  methods: {
    ...mapActions(['sendSearchRequest'])
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.query-input-wrapper {
  display: flex;
  justify-content: center;
  margin: 35px auto 0;
  width: 600px;
  padding: 0 10px;
  border: 4px solid;
  border-image-source: linear-gradient(
    to right,
    $c-brand-brown 0%,
    $c-brand-red 50%,
    $c-brand-yellow 100%
  );
  border-image-slice: 1;
}

.query-input {
  flex: 1;
  font-size: 18px;
  font-weight: 300;
  line-height: 48px;
  outline: 0;
  background: transparent;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &::placeholder {
    color: #ccc;
  }
}

.query-submit {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  border: 0;
  cursor: pointer;
  background: $c-brand-yellow;
  border-radius: 50%;
  outline: none;
  transition: all 0.3s;

  &:hover {
    background-color: $c-brand-red;
  }

  &::after {
    content: '';
    display: block;
    background: url('/images/angle-arrow-pointing-to-right.svg') no-repeat;
    background-position: 2px center;
    background-size: contain;
    height: 14px;
  }

  &:active::after {
    transform: scale(0.9);
  }

  &:focus::before {
    content: '';
    display: block;
    background: #ddd;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    position: absolute;
    top: -4px;
    left: -4px;
    z-index: -10;
  }
}
</style>
