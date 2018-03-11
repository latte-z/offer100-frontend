<style lang="less">
@import './styles/companys.less';
</style>
<template>
    <div class="main-wrapper">
        <div class="detailheader">
            <Row class="detailheader-wrapper">
                <Col span="8" class="detailheader-left">
                <!-- <Row class="company" style="font-size:14px;">{{enterprise.enterprise}}</Row> -->
                <Row style="font-size:36px;">{{enterprise.name}}</Row>
                <Row style="font-size:18px;">
                    {{enterprise.address}} / {{'联系人:' + enterprise.linkman}}
                </Row>
                <!-- <Row>
                    <Col>
                    <span>{{}}</span>
                    </Col>
                </Row> -->
                <Row style="padding-top:10px;font-size:14px;color:#999;">
                    发布时间：{{enterprise.createTime}}
                </Row>
                </Col>
                <Col span="6" offset="10" class="detailheader-right">
                <Row style="margin-top:50px;">
                    <Button type="primary" icon="star" size="large">收藏</Button>
                    <!-- <Button type="primary" size="large">投个简历</Button> -->
                </Row>
                </Col>
            </Row>
        </div>
        <Row class="detailcontent">
            <Col span="18" style="box-shadow: 5px 0 5px -5px rgba(100, 100, 100, 1);padding:30px;margin-left:100px;width:696px;">
            <p>
                <div v-html="enterprise.description">
                </div>
            </p>
            </Col>
            <Col span="6" style="padding:30px;">
            <Row type="flex" justify="start" align="bottom">
                <Col span="12">
                <Avatar icon="briefcase" :src="enterprise.imageLog" shape="square" style="width:100px;height:100px;" />
                </Col>
                <!-- <Col span="8">
                <span style="font-size: 18px;color: #555;">{{enterprise.phone}}</span>
                </Col> -->
            </Row>
            <Row style="margin-top:30px;margin-left:5px;color: #737373;">
                <Icon type="ionic" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">{{enterprise.name}}</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="arrow-graph-up-right" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">已上市</span>
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
    </div>
</template>
<script>
import footerDiv from '@/views/main-components/footer/footer.vue';
import util from '@/libs/util.js'
export default {
    name: 'companys',
    components: {
        footerDiv,
    },
    data () {
        return {
            index: 0,
            enterpriseUrl: 'http://localhost:8081/enterprise/',
            enterprise: {
                id: '',
                name: '',
                userName: '',
                userPassword: '',
                email: '',
                address: '',
                linkman: '',
                phone: '',
                industryId: '',
                zoneId: '',
                createTime: '',
                updateTime: '',
                state: '',
                imageLog: '',
                imageLicense: '',
                description: '',
                stage: '',
            }
        };
    },
    computed: {

    },
    methods: {
        init () {
            // 记录跳转前的公司id
            this.index = this.$route.params.company_id;
            this.getEnterprise();
        },
        getEnterprise () {
            this.$axios.get(this.enterpriseUrl + this.index)
                .then(response => {
                    this.enterprise = response.data;
                    this.enterprise.createTime = util.longToDate(this.enterprise.createTime);
                    this.enterprise.linkman = this.enterprise.linkman.substring(0,1) + '先生';
                })
        }
    },
    mounted () {
        this.init();
    }
};
</script>
