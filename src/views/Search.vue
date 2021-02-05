<template>
  <div class="Search">
    <h1 class="Search__header">NPM searcher</h1>
    <label class="Search__field">
      <input class="Search__input" type="text" @input="onInput" placeholder="🔍 Search NPM packages">
    </label>
    <div
      class="Search__status-bar"
      v-if="$store.state.search.loading && !$store.state.search.init"
    >
      🕑 Loading...
    </div>
    <div
      class="Search__status-bar"
      v-if="$store.state.search.total === 0
      && !$store.state.search.loading
      && !$store.state.search.init"
    >😭 No results found</div>
    <ul class="Search__results"
        v-bind:class="{'Search__results_loading': $store.state.search.loading}">
      <li v-for="item in $store.state.search.results" :key="item.name" class="Search__result-item">
        <PackageCard
          v-bind:name="item.name"
          v-bind:description="item.description"
          v-bind:keywords="item.keywords"
          v-bind:version="item.version"
        />
      </li>
    </ul>
    <Pagination v-if="pagesCount !== 0"
      v-bind:makeLink="makeLink"
      v-bind:pagesCount="pagesCount"
      v-bind:current="currentPage || 1"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';
import PackageCard from '../components/PackageCard.vue';
import Pagination from '../components/Pagination.vue';

export default Vue.extend({
  name: 'Search',
  components: {
    PackageCard,
    Pagination,
  },
  created() {
    this.search();
  },
  computed: {
    pagesCount: () => Math.ceil(store.state.search.total / 10),
    currentPage() {
      return parseInt(this.$route.query.page, 10);
    },
  },
  methods: {
    onInput(e: { target: { value: string } }) {
      this.$router.push({ name: 'Search', query: { query: e.target.value } });
    },
    makeLink(page: number) {
      return { name: 'Search', query: { query: this.$route.query.query, page } };
    },
    search() {
      if (this.$route.query.query) {
        store.dispatch('search/search', {
          query: this.$route.query.query,
          page: this.$route.query.page || 1,
        });
      }
    },
  },
  watch: {
    $route: 'search',
  },
});
</script>

<style scoped lang="scss">
.Search {
  &__result-item {
    display: block;
    margin: 16px 0;
  }

  &__header {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #212121;
  }

  &__results {
    transition: .2s ease-in;

    &_loading {
      opacity: .6;
      pointer-events: none;
    }
  }

  &__field {
    display: block;
    margin: 20px 0;
  }

  &__input {
    height: 40px;
    width: 100%;
    border-radius: 6px;
    border: 2px solid #bdbdbd;
    padding: 0 20px;
    font-size: 14px;
    transition: .2s ease-in;

    &:focus {
      outline: none;
      border-color: #3f51b5;
      box-shadow: 0 0 0 3px hsl(232deg 50% 45% / 49%);
    }
  }

  &__status-bar {
    text-align: center;
    font-size: 18px;
    height: 32px;
    color: #212121;
  }
}
</style>
