<style lang="less">
@import './styles/resume_table1.less';
</style>

<template>
    <div>
        <Table border stripe :columns="columns" :data="data"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px"></Page>
            </div>
        </div>
        <Modal v-model="modal" width="600">
            <p slot="header" style="color:#348EED;text-align:center">
                <Icon type="information-circled"></Icon>
                <span>简历信息</span>
            </p>
            <div style="text-align:center;font-size:16px;">
                <span>
                    <Avatar icon="person" :src="resumeObj.personPhoto" size="large"></Avatar><br><br></span>
                <span>姓名：{{this.resumeObj.userName}}<br><br></span>
                <span>性别：{{this.resumeObj.sex}}<br><br></span>
                <span>电话: {{this.resumeObj.telephone}}<br><br></span>
                <span>籍贯: {{this.resumeObj.nativePlace}}<br><br></span>
                <span>联系地址: {{this.resumeObj.communicationAddress}}<br><br></span>
                <span>电子邮件: {{this.resumeObj.email}}<br><br></span>
                <span>毕业院校: {{this.resumeObj.graduatedSchool}}<br><br></span>
                <span>专业: {{this.resumeObj.profession}}<br><br></span>
                <span>教育程度: {{this.resumeObj.education}}<br><br></span>
                <span>获得奖项: {{this.resumeObj.reward}}<br><br></span>
                <span>自我评价: {{this.resumeObj.selfEvaluation}}<br><br></span>
            </div>
            <div slot="footer">
                <Button type="primary" long @click="modal = false">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import util from '@/libs/util.js'
export default {
    props: ['message'],
    name: 'enterprise_resume_resumeTable',
    data () {
        return {
            url: 'http://localhost:8081/resume_post_record/manageResume',
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
                                        this.show(params.row.resume_id);
                                    }
                                }
                            }, '查看简历'),
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
                                        let url = 'http://localhost:8081/resume_post_record/manageResume?id=' + id + '&state=2';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已通过');
                                                // splice params: index, len, result
                                                this.data.splice(params.index, 1);
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
                                                this.data.splice(params.index, 1);
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
            let enterpriseId = 1;
            let url = this.url + '?enterpriseId=' + enterpriseId + '&state=1';
            url += '&pageNumber=' + this.page.current + '&pageSize=' + this.page.pageSize;
            return url;
        },
        init () {
            this.buildUrl();
            this.$axios.get(this.buildUrl())
                .then(response => {
                    this.data = response.data.rows;
                    this.page.current = response.data.pageNum;
                    this.page.pageSize = response.data.pageSize;
                    this.page.total = response.data.total;
                })
        },
        show (id) {
            this.resumeObj = {};
            this.$axios.get('http://localhost:8081/resume/' + id)
                .then(response => {
                    this.resumeObj = response.data;
                    if (this.resumeObj.personPhoto === '没照片')
                        this.resumeObj.personPhoto = '';
                })
            this.modal = true;
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
