<style lang="less">
@import './resume.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <resume class="mr_myresume_l"></resume>
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
import resume from './components/resume.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'enterprise_resume',
    components: {
        mainNavbar,
        resume,
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
