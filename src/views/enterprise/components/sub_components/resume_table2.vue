<style lang="less">
@import './styles/resume_table2.less';
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
    name: 'enterprise_resume_resumeTable',
    data () {
        return {
            name1: 'name1',
            name2: 'name2',
            name3: 'name3',
            name4: 'name4',
            url: 'http://localhost:8081/resume_post_record/manageResume?enterpriseId=1&state=2',
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
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '15px'
                                },
                                on: {
                                    click: () => {
                                        let id = params.row.resume_post_record_id;
                                        let url = 'http://localhost:8081/resume_post_record/manageResume?id=' + id + '&state=3';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已邀请');
                                            })
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
            ]
        };
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'Job Info',
                content: `序号：${this.data[index].num}<br>投递时间：${this.data[index].repostTime}<br>投递岗位: ${this.data[index].jobName}<br>学历: ${this.data[index].education}`
            })
        },
        remove (index) {
            this.data.splice(index, 1);
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
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            this.tableData1 = this.mockTableData1();
        }

    },
    computed: {

    },
    mounted () {
        this.$axios.get(this.url)
            .then(response => {
                this.data = response.data.rows;
            })
    }
};
</script>
