<template>
    <div class="main-footer">
        <div class="footer_content">
            <div class="logo_wrapper">
                <div class="logo_box">
                    <i class="iconfont iconziyuan1 topEdit_logo"></i>
                    <div class="line"></div>
                    <i class="iconfont iconziyuan iJournal_logo"></i>
                </div>
                <div class="web_info_box">
                    <p class="web_name">© 2019 Topedit All Rights Reserved</p>
                    <a
                        href="https://xyt.xcc.cn/getpcInfo?sn=1813159197290688512&language=CN&certType=8&url=www.topeditsci.com">
                        <embed src="https://program.xinchacha.com/web/1813159197290688512=www.topeditsci.com.svg"
                            width="103" height="38" pluginspage="//www.adobe.com/svg/viewer/install/">
                    </a>
                </div>
            </div>
            <div class="footer_content_item">
                <p class="footer_content_item_title">
                    iJournal平台
                </p>
                <p class="footer_content_item_nav">首页</p>
                <p class="footer_content_item_nav">关于我们</p>
            </div>
            <div class="footer_content_item">
                <p class="footer_content_item_title">
                    相关服务
                </p>
                <p class="footer_content_item_nav">论文服务</p>
                <p class="footer_content_item_nav">查重服务</p>
            </div>
            <div class="footer_content_item">
                <p class="footer_content_item_title">
                    战略合作伙伴
                </p>
                <p class="footer_content_item_nav">投必得学术公众号</p>
                <p class="footer_content_item_nav">投必得学术知乎机构号</p>
                <p class="footer_content_item_nav">智慧科研公众号</p>
            </div>
            <div class="footer_content_item">
                <p class="footer_content_item_title">
                    联系我们
                </p>
                <p class="footer_content_item_nav">iJournal平台客服</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.main-footer {
    position: relative;
    bottom: 0;
    display: flex;
    height: 250px;
    min-height: 250px;
    background-color: #202329;
    padding: 20px 0 10px;

    .footer_content {
        display: flex;
        height: 100%;
        width: 1180px;
        margin: 0 auto;

        .logo_wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 66px;

            .logo_box {
                height: 50px;
                display: flex;

                .topEdit_logo {
                    width: 133px;
                    height: 30px;
                    line-height: 30px;
                    color: #fff;
                    font-size: 30px;
                    margin-top: 13px;
                    cursor: pointer;
                }

                .line {
                    width: 1px;
                    height: 20px;
                    background: hsla(0, 0%, 100%, .2);
                    margin: 15px 10px 0;
                }

                .iJournal_logo {
                    width: 95px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 30px;
                    color: #fff;
                    margin-top: 7px;
                    cursor: pointer;
                }
            }

            .web_info_box {
                .web_name {
                    color: #c0c4cc;
                    line-height: 40px;
                    font-size: 12px;
                }
            }
        }

        .footer_content_item {
            flex: 1;
            padding-left: 40px;
            font-size: 14px;

            .footer_content_item_title {
                color: #fff;
                line-height: 40px;
                margin-bottom: 10px;
            }

            .footer_content_item_nav {
                color: #c0c4cc;
                line-height: 30px;
                position: relative;
            }
        }
    }
}
</style>
