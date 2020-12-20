<template>
  <div>
<!--    <nav class="menu">-->
<!--      <p class="menu-label">-->
<!--        Menu-->
<!--      </p>-->
<!--      <ul class="menu-list">-->
<!--        <li>-->
<!--          <router-link v-bind:to="{name: 'dashboard'}">-->
<!--           <span class="icon">-->
<!--            <i class="fa fa-tachometer"></i>-->
<!--          </span>-->
<!--            Dashboard-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link class="is-active" v-bind:to="{name: 'book_list'}">-->
<!--          <span class="icon">-->
<!--            <i class="fa fa-book"></i>-->
<!--          </span>-->
<!--            Books-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link v-bind:to="{name: 'customer_list'}">-->
<!--          <span class="icon">-->
<!--            <i class="fa fa-address-book"></i>-->
<!--          </span>-->
<!--            Customers-->
<!--          </router-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link v-bind:to="{name: 'order_list'}">-->
<!--          <span class="icon">-->
<!--            <i class="fa fa-file-text-o"></i>-->
<!--          </span>-->
<!--            Orders-->
<!--          </router-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->

    <d-menu>
      <d-menu-list v-bind:label="'def_Menu'">
        <d-menu-item v-bind:label="'dashboard'" v-bind:tag="'router-link'" v-bind:to="{name: 'dashboard'}"></d-menu-item>
        <d-menu-item v-bind:label="'Books'" v-bind:tag="'router-link'" v-bind:to="{name: 'book_list'}"></d-menu-item>
        <d-menu-item v-bind:label="'Customers'" v-bind:tag="'router-link'" v-bind:to="{name: 'customer_list'}"></d-menu-item>
        <d-menu-item v-bind:label="'Orders'" v-bind:tag="'router-link'" v-bind:to="{name: 'order_list'}"></d-menu-item>
      </d-menu-list>
    </d-menu>
  </div>

</template>

<script>
import DMenu from "@/components/menu/Menu";
import DMenuList from "@/components/menu/MenuList";
import DMenuItem from "@/components/menu/MenuItem";

export default {
  name: "myMenu",
  components: {DMenuItem, DMenuList, DMenu}
}
</script>

<style scoped>

</style>
