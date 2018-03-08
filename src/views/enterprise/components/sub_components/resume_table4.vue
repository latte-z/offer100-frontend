<style lang="less">
@import './styles/resume_table4.less';
</style>

<template>
    <div>
        <Table border stripe :columns="columns" :data="data" ></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enterprise_resume_resumeTable',
    
    data () {
        return {
            name1: 'name1',
            name2: 'name2',
            name3: 'name3',
            name4: 'name4',
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
            // data6: this.mockTableData1()
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

    }
};
</script>
