<template>
    <div class="header">
        <div class="content">
            <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
                <el-menu-item class="leftLogo" index="0">
                    <a src="#" alt="Element logo" class="logo">
                        <i class="iconfont iconziyuan1 topEdit_logo"></i>
                    </a>
                    <div class="line"></div>
                    <a src="#" alt="Element logo">
                        <i class="iconfont iconziyuan iJournal_logo"></i>
                    </a>
                </el-menu-item>
                <el-menu-item class="rightline"><span>期刊详情查询</span></el-menu-item>
                <el-menu-item class="rightline"><span>AI智能选刊</span></el-menu-item>
                <el-menu-item class="rightline"><span>期刊解析与推荐</span></el-menu-item>
                <el-menu-item class="rightline"><span>iThenticate查重</span></el-menu-item>
                <el-menu-item class="rightline"><span>关于我们</span></el-menu-item>
                <el-menu-item><el-button color="#3fb6c2">登录/注册</el-button></el-menu-item>
            </el-menu>
        </div>

    </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'

// const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
</script>

<style lang="less" scoped>
.header {
    height: 51px;
    width: 100%;
    background-color: #fff;

    .content {
        height: 51px;
        width: 1280px;
        padding: 0 50px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .el-menu--horizontal {
        align-items: center;
        border: none;

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

        .rightline {
            height: 30px;
            border-right: 1px solid #e5e5e5;
        }

        .el-button {
            color: #fff;
        }
    }

    .el-menu--horizontal {
        --el-menu-horizontal-height: 51px;
    }
}
</style>