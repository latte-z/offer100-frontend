<style lang="less">
@import './enterprise-search.less';
</style>
<template>
    <div class="enterprise-search-main">
        <Row>
            <div class="row-wrapper" style="margin-top:30px;">
                <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
                    <search-head v-on:listenToChildEvent="getFilterInfo"></search-head>
                    <Row :gutter="5">
                        <Col :md="24" :lg="6">
                        <Row :gutter="5">
                            <div v-for="(enterprise,index) in rows" v-if="index === 0 || index === 4" style="padding:5px">
                                <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                            </div>
                        </Row>
                        </Col>
                        <Col :md="24" :lg="6">
                        <Row :gutter="5">
                            <div v-for="(enterprise,index) in rows" v-if="index === 1 || index === 5" style="padding:5px">
                                <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                            </div>
                        </Row>
                        </Col>
                        <Col :md="24" :lg="6">
                        <Row :gutter="5">
                            <div v-for="(enterprise,index) in rows" v-if="index === 2 || index === 6" style="padding:5px">
                                <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                            </div>
                        </Row>
                        </Col>
                        <Col :md="24" :lg="6">
                        <Row :gutter="5">
                            <div v-for="(enterprise,index) in rows" v-if="index === 3 || index === 7" style="padding:5px">
                                <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                            </div>
                        </Row>
                        </Col>
                    </Row>
                    <!-- show-sizer  -->
                    <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total style="text-align:center;margin-top:50px"></Page>
                    <Spin size="large" fix v-if="spinShow" style="margin-top:208px;">
                        <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                        <div>加载中，请稍候</div>
                    </Spin>
                </Row>
            </div>
        </Row>
        <Row>
            <footer-div></footer-div>
        </Row>
    </div>
</template>
<script>
import searchHead from './components/head/enterprise-search-head.vue'
import enterpriseCard from '@/views/main-components/enterprise-card-search/enterprise-card.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_list',
    components: {
        searchHead,
        enterpriseCard,
        footerDiv
    },
    data () {
        return {
            spinShow: false,
            searchUrl: '',
            rows: [],
            education: '',
            industry: '',
            keys: {},
            page: {
                current: 1,
                total: 0,
                pageSize: 8,
                pageSizeOpts: [8, 16, 30],
            }
        }
    },
    computed: {

    },
    methods: {
        init () {
            this.handleSubmit();
        },
        buildUrl () {
            this.searchUrl = '/enterprise/selectEnterprise';
            this.searchUrl += '?pageNumber=' + this.page.current + '&pageSize=' + this.page.pageSize;
            switch (this.education) {
                case '未融资':
                    this.searchUrl += '&stage=0'; break;
                case 'A轮':
                    this.searchUrl += '&stage=1'; break;
                case 'B轮':
                    this.searchUrl += '&stage=2'; break;
                case 'C轮':
                    this.searchUrl += '&stage=3'; break;
                case 'D轮':
                    this.searchUrl += '&stage=4'; break;
                case 'D轮以上':
                    this.searchUrl += '&stage=5'; break;
                default: break;
            }
            switch (this.industry) {
                case '技术':
                    this.searchUrl += '&industryId=1'; break;
                case '产品':
                    this.searchUrl += '&industryId=2'; break;
                case '设计':
                    this.searchUrl += '&industryId=3'; break;
                case '运营':
                    this.searchUrl += '&industryId=4'; break;
                case '市场与销售':
                    this.searchUrl += '&industryId=5'; break;
                default: break;
            }
        },
        handleSubmit () {
            // 清空rows
            this.rows = [];
            // 加载进度条和loading动画
            this.$Loading.start();
            this.spinShow = true;
            this.buildUrl();

            this.$axios.get(this.searchUrl)
                .then(response => {
                    this.page.total = response.data.total;
                    this.rows = response.data.rows;
                    // 加载进度条和loading动画
                    this.$Loading.finish();
                    this.spinShow = false;
                })
        },
        getFilterInfo (data) {
            this.education = data[0].value;
            this.industry = data[1].value;
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
