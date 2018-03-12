<style lang="less">
@import './news.less';
</style>

<template>
  <div>
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
    <Row>
      <footerDiv></footerDiv>
    </Row>
  </div>
</template>

<script>
import zoneCard from '@/views/main-components/zone-select/zone-select.vue'
import footerDiv from '@/views/main-components/footer/footer.vue';
import newsCard from './components/news-card.vue'
export default {
  name: 'information_index',
  components: {
    newsCard,
    footerDiv,
    zoneCard
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
      this.$axios.get(this.getUrl + '?has=' + this.news.length + '&next=5')
        .then(response => {
          // console.log(this.news)
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
