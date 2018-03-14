<style lang="less">
@import './styles/resume_table.less';
</style>

<template>
    <div>
        <Table border stripe :columns="columns" :data="data"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js'
export default {
    props: ['message'],
    name: 'user_resume_post_table',
    data () {
        return {
            userid: '',
            state: 1,
            url: '/resume_post_record/manageResume?userId=',
            data: [],
            modal: false,
            resumeObj: {},
            page: {
                current: 1,
                total: 0,
                pageSize: 10,
                pageSizeOpts: [10, 20, 30],
            },
            columns: [
                {
                    title: '序号',
                    key: 'num',
                    width: 100,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.job_id)
                        ]);
                    }
                },
                {
                    title: '投递时间',
                    key: 'repostTime',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, util.longToDate(params.row.posttime))
                        ]);
                    }
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
                            }, params.row.title)
                        ]);
                    }
                },
                {
                    title: '状态',
                    key: 'state',
                    align: 'center',
                    render: (h, params) => {
                        let state = '';
                        switch (params.row.state) {
                            case 1: state = '已投递'; break;
                            case 2: state = '待沟通'; break;
                            case 3: state = '已邀请'; break;
                            case 4: state = '已拒绝'; break;
                        }
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, state)
                        ]);
                    }
                },
            ],
        };
    },
    methods: {
        buildUrl () {
            this.userid = localStorage.getItem('userid');
            this.url += this.userid + '&state=' + this.state + '&pageNumber=1&pageSize=10';
            return this.url;
        },
        init () {
            this.$axios.get(this.buildUrl())
                .then(response => {
                    this.data = response.data.rows;
                    this.page.current = response.data.pageNum;
                    this.page.pageSize = response.data.pageSize;
                    this.page.total = response.data.total;
                })
        },
        pageChange (page) {
            this.page.current = page;
            this.init();
        },
        pageSizeChange (pageSize) {
            this.page.pageSize = pageSize;
            this.init();
        }
    },
    mounted () {
        this.init();
    },
    computed: {

    }
};
</script>
