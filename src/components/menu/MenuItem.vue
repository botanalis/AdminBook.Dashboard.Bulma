<template>
  <li>
    <component
        v-bind:is="tag"
        v-bind="$attrs"
        v-bind:class="{
          'is-active': isActive,
          'is-disabled': isDisabled
        }"
        v-on="$listeners"
        v-on:click.native="onClick($event)"
    >
      <span v-if="label"> {{ label }} </span>
    </component>
  </li>
</template>

<script>
export default {
  name: "DMenuItem",
  inheritAttrs: false,
  props:{
    label:{
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  data(){
    return {
      isActive: this.active
    }
  },
  methods: {
    onClick(){
      console.log("menu item click")
      if (this.isDisabled){
        return;
      }
      const menu = this.getMenu();
      this.reset(this.$parent, menu);
      if (menu){
        this.isActive = true;
      }
    },
    /**
     * 重置所有Menu Item
     * */
    reset(parent, menu){
      parent.$children.forEach((item) => {
        if (item !== this){
          this.reset(item, menu);
          item.isActive = false;
        }
      });
    },
    /**
     * 取得Menu Object
     * */
    getMenu(){
      let parent = this.$parent;
      while (parent && !parent.$data.isMenu){
        parent = parent.$parent;
      }
      return parent;
    }
  }
}
</script>

<style scoped>

</style>
