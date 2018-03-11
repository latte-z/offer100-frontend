<style lang="less">
@import './resume.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <!-- <resume class="mr_myresume_l"></resume> -->
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
                                    <!-- <resume_table4></resume_table4> -->
                                    <Table border stripe :columns="columns" :data="data"></Table>
                                    <div style="margin: 10px;overflow: hidden">
                                        <div style="float: right;">
                                            <Page :total="100" :current="1" @on-change="changePage"></Page>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                        <main-navbar></main-navbar>
                    </div>
                </div>
            </Row>
        </div>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>
</template>

<script>
import mainNavbar from './components/main-navbar.vue'
// import resume from './components/resume.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_resume',
    components: {
        mainNavbar,
        // resume,
        footerDiv
    },
    data () {
        return {
            keywordInput: '',
            params: '',
            searchUrl: 'http://47.93.20.40:8081/resume_post_record/manageResume',

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
            columns: [
                {
                    title: '序号',
                    key: 'num',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '投递时间',
                    key: 'repostTime',
                    align: 'center'
                },
                {
                    title: '求职岗位',
                    key: 'jobName',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.jobName)
                        ]);
                    }
                },
                {
                    title: '学历',
                    key: 'education',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.education)
                        ]);
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 300,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    // click: () => {
                                    //     this.remove(params.index)
                                    // }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
            data: [
                {
                    num: '01',
                    repostTime: '2018-01-01',
                    jobName: "java开发",
                    education: '本科'
                },
                {
                    num: '02',
                    repostTime: '2018-01-01',
                    jobName: "java开发",
                    education: '本科'
                },
                {
                    num: '03',
                    repostTime: '2018-01-01',
                    jobName: "java开发",
                    education: '硕士'
                }
            ]
        };
    },
    methods: {
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
        },
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    num: this.data[i].num,
                    repostTime: this.data[i].repostTime,
                    jobName: this.data[i].jobName,
                    education: this.data[i].education

                })
            }
            return data;
        },
        changePage () {
            this.tableData1 = this.mockTableData1();
        }
    },
    computed: {

    }
};
</script>
