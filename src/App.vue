<template>
    <div>
        <button @click="visible = !visible">click me</button>
        <my-dialog :visible.sync="visible"></my-dialog>
    </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
