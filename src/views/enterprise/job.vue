<style lang="less">
@import './job.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <!-- <job class="mr_myresume_l"></job> -->
                        <div class="mr_myresume_l">
                            <div class="main-cont clearfix">
                                <div class="top-fn clearfix">
                                    <a class="publishjob" href="/job/jobadd.html">
                                        <i class="ico icon-add"></i>&nbsp;&nbsp;发布职位</a>
                                    <div class="s clearfix">
                                        <input v-model="searchName" placeholder="输入职位名搜索"></input>
                                        <a class="s-btn" href="javascript:;">
                                            <i class="ico ico-search">搜索</i>
                                        </a>
                                    </div>
                                </div>
                                <div class="jobTabs">
                                    <a class="fs18 jobTab on" href="javascript:;" data-tab="manage">管理职位</a>
                                </div>
                                <div class="jobListWrap" style="display: block;">
                                    <Tabs value="name1">
                                        <TabPane label="在线中" name="name1">
                                            <!-- <job_table></job_table> -->
                                            <Table stripe :columns="jobColumns" :data="jobData1"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="10" :current="1" @on-change="changePage"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane label="已下线" name="name2">

                                            <!-- <job_table></job_table> -->
                                            <Table stripe :columns="jobColumns" :data="jobData2"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="10" :current="1" @on-change="changePage"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane label="未上线" name="name3">
                                            <Table stripe :columns="jobColumns" :data="jobData3"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="10" :current="1" @on-change="changePage"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                    </Tabs>

                                    <div style="clear: both;"></div>
                                    <div style="display: none;" class="bottom-fn clearfix">
                                        <div class="checkall">
                                            <i class="ico icon-check"></i>
                                            <span class="txt">全选</span>
                                        </div>
                                        <div class="fn-c-1">
                                            <a onclick="dyweTrackEvent('autorefresh','jm009')" class="onlytext" href="javascript:;" id="smartRefreshButton">智能刷新</a>
                                            <i class="vline">|</i>
                                            <a onclick="dyweTrackEvent('refresh','jm008')" class="onlytext" href="javascript:;" id="normalRefreshButton">普通刷新</a>
                                            <i class="vline">|</i>
                                            <a class="onlytext" href="javascript:;" id="downLineButton">下线职位</a>
                                        </div>
                                        <div style="display: none" class="fn-c-2">
                                            <a class="onlytext _deletejobs" href="javascript:;">删除</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <main-navbar :message="pageName"></main-navbar>
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
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_job',
    components: {
        mainNavbar,
        footerDiv
    },
    data () {
        return {
            pageName: 'job',
            //输入搜索的职位名
            searchName: '',
            enterpriseId: 1,
            // pageSize: 10,
            getJobUrl: 'http://47.93.20.40:8081/job?',
            jobColumns: [
                {
                    title: '岗位名称',
                    key: 'title',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', [
                                h('a', {
                                    props: {
                                        href: '#'
                                    }
                                }, params.row.title)
                            ])
                        ]);
                    }
                },
                {
                    title: '招聘人数',
                    key: 'peopleNumber',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.peopleNumber + '人')
                        ]);
                    }
                },
                {
                    title: '发布日期',
                    key: 'effectiveTime'

                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        // this.show(params.index)
                                        console.log('params:'+params);
                                        this.goNewPage(params.index);
                                    }
                                }
                            }, '查看'),
                            // h('Button', {
                            //     props: {
                            //         type: 'error',
                            //         size: 'small'
                            //     },
                            //     on: {
                            //         click: () => {
                            //             // this.remove(params.index)
                            //         }
                            //     }
                            // }, '下线')
                        ]);
                    }
                }
            ],
            jobData1: [],
            jobData2: [],
            jobData3: []
        };
    },
    methods: {
        init () {
            this.getOnlineJob();
            this.getOutlineJob();
            this.getNotOnlineJob();
        },
        getOnlineJob () { //获取在线中的职位
            this.getJobUrl = 'http://47.93.20.40:8081/job?';
            this.getJobUrl += 'state=1&enterpriseId=' + this.enterpriseId + '&pageSize=10&pageNumber=' + 1;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData1 = response.data.rows;
                    console.log(this.jobData1);
                })            

        },
        getOutlineJob () { //获取已下线的职位
            this.getJobUrl = 'http://47.93.20.40:8081/job?';
            this.getJobUrl += 'state=2&enterpriseId=' + this.enterpriseId + '&pageSize=10&pageNumber=' + 1;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData2 = response.data.rows;
                    console.log(this.jobData2);
                })            

        },
        getNotOnlineJob () { //获取未上线的职位
            this.getJobUrl = 'http://47.93.20.40:8081/job?';
            this.getJobUrl += 'state=0&enterpriseId=' + this.enterpriseId + '&pageSize=10&pageNumber=' + 1;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData3 = response.data.rows;
                    console.log(this.jobData3);
                })            

        },
        changePage () {

        },
        goNewPage(index) {
            console.log('job页面jobid：'+this.jobData1[index].id);
            this.$router.push({
                name: 'enterprise_jobadd',
                params: this.jobData1[index].id
                
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
