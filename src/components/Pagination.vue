<template>
  <div class="Pagination">
    <router-link
      :to="makeLink(current - 1)"
      class="Pagination__page"
      v-bind:class="{'Pagination__page_disabled': current === 1 }"
    >❮</router-link>
    <router-link
      :to="makeLink(1)"
      v-if="current > 3"
      class="Pagination__page"
    >1</router-link>
    <div class="Pagination__divider" v-if="current > 3">...</div>
    <router-link
      v-for="page in pages" :to="makeLink(page)"
      :key="page"
      class="Pagination__page"
      v-bind:class="{'Pagination__page_active': current === page}"
    >{{ page }}</router-link>
    <div class="Pagination__divider" v-if="current < pagesCount - 3">...</div>
    <router-link
      :to="makeLink(pagesCount)"
      class="Pagination__page"
      v-if="current < pagesCount - 3"
    >{{ pagesCount }}</router-link>
    <router-link
      :to="makeLink(current + 1)"
      class="Pagination__page"
      v-bind:class="{'Pagination__page_disabled': current === pagesCount }"
    >❯</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface Props {
  current: number;
  pagesCount: number;
  makeLink(page: number): void;
}

export default Vue.extend<Props>({
  name: 'Pagination',
  props: {
    current: Number,
    pagesCount: Number,
    makeLink: Function,
  },
  computed: {
    pages(): number[] {
      const maxRenderedPages = 5;
      const pagesFromMiddlePage = Math.floor(maxRenderedPages / 2);

      const pagesOnTheLeft = (this.pagesCount - this.current) < pagesFromMiddlePage
        ? maxRenderedPages - (this.pagesCount - this.current) - 1
        : pagesFromMiddlePage;

      const firstPage = Math.max(1, this.current - pagesOnTheLeft);
      const lastPage = Math.min(this.pagesCount, (firstPage + maxRenderedPages));

      const pages: number[] = [];

      for (
        let i = firstPage;
        i <= lastPage;
        i += 1
      ) {
        pages.push(i);
      }

      return pages;
    },
  },
});
</script>

<style scoped lang="scss">
.Pagination {
  display: flex;
  padding: 16px 0 24px 0;

  &__page {
    display: block;
    height: 32px;
    min-width: 32px;
    padding: 0 10px;
    margin: 0 6px;
    background: #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    color: #424242;
    text-align: center;
    line-height: 32px;
    text-decoration: none;

    &_active {
      background-color: #3f51b5;
      color: #fff;
    }

    &_disabled {
      opacity: .7;
      pointer-events: none;
    }
  }

  &__divider {
    height: 32px;
    min-width: 32px;
    padding: 0 10px;
    line-height: 32px;
  }
}
</style>
