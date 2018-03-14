<style lang="less">
@import './styles/resume_post_record.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <div class="mr_myresume_l">
                            <div class="main-cont clearfix">
                                <!-- <div class="top-fn clearfix">
                                    <div class="s clearfix">
                                        <input v-model="job_name" placeholder="输入职位名搜索"></input>
                                        <a class="s-btn" href="javascript:;">
                                            <i class="ico ico-search">搜索</i>
                                        </a>
                                    </div>
                                </div> -->
                                <div class="jobTabs">
                                    <a class="fs18 jobTab on" href="javascript:;" data-tab="manage">我的投递</a>
                                </div>
                                <div class="jobListWrap" style="display: block;">
                                    <resume-table></resume-table>
                                </div>
                            </div>
                        </div>
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
import resumeTable from './components/resume_table.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'user_resume_post_record',
    components: {
        resumeTable,
        // resume,
        footerDiv
    },
    data () {
        isShowSteps: false;
        return {

        };
    },
    computed: {

    },
    methods: {
        handlePush (name) {
            this.$router.push({
                name: name
            })
        },
        showSteps: function () {
            this.isShowSteps = !this.isShowSteps
        }

    },
    mounted () {

    }
};
</script>
