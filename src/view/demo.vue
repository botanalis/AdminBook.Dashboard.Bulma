<template>
  <div>
    <my-navbar></my-navbar>
    <section class="section">
      <div class="columns">
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <!--選單區塊-->
          <my-menu></my-menu>
        </div>
        <div class="column">
          <!--內容區塊-->
          <router-view></router-view>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
import myNavbar from '@/view/shared/navbar';
import myMenu from '@/view/shared/menu';


export default {
  name: "demo",
  components:{
    myNavbar,
    myMenu
  },
  data() {
    return {
      isActive: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
