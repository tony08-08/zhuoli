<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item class="leftLogo" index="0">
                <a src="#" alt="Element logo" class="logo">
                    <i class="iconfont iconziyuan1 topEdit_logo"></i>
                </a>
                <div class="line"></div>
                <a src="#" alt="Element logo">
                    <i class="iconfont iconziyuan iJournal_logo"></i>
                </a>
            </el-menu-item>
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.header {
    height: 51px;
    width: 1280px;
    padding: 0 50px;
    margin: 0 auto;

    .el-menu--horizontal {
        align-items: center;

        .leftLogo {
            margin-right: auto;
            height: 30px;
            line-height: 30px;

            .logo {
                margin-top: 4px;

                .topEdit_logo {
                    width: 115px;
                    height: 26px;
                    line-height: 26px;
                    font-size: 26px;
                    color: #0083ca;
                    cursor: pointer;
                }
            }

            .line {
                width: 1px;
                height: 30px;
                background: rgba(0, 0, 0, .2);
                margin: 0 16px;
            }

            .iJournal_logo {
                width: 82px;
                height: 26px;
                line-height: 26px;
                font-size: 26px;
                color: #0fa4b3;
                margin-bottom: 4px;
                cursor: pointer;
            }
        }
    }
}
</style>