<template>
    <div class="search-type">
        <div class="content">
            <div class="search-input">
                <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="select" placeholder="ISSN" style="width: 110px;"
                            :popper-append-to-body='false'>
                            <el-option label="ISSN" value="issn" />
                            <el-option label="期刊名称" value="title" />
                            <el-option label="简称" value="abbr" />
                            <el-option label="学科分类" value="category" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button style="width:60px;"><el-icon class="el-icon--right" :size="16" @click="handleSearch">
                                <Search />
                            </el-icon></el-button>
                    </template>
                </el-input>
            </div>
            <div class="settings">
                <div class="impact_factor">
                    <span>影响因子</span>
                    <div class="factor_input">
                        <el-input v-model="min_factor" style="width: 52px" />
                        <div class="divider"></div>
                        <el-input v-model="max_factor" style="width: 52px" />
                    </div>
                </div>
                <div class="custom_select">
                    <span>JCR分区</span>
                    <el-dropdown trigger="click" @command="(command) => handleCommand(command, 1)">
                        <span class="el-dropdown-link">
                            {{ jcr_data }}
                            <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="不限">不限</el-dropdown-item>
                                <el-dropdown-item command="Q1">Q1</el-dropdown-item>
                                <el-dropdown-item command="Q2">Q2</el-dropdown-item>
                                <el-dropdown-item command="Q3">Q3</el-dropdown-item>
                                <el-dropdown-item command="Q4">Q4</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="custom_select">
                    <span>分区</span>
                    <el-dropdown trigger="click" @command="(command) => handleCommand(command, 2)">
                        <span class="el-dropdown-link">
                            {{ sub_data }}
                            <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="不限">不限</el-dropdown-item>
                                <el-dropdown-item command="1区">1区</el-dropdown-item>
                                <el-dropdown-item command="2区">2区</el-dropdown-item>
                                <el-dropdown-item command="3区">3区</el-dropdown-item>
                                <el-dropdown-item command="4区">4区</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div class="custom_select">
                    <span>综述占比
                    </span>
                    <el-dropdown trigger="click" @command="(command) => handleCommand(command, 3)">
                        <span class="el-dropdown-link">
                            {{ trrlr_data }}
                            <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="不限">不限</el-dropdown-item>
                                <el-dropdown-item command="0~5%">0~5%</el-dropdown-item>
                                <el-dropdown-item command="5%~10%">5%~10%</el-dropdown-item>
                                <el-dropdown-item command="10%~20%">10%~20%</el-dropdown-item>
                                <el-dropdown-item command="20%~30%">20%~30%</el-dropdown-item>
                                <el-dropdown-item command="30%~50%">30%~50%</el-dropdown-item>
                                <el-dropdown-item command="50%以上">50%以上</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const input3 = ref('')
const select = ref('')
const min_factor = ref('')
const max_factor = ref('')
const jcr = ref('')
const jcr_data = ref('不限')
const sub = ref('')
const sub_data = ref('不限')
const trrl = ref('')
const trrr = ref('')
const trrlr_data = ref('不限')
const handleCommand = (command, type) => {
    switch (type) {
        case 1:
            jcr_data.value = command
            if (command === 'Q1') {
                jcr.value = '8'
            } else if (command === 'Q2') {
                jcr.value = '4'
            } else if (command === 'Q3') {
                jcr.value = '2'
            } else if (command === 'Q4') {
                jcr.value = '1'
            } else {
                jcr.value = ''
            }
            break
        case 2:
            sub.value = command
            sub_data.value = command
            if (command === '1区') {
                sub.value = '1'
            } else if (command === '2区') {
                sub.value = '2'
            } else if (command === '3区') {
                sub.value = '3'
            } else if (command === '4区') {
                sub.value = '4'
            } else {
                sub.value = ''
            }
            break
        case 3:
            trrlr_data.value = command
            if (command === '0~5%') {
                trrl.value = '0'
                trrr.value = '5'
            } else if (command === '5%~10%') {
                trrl.value = '5'
                trrr.value = '10'
            } else if (command === '10%~20%') {
                trrl.value = '10'
                trrr.value = '20'
            } else if (command === '20%~30%') {
                trrl.value = '20'
                trrr.value = '30'
            } else if (command === '30%~50%') {
                trrl.value = '30'
                trrr.value = '50'
            } else if (command === '50%以上') {
                trrl.value = '50'
                trrr.value = ''
            } else {
                trrl.value = ''
                trrr.value = ''
            }
            break
        default:
            break
    }
    handleSearch()
}
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
// const { searchData, searchParams } = storeToRefs(searchStore)
function handleSearch() {
    const localSearchParams = {
        keywordType: select.value,
        keyword: input3.value,
        ifStart_2019: min_factor.value,
        ifEnd_2019: max_factor.value,
        ifStart: '',
        ifEnd: '',
        jcr: jcr.value,
        sub: sub.value,
        trrl: trrl.value,
        trrr: trrr.value,
        selfCitingRate: 'all',
        compatriotRate: 'all',
        isDomestic: '',
        totalReviewRatio: 'all',
        categoryId: '',
        recommend: '0',
        selfStart: '',
        selfEnd: '',
        numberStart: '',
        numberEnd: ''
    }
    searchStore.updateSearchParams(localSearchParams)
}
</script>
<style lang="less" scoped>
.search-type {
    width: 100%;
    height: 138px;
    box-shadow: 0 5px 7px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-top: 1px solid #ddd;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        padding: 20px 50px 14px;
        box-sizing: border-box;

        .search-input {
            width: 800px;
            height: 50px;
            box-sizing: border-box;

            .el-select {
                border: none;
            }

            .el-input {
                border: 1px solid #0fa4b3;
            }

            :deep(.el-select__wrapper) {
                height: 48px;
                line-height: 48px;
                background-color: #fff;
            }

            :deep(.el-input-group__append) {
                background-color: #0fa4b3;
                color: #fff;
                box-shadow: none;
                border: none;
                border-radius: 0;
            }

            .input-with-select {
                height: 100%;
                width: 100%;
            }
        }

        .settings {
            display: flex;
            justify-content: space-around;
            width: 100%;

            // height: 32px;

            .impact_factor {
                display: flex;
                align-items: center;

                span {
                    font-size: 14px;
                }

                .factor_input {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;

                    .divider {
                        width: 10px;
                        height: 1px;
                        background: #dcdfe6;
                        margin: 0 5px;
                    }
                }
            }

            .custom_select {
                display: flex;
                align-items: center;

                span {
                    font-size: 14px;
                }

                .el-dropdown {
                    padding: 0 10px;


                }
            }
        }
    }

    .el-dropdown-link {
        cursor: pointer;
    }
}
</style>
