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

        <div class="scroll_fix" style="margin-top:30px;">
            <div class="mr_integrity">
                <div class="mr_top clearfixs">
                    <span class="mr_tip_l">
                        <em class="mr_tip">简历处理率：</em>
                        <em class="mr_bfb">{{new Number(percent*100).toFixed(2)}}%</em>
                    </span>
                    <a class="mr_tip_r" target="_blank">处理简历</a>
                </div>
                <div class="mr_integrity_m">
                    <div class="mr_solid" :style="{width: setWidth + 'px'}"></div>
                    <div class="mr_dashed" :style="{width: setWidth + 'px'}"></div>
                </div>
            </div>
            <div class="mr_module">
                <ul>
                    <li class="md_flag" :class="{'active':isAccount}">
                        <a @click="goSearch('account')" class="clearfixs">
                            <Icon type="person" size="25"></Icon>
                            <span class="mr_m_name">账户管理</span>
                        </a>
                    </li>
                    <li class="md_flag" :class="{'active':isQualification}">
                        <a @click="goSearch('qualification')" class="clearfixs">
                            <Icon type="ribbon-b" size="25"></Icon>
                            <span class="mr_m_name">资质认证</span>
                        </a>
                    </li>
                    <li class="md_flag" :class="{'active':isResume}">
                        <a @click="goSearch('resume')" class="clearfixs">
                            <Icon type="document-text" size="25"></Icon>
                            <span class="mr_m_name">简历管理</span>
                        </a>
                    </li>
                    <li class="m_flag" :class="{'active':isJob}">
                        <a @click="goSearch('job')" class="clearfixs">
                            <Icon type="briefcase" size="25"></Icon>
                            <span class="mr_m_name">岗位管理</span>
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
    props: ['message'],
    data () {
        return {
            currentPage: '',
            isJob: false,
            isResume: false,
            isQualification: false,
            isAccount: false,
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            percent: 0,
            setWidth: 0
        };
    },
    methods: {
        func1 () {
            return this.$axios.get('http://localhost:8081/resume_post_record/manageResume?enterpriseId=1&state=1&pageNumber=1&pageSize=10');
        },
        func2 () {
            return this.$axios.get('http://localhost:8081/resume_post_record/manageResume?enterpriseId=1&state=2&pageNumber=1&pageSize=10');
        },
        func3 () {
            return this.$axios.get('http://localhost:8081/resume_post_record/manageResume?enterpriseId=1&state=3&pageNumber=1&pageSize=10');
        },
        func4 () {
            return this.$axios.get('http://localhost:8081/resume_post_record/manageResume?enterpriseId=1&state=4&pageNumber=1&pageSize=10');
        },
        init () {
            this.isJob = false;
            this.isResume = false;
            this.isQualification = false;
            this.isAccount = false;
            this.currentPage = this.message;
            switch (this.currentPage) {
                case 'account':
                    this.isAccount = true; break;
                case 'job':
                    this.isJob = true; break;
                case 'qualification':
                    this.isQualification = true; break;
                case 'resume':
                    this.isResume = true; break;
            }
            this.getPercent();
        },
        getPercent () {
            this.$axios.all([this.func1(), this.func2(), this.func3(), this.func4()])
                .then(this.$axios.spread((rep1, rep2, rep3, rep4) => {
                    this.num1 = rep1.data.total;
                    this.num2 = rep2.data.total;
                    this.num3 = rep3.data.total;
                    this.num4 = rep4.data.total;
                    this.percent = new Number(this.num2 + this.num3 + this.num4) / (this.num1 + this.num2 + this.num3 + this.num4).toFixed(2);
                    if (this.percent === NaN) {
                        this.percent = 0;
                    }
                    this.setWidth = 248 * this.percent;
                }));
        },
        goSearch (page) {
            let goPage = '';
            switch (page) {
                case 'account':
                    goPage = 'enterprise_account'; break;
                case 'job':
                    goPage = 'enterprise_job'; break;
                case 'qualification':
                    goPage = 'enterprise_qualification'; break;
                case 'resume':
                    goPage = 'enterprise_resume'; break;
            }
            this.$router.push({
                name: goPage
            })
        }
    },
    computed: {

    },
    mounted () {
        this.init();
    }
};
</script>
