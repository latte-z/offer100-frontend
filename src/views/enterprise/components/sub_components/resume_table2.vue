<style lang="less">
@import './styles/resume_table2.less';
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
    name: 'enterprise_resume_resumeTable',
    data () {
        return {
            name1: 'name1',
            name2: 'name2',
            name3: 'name3',
            name4: 'name4',
            url: '/resume_post_record/manageResume?enterpriseId=' + localStorage.getItem('userid') + '&state=2&pageNumber=1&pageSize=10',
            data: [],
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
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '15px'
                                },
                                on: {
                                    click: () => {
                                        let id = params.row.resume_post_record_id;
                                        let url = '/resume_post_record/manageResume?id=' + id + '&state=3';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已邀请');
                                                this.data.splice(params.index, 1);
                                            })
                                        this.$axios.get('/resume_post_record/getResumeMail/' + params.row.resume_id + '/' + localStorage.getItem('userid') + '/' + params.row.job_id);
                                    }
                                }
                            }, '发送邀请'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let id = params.row.resume_post_record_id;
                                        let url = '/resume_post_record/manageResume?id=' + id + '&state=4';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已拒绝');
                                                this.data.splice(params.index, 1);
                                            })
                                        this.$axios.get('/resume_post_record/getReturnMail/' + params.row.resume_id + '/' + localStorage.getItem('userid') + '/' + params.row.job_id);
                                    }
                                }
                            }, '不合适')
                        ]);
                    }
                }
            ]
        };
    },
    methods: {
        buildUrl () {
            let enterpriseId = localStorage.getItem('userid');
            let url = this.url + '?enterpriseId=' + enterpriseId + '&state=2';
            url += '&pageNumber=' + this.page.current + '&pageSize=' + this.page.pageSize;
            return url;
        },
        init () {
            this.buildUrl();
            this.$axios.get(this.url)
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
    computed: {

    },
    mounted () {
        this.init();
    }
};
</script>
