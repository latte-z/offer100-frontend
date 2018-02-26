<style lang="less">
@import './search.less';
</style>

<template>
    <div class="search-main">
        <!-- 搜索bar -->
        <Row style="margin-top:20px">
            <div class="content-header">
                <div class="search-wrapper">
                    <div id="searchBar" class="search-bar">
                        <div class="tab-wrapper">
                            <a id="tab_pos" class="active" rel="nofollow" href="javascript:;">职位 (
                                <span>500+</span> ) </a>
                            <a id="tab_comp" rel="nofollow" href="javascript:;" class="">公司 (
                                <span>74</span> ) </a>
                        </div>
                        <div class="input-wrapper" data-lg-tj-track-code="search_search" data-lg-tj-track-type="1">
                            <div class="keyword-wrapper">
                                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                                <input type="text" id="keyword" autocomplete="off" maxlength="64" placeholder="搜索职位、公司或地点" value="" class="ui-autocomplete-input">
                            </div>
                            <input type="button" id="submit" value="搜索">
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

        <Row>
            <div class="row-wrapper">
                <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
                    <div class="content-left">
                        <result-card></result-card>
                        <result-card></result-card>
                        <result-card></result-card>
                        <result-card></result-card>
                        <result-card></result-card>
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
export default {
    name: 'search_index',
    components: {
        searchHistory,
        searchAd,
        resultCard
    },
    props: [

    ],
    data () {
        return {
            searchForm: {
                input: ''
            },
        };
    },
    computed: {

    },
    methods: {
        handleSubmit () {
            this.$axios.post(this.searchUrl, qs.stringify(this.searchForm))
                .then(response => {
                    let params = response.data.result
                    this.$router.push({
                        name: 'search_index',
                        params: params
                    })
                })
        }
    }
};
</script>

<style>

</style>
