<style lang="less">
@import './enterprise.less';
</style>

<template>
    <div class="row-wrapper">
        <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
            <div class="container clearfix">
                <div class="clearfixs mr_created">
                    <qualification class="mr_myresume_l"></qualification>
                    <main-navbar></main-navbar>
                </div>
            </div>
        </Row>
    </div>
</template>

<script>
import mainNavbar from './components/main-navbar.vue'
import qualification from './components/qualification.vue'
export default {
    name: 'enterprise_index',
    components: {
        mainNavbar,
        qualification
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
