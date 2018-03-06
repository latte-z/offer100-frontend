<style lang="less">
@import './styles/job_table.less';
</style>

<template>
    <div>
        <Table stripe :columns="columns7" :data="data6" ></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enterprise_job_jobTable',
    data () {
        return {
            columns7: [
                {
                    title: '岗位名称',
                    key: 'jobName',
                    render: (h, params) => {
                        return h('div', [
                            h('strong', [
                                h('a',{
                                    props: {
                                        href: '#'
                                    }
                                },params.row.jobName)
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
                            },params.row.jobNumber + '人')
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
            // data6: this.mockTableData1()
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
        show (index) {
            this.$Modal.info({
                title: 'Job Info',
                content: `jobName：${this.data6[index].jobName}<br>jobNumber：${this.data6[index].jobNumber}<br>jobDate: ${this.data6[index].jobDate}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    jobName: this.data6[i].jobName,
                    jobNumber: this.data6[i].jobNumber,
                    jobDate: this.data6[i].jobDate,
                   
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
