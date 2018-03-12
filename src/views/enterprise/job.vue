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
                                    <div class="vip-info" style="display: none;">
                                        <div class="vip-total">
                                            <span class="fl">今日可发布在线职位数：</span>
                                            <span id="totalJobTimes" class="totalJobTimes fl"></span>
                                            <div class="timesIconBox fl">
                                                <i class="ico timesIcon icon-question-ls"></i>
                                                <div class="jobtimeTip">
                                                    <p>
                                                        同时在线职位数
                                                        <span id="totalTimes">10</span>个；<br> 每日发布职位次数不超过
                                                        <span id="dayTimes">10</span>个；<br> 以上数据均以公司为单位计算，在线职位数可升级。
                                                    </p>
                                                    <a href="/systemhelp/#vip" target="_blank">升级会员</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="s clearfix">
                                        <input v-model="job_name" placeholder="输入职位名搜索"></input>
                                        <a class="s-btn" href="javascript:;">
                                            <i class="ico ico-search"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="jobTabs">
                                    <a class="fs18 jobTab on" href="javascript:;" data-tab="manage">管理职位</a>
                                </div>
                                <div class="jobListWrap" style="display: block;">

                                    <Tabs value="name1">
                                        <TabPane :label="label1" name="name1">

                                            <!-- <job_table></job_table> -->
                                            <Table stripe :columns="columns7" :data="data6"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane :label="label2" name="name2">

                                            <!-- <job_table></job_table> -->
                                            <Table stripe :columns="columns7" :data="data6"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane :label="label3" name="name3">
                                            <!-- <job_table></job_table> -->
                                            <Table stripe :columns="columns7" :data="data6"></Table>
                                            <div style="margin: 10px;overflow: hidden">
                                                <div style="float: right;">
                                                    <Page :total="100" :current="1" @on-change="changePage"></Page>
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
            job_name: '',
            label1: (h) => {
                return h('div', [
                    h('span', '在线中'),
                    h('Badge', {
                        props: {
                            count: 3
                        }
                    })
                ])
            },
            label2: (h) => {
                return h('div', [
                    h('span', '已下线'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            label3: (h) => {
                return h('div', [
                    h('span', '未上线'),
                    h('Badge', {
                        props: {
                            count: 4
                        }
                    })
                ])
            },
            columns7: [
                {
                    title: '岗位名称',
                    key: 'jobName',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', [
                                h('a', {
                                    props: {
                                        href: '#'
                                    }
                                }, params.row.jobName)
                            ])
                        ]);
                    }
                },
                {
                    title: '岗位数量',
                    key: 'jobNumber',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.jobNumber + '人')
                        ]);
                    }
                },
                {
                    title: '发布日期',
                    key: 'jobDate'

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
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    jobName: 'java开发',
                    jobNumber: 18,
                    jobDate: '2018-01-01'
                },
                {
                    jobName: '前端开发',
                    jobNumber: 24,
                    jobDate: '2018-01-01'
                },
                {
                    jobName: '大数据',
                    jobNumber: 30,
                    jobDate: '2018-01-01'
                }
            ]
        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
