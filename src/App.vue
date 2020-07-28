<template>
  <h2 class="flex-center">
    {{ text }}
  </h2>
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

<style lang="css" scoped>
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>