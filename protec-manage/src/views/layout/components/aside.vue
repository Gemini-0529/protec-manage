<template>
  <el-menu
    default-active="/index"
    class="el-menu-vertical-demo aside-menu"
    background-color="#333"
    text-color="#fff"
    active-text-color="#ed5400"
    router>
    <el-menu-item index="/index">
      <i class="el-icon-house"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/goods">
      <i class="el-icon-goods"></i>
      <span slot="title">商品信息</span>
    </el-menu-item>
    <el-menu-item index="/access">
      <i class="el-icon-link"></i>
      <span slot="title">权限控制</span>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-setting"></i>
      <span slot="title">系统设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Left-menu'
}
</script>

<style scoped>
  .aside-menu {
    height: 100%;
  }
</style>