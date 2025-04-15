<template>
  <div class="search">
    <MainHeader />
    <MainSider />
    <MainFooter />
  </div>
</template>
<script lang="ts" setup>
import MainFooter from '@/components/main-footer/main-footer.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import MainSider from '@/components/main-sider/main-sider.vue'
</script>
<style lang="less" scoped>
.search {}
</style>
