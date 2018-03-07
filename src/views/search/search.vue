<style lang="less">
@import './search.less';
</style>

<template>
    <div class="search-main">
        <!-- 搜索bar -->
        <Row>
            <div class="content-header">
                <div class="search-wrapper">
                    <div id="searchBar" class="search-bar">
                        <div class="tab-wrapper">
                            <a id="tab_pos" class="active" rel="nofollow" href="javascript:;">职位 (
                                <span>500+</span> ) </a>
                            <a id="tab_comp" rel="nofollow" href="javascript:;" class="">公司 (
                                <span>74</span> ) </a>
                        </div>
                        <div class="input-wrapper">
                            <div class="keyword-wrapper">
                                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                                <input v-model="searchInput" type="text" id="keyword" autocomplete="off" maxlength="64" placeholder="搜索职位、公司或地点" value="" class="ui-autocomplete-input">
                            </div>
                            <input @click="handleSubmit" type="button" id="submit" value="搜索">
                        </div>
                        <dl class="relevantSearch">
                            <dt>相关搜索：</dt>
                            <dd>
                                <a href="#" target="_self">UI设计师</a>
                            </dd>
                            <dd>
                                <a href="#" target="_self">Java</a>
                            </dd>
                            <dd>
                                <a href="#" target="_self">网络推广</a>
                            </dd>
                            <dd>
                                <a href="#" target="_self">PHP</a>
                            </dd>
                            <dd>
                                <a href="#" target="_self">销售经理</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </Row>

        <Row style="margin-top:-40px;">
            <div class="row-wrapper">
                <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
                    <div class="content-left">
                        <search-head v-on:listenToChildEvent="getFilterInfo"></search-head>
                        <div v-for="(row,index) in rows">
                            <result-card :message="row"></result-card>
                        </div>
                        <Page :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
                        <Spin size="large" fix v-if="spinShow" style="margin-top:208px;width:960px">
                            <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                            <div>加载中，请稍候</div>
                        </Spin>
                    </div>
                    <div class="content-right">
                        <searchHistory></searchHistory>
                        <search-ad></search-ad>
                    </div>
                </Row>
            </div>
        </Row>
    </div>
</template>

<script>
import searchHistory from './components/history/search-history.vue'
import searchAd from './components/ad/search-ad.vue'
import resultCard from './components/resultCard/result-card.vue'
import searchHead from './components/head/search-head.vue'
export default {
    name: 'search_index',
    components: {
        searchHistory,
        searchAd,
        resultCard,
        searchHead
    },
    data () {
        return {
            spinShow: false,
            searchUrl: 'http://localhost:8081/jobSearch',
            searchInput: '',
            params: '',
            rows: [],
            city: '',
            experience: '',
            education: '',
            industry: '',
            sorting: '',
            page: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            }
        };
    },
    computed: {

    },
    methods: {
        init () {
            this.params = this.$route.params.searchInput;
            this.searchInput = this.params;
            this.handleSubmit();
        },
        handleSubmit () {
            this.$Loading.start();
            this.spinShow = true;
            if (this.searchInput) {
                let keys = { "key": [this.searchInput] };
                this.$axios.put(this.searchUrl + '?page=' + this.page.current + '&rows=' + this.page.pageSize, keys)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data.rows;
                        this.$Loading.finish();
                        this.spinShow = false;
                    })
            } else {
                this.$axios.put(this.searchUrl + '?page=' + this.page.current + '&rows=' + this.page.pageSize)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data.rows;
                        this.$Loading.finish();
                        this.spinShow = false;
                    })
            }
        },
        getFilterInfo (data) {
            console.log(data[0].key)
        }
    },
    mounted () {
        this.init()
    }
};
</script>

<style>

</style>
