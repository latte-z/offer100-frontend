<style lang="less">
@import './search-head.less';
// @import '../../../../styles/base.less';
</style>

<template>
    <div class="positionHead">
        <ul class="filter-wrapper">
            <div class="details" id="filterCollapse" style="opacity: 1; height: auto;">
                <div class="has-more">

                    <!-- 处理工作地点深层选择 -->
                    <div class="choose-detail" style="margin-bottom:20px;">
                        <li class="position-head">

                            <div class="current-handle-position">
                                <span class="title">工作地点：</span>
                            </div>

                            <div class="other-hot-city" ref="city">
                                <div class="city-wrapper" style="margin-left: 75px;height:50px">
                                    <RadioGroup v-model="city" type="button" size="small" @on-change="sendMsgToParent">
                                        <Radio label="全国"></Radio>
                                        <Radio label="北京"></Radio>
                                        <Radio label="上海"></Radio>
                                        <Radio label="深圳"></Radio>
                                        <Radio label="广州"></Radio>
                                        <Radio label="杭州"></Radio>
                                        <Radio label="成都"></Radio>
                                        <Radio label="南京"></Radio>
                                        <Radio label="武汉"></Radio>
                                        <Radio label="西安"></Radio>
                                        <Radio label="厦门"></Radio>
                                        <Radio label="长沙"></Radio>
                                        <Radio label="苏州"></Radio>
                                        <Radio label="天津"></Radio>
                                        <Radio label="重庆"></Radio>
                                    </RadioGroup>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
                <li class="multi-chosen">
                    <span class="title">工作经验：</span>
                    <RadioGroup v-model="experience" type="button" size="small" @on-change="sendMsgToParent">
                        <Radio label="不限"></Radio>
                        <Radio label="应届毕业生"></Radio>
                        <Radio label="3年"></Radio>
                        <Radio label="5年"></Radio>
                        <Radio label="10年"></Radio>
                        <Radio label="10年以上"></Radio>
                    </RadioGroup>
                </li>

                <li class="multi-chosen">
                    <span class="title">学历要求：</span>
                    <RadioGroup v-model="education" type="button" size="small" @on-change="sendMsgToParent">
                        <Radio label="不限"></Radio>
                        <Radio label="大专"></Radio>
                        <Radio label="本科"></Radio>
                        <Radio label="硕士"></Radio>
                        <Radio label="博士"></Radio>
                        <Radio label="不要求"></Radio>
                    </RadioGroup>
                </li>
                <div class="has-more hy-area">
                    <li class="multi-chosen">
                        <span class="title">行业领域：</span>
                        <RadioGroup v-model="industry" type="button" size="small" @on-change="sendMsgToParent">
                            <Radio label="不限"></Radio>
                            <Radio label="移动互联网"></Radio>
                            <Radio label="电子商务"></Radio>
                            <Radio label="金融"></Radio>
                            <Radio label="企业服务"></Radio>
                            <Radio label="教育"></Radio>
                            <Radio label="文化娱乐"></Radio>
                            <Radio label="游戏"></Radio>
                            <Radio label="O2O"></Radio>
                            <Radio label="硬件"></Radio>
                        </RadioGroup>
                    </li>
                </div>
            </div>
        </ul>
        <!-- 排序方式及翻页(old) -->
        <ul class="order">
            <li class="wrapper">
                <div class="item order">
                    <span class="title">排序方式：</span>
                    <RadioGroup v-model="sorting" type="button" size="small" style="margin-left:5px;" @on-change="sendMsgToParent">
                        <Radio label="默认"></Radio>
                        <Radio label="最新"></Radio>
                    </RadioGroup>
                </div>
                <!-- <div class="item page">
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
                </div> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'search_head',
    data () {
        return {
            city: '全国',
            experience: '不限',
            education: '不限',
            industry: '不限',
            sorting: '默认',
            message: []
        };
    },
    computed: {

    },

    methods: {
        sendMsgToParent () {
            let tmp;
            switch (this.experience) {
                case '10年以上':
                    tmp = 11;
                case '10年':
                    tmp = 10;
                case '5年':
                    tmp = 5;
                case '3年':
                    tmp = 3;
                case '应届毕业生':
                    tmp = 0;
                case '不限':
                    tmp = '不限';
            }
            this.message = [
                { key: "city", value: this.city },
                { key: "experience", value: tmp },
                { key: "education", value: this.education },
                { key: "industry", value: this.industry },
                { key: "sorting", value: this.sorting }
            ];
            this.$emit("listenToChildEvent", this.message);
        }
    },
    mounted () {
        // this.sendMsgToParent();
    }
};
</script>

<style>

</style>
