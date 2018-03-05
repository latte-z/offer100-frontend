<style lang="less">
@import './styles/main-navbar.less';
</style>

<template>
    <div class="mr_myresume_r">
        <!-- <div class="mr_r_nav">
            <ul class="clearfixs">
                <li>
                    <a href="" target="_blank">投递箱
                        <i class="td"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">邀请函
                        <i class="yq"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">收藏夹
                        <i class="sc"></i>
                    </a>
                </li>
                <li class="mr_none">
                    <a href="" target="_blank">订阅栏
                        <i class="dy"></i>
                    </a>
                </li>
            </ul>
        </div> -->

        <div class="scroll_fix">
            <div class="mr_integrity">
                <div class="mr_top clearfixs">
                    <span class="mr_tip_l">
                        <em class="mr_tip">简历处理率：</em>
                        <em class="mr_bfb">28%</em>
                    </span>
                    <a class="mr_tip_r" target="_blank" href="">处理简历</a>
                </div>
                <div class="mr_integrity_m">
                    <div class="mr_solid" style="width: 70px;"></div>
                    <div class="mr_dashed" style="width: 70px;"></div>
                </div>
            </div>
            <div class="mr_module">
                <ul>
                    <li class="active md_flag">
                        <a class="clearfixs">
                            <Icon type="cube"></Icon>
                            <span class="mr_m_name">仪表板</span>
                        </a>
                    </li>
                    <li class="md_flag">
                        <a class="clearfixs">
                            <Icon type="ribbon-b"></Icon>
                            <span class="mr_m_name">资质认证</span>
                        </a>
                    </li>
                    <li class="md_flag">
                        <a class="clearfixs">
                            <Icon type="document-text"></Icon>
                            <span class="mr_m_name">简历管理</span>
                        </a>
                    </li>
                    <li class="m_flag">
                        <a class="clearfixs">
                            <Icon type="briefcase"></Icon>
                            <span class="mr_m_name">岗位管理</span>
                        </a>
                    </li>
                    <li class="m_flag">
                        <a class="clearfixs">
                            <Icon type="search"></Icon>
                            <span class="mr_m_name">人才搜索</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main_navbar',
    data () {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
