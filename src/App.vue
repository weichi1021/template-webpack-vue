<template>
  <div class="flex-center">{{ text }}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Vue'
    }
  }
}
</script>

<style lang="sass" scoped>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>