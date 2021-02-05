<template>
  <ul class="Chips">
    <li v-for="item in items" :key="item" class="Chips__item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Chips',
  props: {
    items: Array,
  },
};
</script>

<style scoped lang="scss">
.Chips {
  display: flex;
  flex-wrap: wrap;

  &__item {
    padding: 6px 10px;
    background-color: #eeeeee;
    color: #616161;
    border-radius: 4px;
    font-size: 13px;
    line-height: 13px;
    margin-right: 12px;
    margin-bottom: 10px;
  }
}
</style>
