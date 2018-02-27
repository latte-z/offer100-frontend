<style lang="less">
@import './search-head.less';
@import '../../../../styles/base.less';
</style>

<template>
    <div class="positionHead">
        <ul class="filter-wrapper">
            <li class="li-taller brief dn seo-db" id="filterBrief" style="display: block;">
                <span class="title">工作地点：</span>
                <a rel="nofollow" href="javascript:;" class="active">全国</a>
                <span class="title">工作经验：</span>
                <a rel="nofollow" href="javascript:;" class="active">不限</a>
                <span class="title">学历要求：</span>
                <a rel="nofollow" href="javascript:;" class="active">不限</a>
                <span class="title">融资阶段：</span>
                <a rel="nofollow" href="javascript:;" class="active">不限</a>
                <span class="title">行业领域：</span>
                <a rel="nofollow" href="javascript:;" class="active">不限</a>
            </li>
            <div class="details" id="filterCollapse" style="opacity: 1; height: 184px; display: block;">
                <div class="has-more">
                    <div class="more more-positions workPosition" ref="folded">
                        <li class="hot">
                            <span class="title">工作地点：</span>
                            <a rel="nofollow" href="javascript:;" class="active">全国</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">北京</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">上海</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">深圳</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">广州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">杭州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">成都</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">南京</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">武汉</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">西安</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">厦门</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">长沙</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">苏州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">天津</a>
                        </li>
                        <li class="other">
                            <a rel="nofollow" href="javascript:;" class="more-city-name">重庆</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">郑州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">青岛</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">合肥</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">福州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">济南</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">大连</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">珠海</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">无锡</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">佛山</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">东莞</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">宁波</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">常州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">沈阳</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">石家庄</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">昆明</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">南昌</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">南宁</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">哈尔滨</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">海口</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">中山</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">惠州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">贵阳</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">长春</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">太原</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">嘉兴</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">泰安</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">昆山</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">烟台</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">兰州</a>
                            <a rel="nofollow" href="javascript:;" class="more-city-name">泉州</a>
                            <a rel="nofollow" href="javascript:;" id="all_city">全部城市 &gt; </a>
                        </li>
                    </div>

                    <!-- 处理工作地点深层选择 -->
                    <div class="choose-detail">
                        <li class="position-head">

                            <div class="current-handle-position">
                                <span class="title">工作地点：</span>
                                <a class="current_city current">全国</a>
                            </div>

                            <div class="other-hot-city" ref="otherHotCity">
                                <div class="city-wrapper dn" style="margin-left: 132px; width: 740px; overflow: hidden; display: block;">
                                    <a class="hot-city-name">北京</a>
                                    <a class="hot-city-name">上海</a>
                                    <a class="hot-city-name">深圳</a>
                                    <a class="hot-city-name">广州</a>
                                    <a class="hot-city-name">杭州</a>
                                    <a class="hot-city-name">成都</a>
                                    <a class="hot-city-name">南京</a>
                                    <a class="hot-city-name">武汉</a>
                                    <a class="hot-city-name">西安</a>
                                    <a class="hot-city-name">厦门</a>
                                    <a class="hot-city-name">长沙</a>
                                    <a class="hot-city-name">苏州</a>
                                    <a class="hot-city-name">天津</a>
                                </div>
                                <a rel="nofollow" class="btn-more" @mouseover="city_unfolded">更多
                                    <i></i>
                                </a>
                            </div>
                        </li>
                    </div>
                </div>
                <li class="multi-chosen">
                    <span class="title">工作经验：</span>
                    <a rel="nofollow" href="javascript:;" class="active">不限
                    </a>
                    <a rel="nofollow" href="javascript:;">应届毕业生

                    </a>
                    <a rel="nofollow" href="javascript:;">3年及以下

                    </a>
                    <a rel="nofollow" href="javascript:;">3-5年

                    </a>
                    <a rel="nofollow" href="javascript:;">5-10年

                    </a>
                    <a rel="nofollow" href="javascript:;">10年以上

                    </a>
                    <a rel="nofollow" href="javascript:;">不要求

                    </a>
                </li>

                <li class="multi-chosen">
                    <span class="title">学历要求：</span>

                    <a rel="nofollow" href="javascript:;" class="active">不限
                    </a>
                    <a rel="nofollow" href="javascript:;">大专

                    </a>
                    <a rel="nofollow" href="javascript:;">本科

                    </a>
                    <a rel="nofollow" href="javascript:;">硕士

                    </a>
                    <a rel="nofollow" href="javascript:;">博士

                    </a>
                    <a rel="nofollow" href="javascript:;">不要求

                    </a>
                </li>
                <li class="multi-chosen">
                    <span class="title">融资阶段：</span>
                    <a rel="nofollow" href="javascript:;" class="active">不限
                    </a>
                    <a rel="nofollow" href="javascript:;">未融资

                    </a>
                    <a rel="nofollow" href="javascript:;">天使轮

                    </a>
                    <a rel="nofollow" href="javascript:;">A轮

                    </a>
                    <a rel="nofollow" href="javascript:;">B轮

                    </a>
                    <a rel="nofollow" href="javascript:;">C轮

                    </a>
                    <a rel="nofollow" href="javascript:;">D轮及以上

                    </a>
                    <a rel="nofollow" href="javascript:;">上市公司

                    </a>
                    <a rel="nofollow" href="javascript:;">不需要融资

                    </a>
                </li>
                <div class="has-more hy-area">
                    <li class="multi-chosen">
                        <span class="title">行业领域：</span>
                        <a rel="nofollow" href="javascript:;" class="active">不限
                        </a>
                        <a rel="nofollow" href="javascript:;">移动互联网

                        </a>
                        <a rel="nofollow" href="javascript:;">电子商务

                        </a>
                        <a rel="nofollow" href="javascript:;">金融

                        </a>
                        <a rel="nofollow" href="javascript:;">企业服务

                        </a>
                        <a rel="nofollow" href="javascript:;">教育

                        </a>
                        <a rel="nofollow" href="javascript:;">文化娱乐

                        </a>
                        <a rel="nofollow" href="javascript:;">游戏

                        </a>
                        <a rel="nofollow" href="javascript:;">O2O

                        </a>
                        <a rel="nofollow" href="javascript:;">硬件

                        </a>
                        <span class="btn-more-hy" href="javascript:;">更多
                            <i></i>
                        </span>
                    </li>
                    <div class="more-hy more-fields">
                        <li class="hot multi-chosen">
                            <span class="title">行业领域：</span>
                            <a rel="nofollow" href="javascript:;" class="active">不限
                            </a>
                            <a rel="nofollow" href="javascript:;">移动互联网

                            </a>
                            <a rel="nofollow" href="javascript:;">电子商务

                            </a>
                            <a rel="nofollow" href="javascript:;">金融

                            </a>
                            <a rel="nofollow" href="javascript:;">企业服务

                            </a>
                            <a rel="nofollow" href="javascript:;">教育

                            </a>
                            <a rel="nofollow" href="javascript:;">文化娱乐

                            </a>
                            <a rel="nofollow" href="javascript:;">游戏

                            </a>
                            <a rel="nofollow" href="javascript:;">O2O

                            </a>
                            <a rel="nofollow" href="javascript:;">硬件

                            </a>
                        </li>
                        <li class="other multi-chosen other-hy">
                            <a rel="nofollow" href="javascript:;">社交网络

                            </a>
                            <a rel="nofollow" href="javascript:;">旅游

                            </a>
                            <a rel="nofollow" href="javascript:;">医疗健康

                            </a>
                            <a rel="nofollow" href="javascript:;">生活服务

                            </a>
                            <a rel="nofollow" href="javascript:;">信息安全

                            </a>
                            <a rel="nofollow" href="javascript:;">数据服务

                            </a>
                            <a rel="nofollow" href="javascript:;">广告营销

                            </a>
                            <a rel="nofollow" href="javascript:;">分类信息

                            </a>
                            <a rel="nofollow" href="javascript:;">招聘

                            </a>
                            <a rel="nofollow" href="javascript:;">其他

                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </ul>
        <div class="btn-collapse-wrapper">
            <a rel="nofollow" class="btn-collapse" title="点击收起筛选项" @click="collapse_wrapper" ref="collapse"></a>
        </div>
        <ul class="order">
            <li class="wrapper">
                <div class="item order">
                    <span class="title">排序方式：</span>
                    <a rel="nofollow" href="javascript:;" class="active">默认</a>
                    <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=new&amp;city=全国#order">最新</a>
                </div>
                <div class="item salary selectUI">
                    <span class="title">月薪：</span>
                    <div class="selectUI-text text">
                        <span>不限</span>
                        <i></i>
                        <ul>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;city=全国#order">不限</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=2k以下&amp;city=全国#order">2k以下</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=2k-5k&amp;city=全国#order">2k-5k</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=5k-10k&amp;city=全国#order">5k-10k</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=10k-15k&amp;city=全国#order">10k-15k</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=15k-25k&amp;city=全国#order">15k-25k</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=25k-50k&amp;city=全国#order">25k-50k</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;yx=50k以上&amp;city=全国#order">50k以上</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item type selectUI">
                    <span class="title">工作性质：</span>
                    <div class="selectUI-text value text">
                        <span>不限</span>
                        <i></i>
                        <ul>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;city=全国#order">不限</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;gx=全职&amp;city=全国#order">全职</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;gx=兼职&amp;city=全国#order">兼职</a>
                            </li>
                            <li>
                                <a rel="nofollow" href="https://www.lagou.com/jobs/list_Java?px=default&amp;gx=实习&amp;city=全国&amp;isSchoolJob=1#order">实习</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item page">
                    <div class="prev ban">
                        &lt;
                    </div>
                    <div class="next_disabled next ">
                        &gt;
                    </div>
                    <div class="page-number">
                        <span class="curNum">1</span>
                        /
                        <span class="span totalNum">30</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'search_head',
    components: {

    },
    props: [

    ],
    data () {
        return {

        };
    },
    computed: {

    },
    
    methods: {
        collapse_wrapper(){
            if(document.getElementById("filterCollapse").style.display == "block"){
                document.getElementById("filterCollapse").style.display = "none" ;
                this.$refs.collapse.className = "btn-collapse collapsed";
            }else{
                document.getElementById("filterCollapse").style.display = "block" ;
                this.$refs.collapse.className = "btn-collapse";
            }
        },
        city_unfolded(){
            this.$refs.folded.className = "more more-positions workPosition unfolded";
            this.$refs.otherHotCity.className = "other-hot-city active";

        },
        city_folded(){
            this.$refs.folded.className = "more more-positions workPosition";
            this.$refs.otherHotCity.className = "other-hot-city";
        }
    }
};
</script>

<style>

</style>
