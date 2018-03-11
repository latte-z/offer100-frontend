<style lang="less">
@import './news.less';
</style>

<template>
  <div class="inner">
    <div class="list-news">
      <div v-for="obj in news">
        <news-card :message="obj"></news-card>

      </div>
      <div class="page">
        <a @click="getNews" class="load-more">浏览更多</a>
      </div>

    </div>
  </div>
</template>

<script>
import newsCard from './components/news-card.vue'
export default {
  name: 'information_index',
  components: {
    newsCard
  },
  data () {
    return {
      has: 0,
      getUrl: 'http://localhost:8081/news',
      news: []
    };
  },
  methods: {
    init () {
      this.getNews();
    },
    getNews () {
      this.$axios.get(this.getUrl + '?pageNum=' + (parseInt(this.news.length / 5) + 1) + '&next=5')
        .then(response => {
            console.log(this.news)
            response.data.forEach(element => {
              this.news.push(element)
            });
        })
    }
  },
  computed: {

  },
  mounted () {
    this.init();
  }
};
</script>
