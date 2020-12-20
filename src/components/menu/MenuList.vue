<script>
export default {
  name: "DMenuList",
  //宣告指渲染畫面,沒有帶Data
  functional: true,
  props:{
    label: {
      type: String,
      default: ''
    }
  },
  render(createElement, context){
    let vLabel = null;
    const slots = context.slots();
    if (context.props.label || slots.label){
      vLabel = createElement(
          'p',
          {
            attrs: {
              class: 'menu-label'
            }
          },
          context.props.label
      );
    }
    const vNode = createElement(
        'ul',
        {
          attrs:{
            class: 'menu-list'
          }
        },
        slots.default
    );
    return vLabel ? [ vLabel, vNode] : vNode
  }
}
</script>

<style scoped>

</style>
