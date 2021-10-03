<template>
  <el-container class="container">
  <!-- <Header/> -->
  <el-header>
    <Header />
  </el-header>
  <el-container>
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import Header from './components/header'
import Aside from './components/aside'

export default {
  components: {
    Header,
    Aside
  }
}
</script>

<style>
  .el-main {
    padding: 16px;
  }
</style>