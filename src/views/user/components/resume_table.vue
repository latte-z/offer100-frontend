<style lang="less">
@import './styles/resume_table.less';
</style>

<template>
    <div>
        <Table border stripe :columns="columns" :data="data"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="10" :current="1"></Page>
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
            enterpriseId: 1,
            state: 1,
            url: 'http://localhost:8081/resume_post_record/manageResume?enterpriseId=',
            data: [],
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
                        return h('div', [
                            h('i', {
                                style: {
                                    cursor: 'default'
                                }
                            }, params.row.state)
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
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '15px'
                                },
                                on: {
                                    click: () => {
                                        let id = params.row.resume_post_record_id;
                                        let url = 'http://localhost:8081/resume_post_record/manageResume?id=' + id + '&state=2';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已通过');
                                            })
                                    }
                                }
                            }, '筛选通过'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        let id = params.row.resume_post_record_id;
                                        let url = 'http://localhost:8081/resume_post_record/manageResume?id=' + id + '&state=4';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已拒绝');
                                            })
                                    }
                                }
                            }, '不合适')
                        ]);
                    }
                }
            ],
        };
    },
    methods: {
        buildUrl () {
            this.url += this.enterpriseId + '&state=' + this.state + '&pageNumber=1&pageSize=10';
            return this.url;
        },
        init () {
            this.$axios.get(this.buildUrl())
                .then(response => {
                    this.data = response.data.rows;
                })
        },
        show (index) {
            this.$Modal.info({
                title: 'Job Info',
                content: `序号：${this.data[index].num}<br>投递时间：${this.data[index].repostTime}<br>投递岗位: ${this.data[index].jobName}<br>学历: ${this.data[index].education}`
            })
        },
        remove (index) {
            this.data.splice(index, 1);
        },

    },
    mounted () {
        this.init();
    },
    computed: {

    }
};
</script>
