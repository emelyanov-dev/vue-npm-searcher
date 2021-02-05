<template>
  <router-link :to="{ name: 'Package', params: { packageName: name.replace(/\//, '%2F') } }"
               class="Package-card">
    <h4 class="Package-card__name">{{name}}</h4>
    <p class="Package-card__description">{{description}}</p>
    <div class="Package-card__chips">
      <Chips v-bind:items="keywords" />
    </div>
    <div class="Package-card__footer">
      Version: {{version}}
    </div>
  </router-link>
</template>

<script>
import Chips from './Chips.vue';

export default {
  name: 'PackageCard',
  props: {
    name: String,
    description: String,
    keywords: Array,
    version: String,
  },
  components: {
    Chips,
  },
};
</script>

<style scoped lang="scss">
.Package-card {
  padding: 16px;
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  text-decoration: none;
  transition: .2s ease-in;

  &:hover {
    border-color: #3f51b5;
  }

  &__name {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #212121;
  }

  &__description {
    margin-bottom: 20px;
    font-size: 14px;
    color: #616161;
  }

  &__chips {

    margin-bottom: 8px;
  }

  &__footer {
    font-size: 12px;
    color: #757575;
  }
}
</style>
