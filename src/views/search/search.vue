<style lang="less">
@import './search.less';
</style>

<template>
    <div class="search-main" @keydown.enter="handleSubmit">
        <!-- 搜索bar -->
        <Row>
            <div class="content-header">
                <div class="search-wrapper2">
                    <div id="searchBar" class="search-bar">
                        <div class="tab-wrapper">
                            <a id="tab_pos" class="active" rel="nofollow" href="javascript:;">职位 (
                                <span>{{jobNum}}</span> ) </a>
                                <!-- 公司统计暂时无法实现 -->
                            <a id="tab_comp" rel="nofollow" href="javascript:;" class="">公司</a>
                        </div>
                        <div class="input-wrapper">
                            <div class="keyword-wrapper">
                                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                                <input v-model="searchInput" type="text" id="keyword" autocomplete="off" maxlength="64" placeholder="搜索职位、公司" value="" class="ui-autocomplete-input">
                            </div>
                            <input @click="handleSubmit" type="button" id="submit" value="搜索">
                        </div>
                        <dl class="relevantSearch">
                            <dt>相关搜索：</dt>
                            <dd>
                                <a @click="goSearch" target="_self">UI设计师</a>
                            </dd>
                            <dd>
                                <a @click="goSearch" target="_self">Java</a>
                            </dd>
                            <dd>
                                <a @click="goSearch" target="_self">网络推广</a>
                            </dd>
                            <dd>
                                <a @click="goSearch" target="_self">PHP</a>
                            </dd>
                            <dd>
                                <a @click="goSearch" target="_self">销售经理</a>
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
                        <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
                        <Spin size="large" fix v-if="spinShow" style="margin-top:208px;width:960px">
                            <Icon type="load-c" size=18 class="spin-icon-load"></Icon>
                            <div>加载中，请稍候</div>
                        </Spin>
                    </div>
                    <div class="content-right">
                        <searchHistory :class="{'dn':hasHistory}"></searchHistory>
                        <search-ad></search-ad>
                    </div>
                </Row>
            </div>
        </Row>
        <Row>
            <footer-div></footer-div>
        </Row>
    </div>
</template>

<script>
import searchHistory from './components/history/search-history.vue'
import searchAd from './components/ad/search-ad.vue'
import resultCard from './components/resultCard/result-card.vue'
import searchHead from './components/head/search-head.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'search_index',
    components: {
        searchHistory,
        searchAd,
        resultCard,
        searchHead,
        footerDiv
    },
    data () {
        return {
            hasHistory: true,
            spinShow: false,
            searchUrl: '/jobSearch',
            searchInput: '',
            params: '',
            rows: [],
            city: '全国',
            experience: '不限',
            education: '不限',
            industry: '不限',
            sorting: '默认',
            jobNum: 0,
            keys: {},
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
            if (localStorage.getItem('recentJobid'))
                this.hasHistory = false;
        },
        goSearch (e) {
            this.keys = {};
            this.searchInput = e.currentTarget.innerText;
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
            this.searchUrl = '/jobSearch';
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
                        this.jobNum = response.data.total;
                        if (this.jobNum > 500) {
                            this.jobNum = 500 + '+';
                        }
                        // 加载进度条和loading动画
                        this.$Loading.finish();
                        this.spinShow = false;
                    })
            } else {
                this.$axios.put(this.searchUrl)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data.rows;
                        this.jobNum = response.data.total;
                        if (this.jobNum > 500) {
                            this.jobNum = 500 + '+';
                        }
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
};
</script>

<style>

</style>
