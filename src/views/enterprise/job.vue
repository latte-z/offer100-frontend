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
                                    <Button class="publishjob" @click="jobAddPage" type="primary" size="large">发布职位</Button>
                                    <!-- <a class="publishjob" href="">
                                        <i class="ico icon-add"></i>&nbsp;&nbsp;发布职位</a> -->
                                    <!-- <div class="s clearfix">
                                        <input v-model="searchName" placeholder="输入职位名搜索"></input>
                                        <a class="s-btn" href="javascript:;">
                                            <i class="ico ico-search">搜索</i>
                                        </a>
                                    </div> -->
                                </div>
                                <div class="jobTabs">
                                    <a class="fs18 jobTab on" href="javascript:;" data-tab="manage">管理职位</a>
                                </div>
                                <div class="jobListWrap" style="display: block;">
                                    <Tabs value="name1">
                                        <TabPane label="在线中" name="name1">
                                            <Table stripe :columns="jobColumns" :data="jobData1"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page @on-change="pageChange1" @on-page-size-change="pageSizeChange1" placement="top" :current="page1.current" :total="page1.total" :page-size="page1.pageSize" :page-size-opts="page1.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane label="已下线" name="name2">
                                            <Table stripe :columns="jobColumns" :data="jobData2"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page @on-change="pageChange2" @on-page-size-change="pageSizeChange2" placement="top" :current="page2.current" :total="page2.total" :page-size="page2.pageSize" :page-size-opts="page2.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane label="未上线" name="name3">
                                            <Table stripe :columns="jobColumns" :data="jobData3"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page @on-change="pageChange3" @on-page-size-change="pageSizeChange3" placement="top" :current="page3.current" :total="page3.total" :page-size="page3.pageSize" :page-size-opts="page3.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
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
            enterpriseId: '',
            // pageSize: 10,
            getJobUrl: '/job?',
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
                    key: 'effectiveTime',
                    render: (h, params) => {
                        return h('div',
                            new Date(params.row.effectiveTime).Format('yyyy-MM-dd')
                        );/*这里的this.row能够获取当前行的数据*/
                    }

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
                                        // console.log('params.index:' + params.index);
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
            jobData3: [],
            page1: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            },
            page2: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            },
            page3: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            }
        };
    },
    methods: {
        init () {
            this.getOnlineJob();
            this.getOutlineJob();
            this.getNotOnlineJob();
            this.enterpriseId = localStorage.getItem('userid');

        },
        getOnlineJob () { //获取在线中的职位
            this.getJobUrl = '/job?';
            this.getJobUrl += 'state=1&enterpriseId=' + this.enterpriseId + '&pageSize=' + this.page1.pageSize + '&pageNumber=' + this.page1.current;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData1 = response.data.rows;
                    this.page1.total = response.data.total;
                    this.initFormatter();
                    console.log(this.jobData1);
                })

        },
        getOutlineJob () { //获取已下线的职位
            this.getJobUrl = '/job?';
            this.getJobUrl += 'state=2&enterpriseId=' + this.enterpriseId + '&pageSize=' + this.page2.pageSize + '&pageNumber=' + this.page2.current;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData2 = response.data.rows;
                    this.page2.total = response.data.total;
                    this.initFormatter();
                    console.log(this.jobData2);
                })

        },
        getNotOnlineJob () { //获取未上线的职位
            this.getJobUrl = '/job?';
            this.getJobUrl += 'state=0&enterpriseId=' + this.enterpriseId + '&pageSize=' + this.page3.pageSize + '&pageNumber=' + this.page3.current;

            this.$axios.get(this.getJobUrl)
                .then(response => {
                    this.jobData3 = response.data.rows;
                    this.page3.total = response.data.total;
                    this.initFormatter();
                    console.log(this.jobData3);
                })

        },
        changePage () {

        },
        pageChange1 (page) {
            this.page1.current = page;
            this.getOnlineJob();
        },
        pageChange2 (page) {
            this.page2.current = page;
            this.getOutlineJob();
        },
        pageChange3 (page) {
            this.page3.current = page;
            this.getNotOnlineJob();
        },
        pageSizeChange1 (pageSize) {
            this.page1.pageSize = pageSize;
            this.getOnlineJob();
        },
        pageSizeChange2 (pageSize) {
            this.page2.pageSize = pageSize;
            this.getOutlineJob();
        },
        pageSizeChange3 (pageSize) {
            this.page3.pageSize = pageSize;
            this.getNotOnlineJob();
        },
        goNewPage (index) {
            console.log('job页面jobid：' + this.jobData1[index].id);
            this.$router.push({
                name: 'enterprise_jobadd',
                params: {
                    jobId: this.jobData1[index].id
                }
            })
        },
        jobAddPage() {
            this.$router.push({
                name: 'enterprise_jobadd'
            })
        },
        // formatDate (timestramp) {
        //     return new Date(timestramp).Format('yyyy-MM-dd');
        // },
        initFormatter () {
            Date.prototype.Format = function (fmt) { //  
                let o = {
                    "M+": this.getMonth() + 1,                 //月份    
                    "d+": this.getDate(),                    //日    
                    "h+": this.getHours(),                   //小时    
                    "m+": this.getMinutes(),                 //分    
                    "s+": this.getSeconds(),                 //秒    
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度    
                    "S": this.getMilliseconds()             //毫秒    
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }
    },
    computed: {

    },
    mounted () {
        this.init();
    }
};
</script>
