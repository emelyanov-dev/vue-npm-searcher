<template>
  <div class="Package">
    <div class="Package__error" v-if="$store.state.packageView.error">Error!</div>
    <div class="Package__content"
         v-if="$store.state.packageView.loaded && !$store.state.packageView.error">
      <h1 class="Package__title">{{$store.state.packageView.name}}</h1>
      <p class="Package__description">{{$store.state.packageView.description}}</p>
      <Chips v-bind:items="$store.state.packageView.keywords" />
      <h2 class="Package__title2">Links:</h2>
      <div class="Package__links">
        <a v-bind:href="$store.state.packageView.links.npm"
           class="Package__link"
        >{{$store.state.packageView.links.npm}}</a>
        <a v-bind:href="$store.state.packageView.links.repository"
           class="Package__link"
        >{{$store.state.packageView.links.repository}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import store from '../store';
import Chips from '../components/Chips.vue';

export default Vue.extend({
  name: 'Package',
  components: {
    Chips,
  },
  created() {
    store.dispatch('packageView/loadPackage', this.$route.params.packageName);
  },
});
</script>

<style scoped lang="scss">
.Package {
  &__title {
    font-size: 28px;
    line-height: 32px;
    padding-bottom: 16px;
    font-weight: bold;
    color: #212121;
  }

  &__title2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    color: #212121;
  }

  &__description {
    font-size: 16px;
    line-height: 20px;
    color: #212121;
    margin-bottom: 20px;
  }

  &__link {
    display: block;
    margin-bottom: 10px;
    color: #3f51b5;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
