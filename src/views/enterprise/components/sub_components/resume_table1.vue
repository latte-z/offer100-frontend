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
                <Row>
                    <span>
                        <Avatar icon="person" :src="resumeObj.personPhoto" size="large"></Avatar>
                    </span>
                </Row>
                <Row>
                    <span>姓名：{{this.resumeObj.userName}}</span>
                </Row>
                <Row>
                    <span>性别：{{this.resumeObj.sex}}</span>
                </Row>
                <Row>
                    <span>电话: {{this.resumeObj.telephone}}</span>
                </Row>
                <Row>
                    <span>籍贯: {{this.resumeObj.nativePlace}}</span>
                </Row>
                <Row>
                    <span>联系地址: {{this.resumeObj.communicationAddress}}</span>
                </Row>
                <Row>
                    <span>电子邮件: {{this.resumeObj.email}}</span>
                </Row>
                <Row>
                    <span>毕业院校: {{this.resumeObj.graduatedSchool}}</span>
                </Row>
                <Row>
                    <span>专业: {{this.resumeObj.profession}}</span>
                </Row>
                <Row>
                    <span>教育程度: {{this.resumeObj.education}}</span>
                </Row>
                <Row>
                    <span>获得奖项: {{this.resumeObj.reward}}</span>
                </Row>
                <Row>
                    <span>自我评价: {{this.resumeObj.selfEvaluation}}</span><br><br>
                </Row>
                <Row>
                    院校信息：{{this.education.schoolTitle}} 记录：{{this.education.note}} 时间：{{this.education.startTime}} - {{this.education.endTime}}<br><br>
                </Row>
                <Row>
                    工作信息：{{this.experience.job}} 项目：{{this.experience.projectName}} 描述：{{this.experience.projectDesc}} 时间：{{this.experience.startTime}} - {{this.experience.endTime}}
                </Row>

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
            url: '/resume_post_record/manageResume',
            data: [],
            modal: false,
            resumeObj: {},
            education: {},
            experience: {},
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
                                        let url = '/resume_post_record/manageResume?id=' + id + '&state=2';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已通过');
                                                // splice params: index, len, result
                                                this.data.splice(params.index, 1);
                                            })
                                        this.$axios.get('/resume_post_record/' + params.row.resume_id + '/' + localStorage.getItem('userid'));
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
                                        let url = '/resume_post_record/manageResume?id=' + id + '&state=4';
                                        this.$axios.put(url)
                                            .then(response => {
                                                this.$Message.info('已拒绝');
                                                this.data.splice(params.index, 1);
                                            })
                                        this.$axios.get('/resume_post_record/rejectMailNotify/' + params.row.resume_id + '/' + localStorage.getItem('userid'));
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
            let enterpriseId = localStorage.getItem('userid');
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
            this.$axios.get('/resume/getResumeVOByResumeId/' + id)
                .then(response => {
                    this.resumeObj = response.data;
                    console.log(this.resumeObj)
                    this.education = this.resumeObj.educations[0];
                    this.education.startTime = util.longToDate(this.education.startTime);
                    this.education.endTime = util.longToDate(this.education.endTime);
                    this.experience = this.resumeObj.projectExperiences[0];
                    this.experience.startTime = util.longToDate(this.experience.startTime);
                    this.experience.endTime = util.longToDate(this.experience.endTime);
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
