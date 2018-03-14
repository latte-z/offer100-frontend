<style lang="less">
@import './styles/resume_table4.less';
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
            url: '/resume_post_record/manageResume?enterpriseId=' + localStorage.getItem('userid') + '&state=4&pageNumber=1&pageSize=10',
            data: [],
            name1: 'name1',
            name2: 'name2',
            name3: 'name3',
            name4: 'name4',
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
                // {
                //     title: '操作',
                //     key: 'action',
                //     width: 300,
                //     align: 'center',
                //     render: (h, params) => {
                //         return h('div', [
                //             h('Button', {
                //                 props: {
                //                     type: 'error',
                //                     size: 'small'
                //                 },
                //                 on: {
                //                     // click: () => {
                //                     //     this.remove(params.index)
                //                     // }
                //                 }
                //             }, '删除')
                //         ]);
                //     }
                // }
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
