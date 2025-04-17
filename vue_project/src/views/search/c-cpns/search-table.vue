<template>
    <div class="search-table">
        <div class="table">
            <el-table :data="formattedTableData" @sort-change="(data) => handleSort(data, stateTable)"
                style="width: 100%">
                <el-table-column prop="journalTitle" label="期刊名称" width="215" align="center" />
                <el-table-column prop="journalDb" label="数据库" width="100" align="center" sortable="custom" />
                <el-table-column prop="impactFactor_2019" label="影响因子" width="140" align="center" sortable="custom" />
                <el-table-column prop="quote_factor" label="引文指标" width="100" align="center" sortable="custom" />
                <el-table-column prop="jcrZone" label="JCR分区" width="100" align="center" />
                <el-table-column prop="subZone" label="国内分区" width="100" align="center" sortable="custom" />
                <el-table-column prop="annualPublication" label="年发文量" width="100" align="center" sortable="custom" />
                <el-table-column prop="totalReviewRatio" label="综述占比" width="100" align="center" sortable="custom" />
                <el-table-column prop="open_ratio" label="是否开源/开源占比" width="85" align="center" sortable="custom" />
                <el-table-column prop="isDomestic" label="是否国产" width="100" align="center" />
            </el-table>
        </div>
        <div class="demo-pagination-block">
            <el-pagination v-model:current-page="currentPage3" :page-size="10" :background="true"
                layout="prev, pager, next, jumper" :total="+searchData.total" @current-change="handleCurrentChange" />
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'
const currentPage3 = ref(1)
const searchStore = useSearchStore()
const { searchData } = storeToRefs(searchStore)
// 改变当前页
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
    searchStore.updatePagination({
        pageNum: val,
        pageSize: 10,
        total: 0,
    })
}
// 排序
const handleSort = (item) => {
    let order = ''
    let orderType = ''
    if (item.order === 'ascending') {
        orderType = 'asc',
            order = item.prop
    } else if (item.order === 'descending') {
        orderType = 'desc',
            order = item.prop
    } else {
        orderType = '',
            order = ''
    }
    const sortParams = {
        order: order,
        orderType: orderType,
    }
    searchStore.updateSortParams(sortParams)
    console.log(sortParams)
}

// 格式化表格数据
const formattedTableData = computed(() => {
    if (!searchData.value?.data) return []
    console.log(searchData.value.data)
    return searchData.value.data.map(item => ({
        ...item,
        impactFactor_2019: formatValue(item.impactFactor_2019),
        quote_factor: formatValue(item.quote_factor),
        jcrZone: formatJcrZone(item.jcrZone),
        subZone: formatSubZone(item.subZone),
        annualPublication: formatValue(item.annualPublication),
        totalReviewRatio: item.totalReviewRatio === null ? '' : formatPercentage(item.totalReviewRatio),
        open_ratio: item.open_ratio === 0 ? '否' : `${(item.open_ratio * 100).toFixed(2)}%`,
        isDomestic: item.isDomestic === 0 ? '否' : '是'
    }))
})

// 格式化普通值（0转为"-"）
const formatValue = (value) => {
    return value === 0 ? '-' : value
}

// 格式化百分比
const formatPercentage = (value) => {
    return value === 0 ? '-' : `${(value * 1).toFixed(2)}%`
}
// 格式化JCR分区
const formatJcrZone = (value) => {
    if (value === 8) {
        return 'Q1'
    } else if (value === 4) {
        return 'Q2'
    } else if (value === 2) {
        return 'Q3'
    } else if (value === 1) {
        return 'Q4'
    } else {
        return '-'
    }
}
// 格式化国内分区
const formatSubZone = (value) => {
    if (value === 0) {
        return '-'
    } else {
        return value + '区'
    }
}
</script>
<style lang="less" scoped>
.search-table {
    display: flex;
    flex-direction: column;
    width: 1180px;
    background-color: #fff;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    margin: 18px auto;

    .table {
        :deep(.el-table th.el-table__cell>.cell) {
            padding: 0 10px;
        }
    }

    .demo-pagination-block {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 60px;
    }
}
</style>
