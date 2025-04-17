<template>
  <div class="search">
    <MainHeader />
    <div class="search-container">
      <SearchType />
      <SearchTable />
    </div>
    <MainSider />
    <MainFooter />
  </div>
</template>
<script lang="ts" setup>
import MainFooter from '@/components/main-footer/main-footer.vue'
import SearchType from './c-cpns/search-type.vue'
import SearchTable from './c-cpns/search-table.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import MainSider from '@/components/main-sider/main-sider.vue'

</script>
<style lang="less" scoped>
.search {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: #f6f6f8;

  .search-container {
    flex: 1;
  }
}
</style>
