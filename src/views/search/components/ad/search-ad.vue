<style lang="less">
@import './search-ad.less';
</style>

<template>
    <div class="lgad_container">
        <!--广告位-->
        <div class="lgad_jsonp" style="margin-bottom: 15px;" v-for="obj in ad" :key="ad.index">
            <a href="#" target="_blank" rel="nofollow"><img :src="obj"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search_ad',
    props: [

    ],
    data () {
        return {
            url: 'http://localhost:8081/mainpage/getAdImage?location=search',
            ad: []
        };
    },
    computed: {

    },
    methods: {

    },
    mounted () {
        this.$axios.get(this.url)
            .then(response => {
                this.ad = Object.keys(response.data)
            })
    }
};
</script>

<style>

</style>
