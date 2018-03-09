<style lang="less">
@import './styles/jobs.less';
</style>
<template>
    <div class="main-wrapper">
        <div class="detailheader">
            <Row class="detailheader-wrapper">
                <Col span="8" class="detailheader-left">
                <Row class="company" style="font-size:14px;">洋葱数学设计招聘</Row>
                <Row style="font-size:36px;">UI设计师</Row>
                <Row style="font-size:18px;">
                    10K-20K / 北京 / 经验1-3年 / 学历不限 / 全职
                </Row>
                <Row>
                    <Col>
                    <span>游戏</span>
                    </Col>
                </Row>
                <Row style="padding-top:10px;font-size:14px;color:#999;">
                    发布时间：12:24
                </Row>
                </Col>
                <Col span="6" offset="10" class="detailheader-right">
                <Row style="margin-top:50px;">
                    <Button type="primary" icon="star" size="large">收藏</Button>
                    <Button type="primary" size="large">投个简历</Button>
                </Row>
                </Col>
            </Row>
        </div>
        <Row class="detailcontent">
            <Col span="18" style="box-shadow: 5px 0 5px -5px rgba(100, 100, 100, 1);padding:30px;margin-left:100px;width:696px;"> aoisdnasoidnasodinasoidnasoindsoianoa
            <br> adioasndoasiasdasd
            <br> a
            <br> shadowasd
            <br> as
            <br> d
            <br> a
            <br>
            </Col>
            <Col span="6" style="padding:30px;">
            <Row type="flex" justify="start" align="bottom">
                <Col span="12">
                <Avatar icon="briefcase" src="" shape="square" style="width:100px;height:100px;" />
                </Col>
                <Col span="8">
                <span style="font-size: 18px;color: #555;">洋葱数学</span>
                </Col>
            </Row>
            <Row style="margin-top:30px;margin-left:5px;color: #737373;">
                <Icon type="ionic" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">移动互联网，教育</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
                <Icon type="arrow-graph-up-right" size="20"></Icon>
                <span style="font-size:20px;margin-left:30px;">C轮</span>
            </Row>
            <Row style="margin-top:10px;margin-left:5px;color: #737373;">
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
            </Row>
            </Col>
        </Row>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>
</template>
<script>
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'jobs',
    components: {
        footerDiv
    },
    data () {
        return {

        }
    },
    computed: {

    },
    methods: {
        init () {
            let index = this.$route.params.job_id;
        }

    },
    mounted () {
        this.init();
    },
    activated () {
        this.init();
    }
}
</script>
