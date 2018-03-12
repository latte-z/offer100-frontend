<style lang="less">
@import './enterprise-search.less';
</style>
<template>
    <div class="enterprise-search-main">
        <Row>
            <div class="row-wrapper" style="margin-top:30px;">
                <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
                    <div class="content-left">
                        <search-head v-on:listenToChildEvent="getFilterInfo"></search-head>
                        <!-- <div v-for="(row,index) in rows">
                            <enterpriseCard :message="row"></enterpriseCard>
                        </div> -->

                        <Row :gutter="5">
                            <Col :md="24" :lg="6">
                            <Row :gutter="5">
                                <div v-for="(enterprise,index) in enterprises" v-if="index === (0 || 4 || 8)" style="padding:5px">
                                    <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                                </div>
                            </Row>
                            </Col>
                            <Col :md="24" :lg="6">
                            <Row :gutter="5">
                                <div v-for="(enterprise,index) in enterprises" v-if="index === (1 || 5 || 9)" style="padding:5px">
                                    <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                                </div>
                            </Row>
                            </Col>
                            <Col :md="24" :lg="6">
                            <Row :gutter="5">
                                <div v-for="(enterprise,index) in enterprises" v-if="index === (2 || 6 || 10)" style="padding:5px">
                                    <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                                </div>
                            </Row>
                            </Col>
                            <Col :md="24" :lg="6">
                            <Row :gutter="5">
                                <div v-for="(enterprise,index) in enterprises" v-if="index === (3 || 7 || 11)" style="padding:5px">
                                    <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                                </div>
                            </Row>
                            </Col>
                        </Row>

                        <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
                        <Spin size="large" fix v-if="spinShow" style="margin-top:208px;">
                            <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                            <div>加载中，请稍候</div>
                        </Spin>
                    </div>
                </Row>
            </div>
        </Row>
    </div>
</template>
<script>
import searchHead from './components/head/enterprise-search-head.vue'
import enterpriseCard from '@/views/main-components/enterprise-card/enterprise-card.vue'
export default {
    name: 'enterprise_list',
    components: {
        searchHead,
        enterpriseCard
    },
    data () {
        return {
            spinShow: false,
            searchUrl: 'http://localhost:8081/jobSearch',
            enterprises: [],
            city: '',
            experience: '',
            education: '',
            industry: '',
            sorting: '',
            keys: {},
            page: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            }
        }
    },
    computed: {

    },
    methods: {
        init () {
            this.handleSubmit();
        },
        buildKey () {
            this.keys = {};
            // 等值搜索
            // 地区重新加入 key 内搜索
            // if (this.city != '全国')
            //     this.keys.zone = this.city;
            if (this.experience != '不限')
                this.keys.serviceYear = this.experience;
            if (this.education != '不限')
                this.keys.education = this.education;
            if (this.industry != '不限')
                this.keys.enterpriseCategory = this.industry;
            // key 内检索
            if (this.searchInput) {
                if (!this.keys.key)
                    this.keys.key = [];
                this.keys.key.push(this.searchInput);
            }
            if (this.city != '全国') {
                if (!this.keys.key)
                    this.keys.key = [];
                this.keys.key.push(this.city);
            }
        },
        buildUrl () {
            this.searchUrl = 'http://localhost:8081/jobSearch';
            this.searchUrl += '?page=' + this.page.current + '&rows=' + this.page.pageSize;
            if (this.sorting != '默认')
                this.searchUrl += '&sortKey=publishTime' + '&asc=false';
        },
        handleSubmit () {
            // 清空rows
            this.rows = [];
            // 加载进度条和loading动画
            this.$Loading.start();
            this.spinShow = true;
            this.buildKey();
            this.buildUrl();
            // 对body内容做判断
            if (JSON.stringify(this.keys) != '{}') {
                this.$axios.put(this.searchUrl, this.keys)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data.rows;
                        // 加载进度条和loading动画
                        this.$Loading.finish();
                        this.spinShow = false;
                    })
            } else {
                this.$axios.put(this.searchUrl)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data.rows;
                        // 加载进度条和loading动画
                        this.$Loading.finish();
                        this.spinShow = false;
                    })
            }
        },
        getFilterInfo (data) {
            this.city = data[0].value;
            // console.log(this.city);
            this.experience = data[1].value;
            // console.log(this.experience);
            this.education = data[2].value;
            // console.log(this.education);
            this.industry = data[3].value;
            // console.log(this.industry);
            this.sorting = data[4].value;
            // console.log(this.sorting);
            this.handleSubmit();
        },
        pageChange (page) {
            this.page.current = page;
            this.handleSubmit();
        },
        pageSizeChange (pageSize) {
            this.page.pageSize = pageSize;
            this.handleSubmit();
        }
    },
    mounted () {
        this.init()
    }
}
</script>
