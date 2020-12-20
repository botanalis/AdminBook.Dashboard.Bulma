<template>
  <div class="menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DMenu",
  data(){
    return {
      isMenu: true//MenuIemt判斷使用
    }
  }
}
</script>

<style scoped>

</style>
