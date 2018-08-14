<template>
  <div>
    <h3 class="title">Sorry, nothing was found</h3>
    <p class="text">
      It seems we can't find what you are looking for.
      <br/>
      Please try again with another query.
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheNoResults'
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.title {
  font-weight: 500;
  font-size: 21px;
  color: $c-brand-brown;
}
.text {
  color: $c-gray;
  line-height: 1.4;
}
</style>
