<template>
  <div class="main-screen">
    <img src="/images/logo.png" class="site-logo" alt="site-logo"/>
    <TheQueryInput/>
    <TheResults/>
  </div>
</template>

<script>
import TheQueryInput from '@/components/TheQueryInput.vue';
import TheResults from '@/components/TheResults.vue';

export default {
  name: 'TheMainScreen',
  components: {
    TheQueryInput,
    TheResults
  }
};
</script>

<style lang="scss" scoped>
.site-logo {
  display: block;
  width: 200px;
  margin: 10px auto 0;
}
</style>
