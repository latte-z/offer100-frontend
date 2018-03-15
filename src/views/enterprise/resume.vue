<style lang="less">
@import './resume.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <!-- <resume class="mr_myresume_l"></resume> -->
                        <div class="mr_myresume_l">
                            <div class="resume-container" style="display: block;">
                            <Tabs value="name1">
                                <TabPane label="已投递" name="name1">
                                    <!-- 简历表格 -->
                                    <resumeTable1></resumeTable1>
                                </TabPane>
                                <TabPane label="待沟通" name="name2">
                                    <resumeTable2></resumeTable2>
                                </TabPane>
                                <TabPane label="已邀请" name="name3">
                                    <resumeTable3></resumeTable3>
                                </TabPane>
                                <TabPane label="不合适" name="name4">
                                    <!-- <resume_table4></resume_table4> -->
                                    <resumeTable4></resumeTable4>
                                </TabPane>
                            </Tabs>
                        </div>
                        </div>
                        
                        <main-navbar :message="pageName"></main-navbar>
                    </div>
                </div>
            </Row>
        </div>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>
</template>

<script>
import mainNavbar from './components/main-navbar.vue'
// import resume from './components/resume.vue'
import resumeTable1 from './components/sub_components/resume_table1.vue'
import resumeTable2 from './components/sub_components/resume_table2.vue'
import resumeTable3 from './components/sub_components/resume_table3.vue'
import resumeTable4 from './components/sub_components/resume_table4.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_resume',
    components: {
        mainNavbar,
        resumeTable1,
        resumeTable2,
        resumeTable3,
        resumeTable4,
        // resume,
        footerDiv
    },
    data () {
        return {
            pageName: 'resume',
        };
    },
    methods: {
    },
    computed: {

    },
    mounted () {
    }
};
</script>
