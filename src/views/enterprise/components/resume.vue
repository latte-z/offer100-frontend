<style lang="less">
@import './styles/resume.less';
</style>

<template>
    <div>
        <div class="resume-container" style="display: block;">
            <Tabs value="name1">
                <TabPane :label="label1" name="name1">
                    <!-- 筛选条件 -->
                    <div class="resume_choose">
                        <div class="optionbox fl">
                            <span class="keyword fl">岗位名：</span>
                            <div class="placeCombox fl">
                                <input v-model="keywordInput" type="text" value="" id="keyWork" placeholder="请输入搜索岗位名" class="comboBoxInput">
                            </div>
                        </div>
                        <div class="fl">
                            <Button type="primary" icon="ios-search" @click="handleSearch">Search</Button>
                        </div>
                    </div>
                    <!-- 简历表格 -->
                    <resume_table1 :page="page" :resumeRows="rows"></resume_table1>
                </TabPane>
                <TabPane :label="label2" name="name2">
                    <!-- 筛选条件 -->
                    <div class="resume_choose">
                        <div class="optionbox fl">
                            <span class="keyword fl">岗位名：</span>
                            <div class="placeCombox fl">
                                <input v-model="keywordInput" type="text" value="" id="keyWork" placeholder="请输入搜索岗位名" class="comboBoxInput">
                            </div>
                        </div>
                        <div class="fl">
                            <Button type="primary" icon="ios-search">Search</Button>
                        </div>
                    </div>
                    <resume_table2></resume_table2>
                </TabPane>
                <TabPane :label="label3" name="name3">
                    <!-- 筛选条件 -->
                    <div class="resume_choose">
                        <div class="optionbox fl">
                            <span class="keyword fl">岗位名：</span>
                            <div class="placeCombox fl">
                                <input v-model="keywordInput" type="text" value="" id="keyWork" placeholder="请输入搜索岗位名" class="comboBoxInput">
                            </div>
                        </div>
                        <div class="fl">
                            <Button type="primary" icon="ios-search">Search</Button>
                        </div>
                    </div>
                    <resume_table3></resume_table3>
                </TabPane>
                <TabPane :label="label4" name="name4">
                    <!-- 筛选条件 -->
                    <div class="resume_choose">
                        <div class="optionbox fl">
                            <span class="keyword fl">岗位名：</span>
                            <div class="placeCombox fl">
                                <input v-model="keywordInput" type="text" value="" id="keyWork" placeholder="请输入搜索岗位名" class="comboBoxInput">
                            </div>
                        </div>
                        <div class="fl">
                            <Button type="primary" icon="ios-search">Search</Button>
                        </div>
                    </div>
                    <resume_table4></resume_table4>
                </TabPane>
            </Tabs>

        </div>
    </div>
</template>

<script>
import resume_table1 from './sub_components/resume_table1.vue'
import resume_table2 from './sub_components/resume_table2.vue'
import resume_table3 from './sub_components/resume_table3.vue'
import resume_table4 from './sub_components/resume_table4.vue'

export default {
    name: 'enterprise_resume',
    components: {
        resume_table1,
        resume_table2,
        resume_table3,
        resume_table4
    },
    data () {
        return {
            keywordInput: '',
            params: '',
            searchUrl: 'http://localhost:8081/unfilterSearch',
            
            rows: [],
            page: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            },
            label1: (h) => {
                return h('div', [
                    h('span', '待筛选 '),
                    h('Badge', {
                        props: {
                            count: 2,
                            className: 'badge-alone'
                        }
                    })
                ])
            },
            label2: (h) => {
                return h('div', [
                    h('span', '待沟通 '),
                    h('Badge', {
                        props: {
                            count: 2,
                            className: 'badge-alone'
                        }
                    })
                ])
            },
            label3: (h) => {
                return h('div', [
                    h('span', '已邀请 '),
                    h('Badge', {
                        props: {
                            count: 4,
                            className: 'badge-alone'
                        }
                    })
                ])
            },
            label4: (h) => {
                return h('div', [
                    h('span', '不合适 '),
                    h('Badge', {
                        props: {
                            count: 4,
                            className: 'badge-alone'
                        }
                    })
                ])
            },
            data4: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [],
                    loading: false
                },
                {
                    value: 'hangzhou',
                    label: '杭州',
                    children: [],
                    loading: false
                }
            ]
        };
    },
    methods: {
        loadData (item, callback) {
            item.loading = true;
            setTimeout(() => {
                if (item.value === 'beijing') {
                    item.children = [
                        {
                            value: 'baidu',
                            label: '百度'
                        },
                        {
                            value: 'sina',
                            label: '新浪'
                        }
                    ];
                } else if (item.value === 'hangzhou') {
                    item.children = [
                        {
                            value: 'ali',
                            label: '阿里巴巴'
                        },
                        {
                            value: '163',
                            label: '网易'
                        }
                    ];
                }
                item.loading = false;
                callback();
            }, 1000);
        },
        init () {
            this.params = this.$route.params.keywordInput;
            this.keywordInput = this.params;
            this.handleSearch();
        },
        handleSearch () {
            if (this.keywordInput) {
                let keys = { "key": [this.keywordInput] };
                this.$axios.put(this.searchUrl + '?page=' + this.page.current + '&rows=' + this.page.pageSize, keys)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data;
                        this.$Loading.finish();
                    })
            } else {
                this.$axios.put(this.searchUrl + '?page=' + this.page.current + '&rows=' + this.page.pageSize)
                    .then(response => {
                        this.page.total = response.data.total;
                        this.rows = response.data;
                        this.$Loading.finish();
                    })
            }
        }

    },
    computed: {

    }
};
</script>
