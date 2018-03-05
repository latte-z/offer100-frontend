<style lang="less">
@import './enterprise.less';
</style>

<template>
    <div class="row-wrapper">
        <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
            <div class="container clearfix">
                <div class="clearfixs mr_created">
                    <div class="mr_myresume_l"></div>
                    <main-navbar></main-navbar>
                </div>
            </div>
        </Row>
    </div>
</template>

<script>
import mainNavbar from './components/main-navbar.vue'
export default {
    name: 'enterprise_index',
    components: {
        mainNavbar
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
