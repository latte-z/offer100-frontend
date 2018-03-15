<style lang="less">
@import './styles/jobs.less';
</style>
<template>
    <div class="main-wrapper">
        <div class="detailheader">
            <Row class="detailheader-wrapper">
                <Col span="8" class="detailheader-left">
                <Row class="company" style="font-size:14px;">{{job.enterprise}}招聘</Row>
                <Row style="font-size:36px;">{{job.title}}</Row>
                <Row style="font-size:18px;">
                    {{job.wage/1000 + 'k'}} / {{job.address}} / {{job.serviceYear != '无' ? '经验' + job.serviceYear + '年' : job.serviceYear}} / {{job.education}}
                </Row>
                <Row>
                    <Col>
                    <span>{{job.nature}}</span>
                    </Col>
                </Row>
                <Row style="padding-top:10px;font-size:14px;color:#999;">
                    发布时间：{{job.effectiveTime}}
                </Row>
                </Col>
                <Col span="6" offset="10" class="detailheader-right">
                <Row style="margin-top:50px;">
                    <Button @click="favorite" type="primary" icon="star" size="large">收藏</Button>
                    <Button @click="sendResume" type="primary" size="large">投个简历</Button>
                </Row>
                </Col>
            </Row>
        </div>
        <Row class="detailcontent">
            <Col span="18" style="box-shadow: 5px 0 5px -5px rgba(100, 100, 100, 1);padding: 30px 50px 50px 100px;margin-left:100px;width:60%;">
            <p>
                <div v-html="job.description">
                </div>
            </p>
            </Col>
            <Col span="6" style="padding:30px;">
            <Row type="flex" justify="start" align="bottom">
                <Col span="12">
                <Avatar icon="briefcase" :src="enterprise.imageLog" shape="square" style="width:100px;height:100px;" />
                </Col>
                <Col span="8">
                <span style="font-size: 18px;color: #555;">{{job.enterprise}}</span>
                </Col>
            </Row>
            <Row style="margin-top:30px;margin-left:5px;color: #737373;">
                <Icon type="ionic" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">{{job.nature}}</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="arrow-graph-up-right" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">{{job.welfare}}</span>
            </Row>
            <!-- <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="social-usd" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">红杉资本</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="person" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">150-200人</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="home" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">www.baidu.com</span>
            </Row> -->
            </Col>
        </Row>
        <Row>
            <footerDiv></footerDiv>
        </Row>
        <Modal v-model="modal" :loading="loading" title="是否确认递交简历？" @on-ok="send">
            <p>请确认提交简历</p>
        </Modal>
    </div>
</template>
<script>
import footerDiv from '@/views/main-components/footer/footer.vue';
import util from '@/libs/util.js';
export default {
    name: 'jobs',
    components: {
        footerDiv,
    },
    data () {
        return {
            index: 0,
            jobUrl: '/job/',
            enterpriseUrl: '/enterprise/',
            modal: false,
            loading: true,
            resumeid: 0,
            job: {
                id: '',
                enterprise: '',
                enterpriseId: '',
                title: '',
                wage: '',
                address: '',
                serviceYear: '',
                education: '',
                nature: '',
                welfare: '',
                effectiveTime: '',
                description: ''
            },
            enterprise: {
                imageLog: ''
            }
        };
    },
    computed: {

    },
    methods: {
        init () {
            this.index = this.$route.params.job_id;
            this.enterpriseId = localStorage.getItem('userid');
            this.getJob();
        },
        getJob () {
            this.$axios.get(this.jobUrl + this.index)
                .then(response => {
                    this.job = response.data;
                    this.job.effectiveTime = util.longToDate(this.job.effectiveTime);
                    let content = this.job.description;
                    content = content.replace(/\r\n/g, "<br>");
                    this.job.description = content;
                    this.$axios.get(this.enterpriseUrl + this.job.enterpriseId)
                        .then(response => {
                            this.enterprise = response.data;
                        })
                });
        },
        sendResume () {
            if (localStorage.getItem('userid')) {
                this.$axios.get('/resume/getResumeList/' + localStorage.getItem('userid') + '?pageNumber=1&pageSize=10')
                    .then(response => {
                        let rows = response.data.rows;
                        let row = rows[0];
                        this.resumeid = row.id;
                    })
                    .catch(error => {
                        this.$Message.info('您没有简历信息')
                    })
                this.modal = true;
            } else {
                this.$Message.error('您没有登录，无法进行操作');
            }
        },
        send () {
            this.$axios.get('/resume_post_record/getSuccessMail/' + localStorage.getItem('userid') + '/' + this.resumeid + '/' + this.job.id)
                .then(response => {
                    this.$Message.info('投递成功')
                    this.loading = false;
                    this.modal = false;
                })
        },
        favorite () {
            let postData = {
                "jobId": this.job.id,
                "userId": localStorage.getItem('userid')
            }
            this.$axios.post('/Receive', postData)
                .then(response => {
                    if (response.data === true)
                        this.$Message.info('收藏成功')
                    else 
                        this.$Message.error('请不要重复收藏')
                })
        }
    },
    mounted () {
        this.init();
    }
};
</script>
