<template>
  <nav class="menu">
    <p class="menu-label">
      Menu
    </p>
    <ul class="menu-list">
      <li>
        <router-link v-bind:to="{name: 'dashboard'}">
           <span class="icon">
            <i class="fa fa-tachometer"></i>
          </span>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link class="is-active" v-bind:to="{name: 'book_list'}">
          <span class="icon">
            <i class="fa fa-book"></i>
          </span>
          Books
        </router-link>
      </li>
      <li>
        <a href="customers.html">
          <span class="icon">
            <i class="fa fa-address-book"></i>
          </span>
          Customers
        </a>
      </li>
      <li>
        <a href="orders.html">
          <span class="icon">
            <i class="fa fa-file-text-o"></i>
          </span>
          Orders
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "myMenu"
}
</script>

<style scoped>

</style>
