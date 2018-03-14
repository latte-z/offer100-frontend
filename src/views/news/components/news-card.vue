<style lang="less">
@import '../news.less';
</style>

<template>
    <div class="list-news">
        <div class="img-wrap">
            <a @click="goDetail" ka="article-list-img-detail1" target="_blank" class="img" title="为什么从来没有人告诉我该这样跳槽？！"><img :src="news.mainImage" alt=""></a>
        </div>
        <div class="text">
            <p class="text-title">
                <a @click="goDetail" ka="article-list-title-detail1" target="_blank">{{news.title}}</a>
            </p>
            <p class="summary">{{news.abstruct}}</p>
            <div class="info">
                <span class="">{{transTime}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js'
export default {
    name: 'news_card',
    props: ['message'],
    components: {
    },
    data () {
        return {
            getUrl: '/news',
            news: {
                id: 0,
                title: '',
                abstruct: '',
                mainImage: '',
                time: '',
                context: ''
            }
        };
    },
    methods: {
        init () {
            this.news = this.message;
        },
        goDetail () {
            let argu = {
                newsId: this.news.id,
                title: this.news.title
            };
            // 解决route push无法新窗口打开
            let routeData = this.$router.resolve({
                name: 'news_detail',
                params: argu
            });
            window.open(routeData.href, '_blank');
        },

    },
    computed: {
        transTime: function () {
            return util.longToDate(this.news.time)
        }
    },
    mounted () {
        this.init();
    }
};
</script>
