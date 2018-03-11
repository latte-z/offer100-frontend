<style lang="less">
@import './job.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <job class="mr_myresume_l"></job>
                        <main-navbar></main-navbar>
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
import job from './components/job.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_job',
    components: {
        mainNavbar,
        job,
        footerDiv
    },
    data () {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
