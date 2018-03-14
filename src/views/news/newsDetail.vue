<style lang="less">
@import './news.less';
</style>

<template>
  <div>
    <div style="max-width: 1100px;margin: 0 auto;">
      <div class="detail-content">
        <h1 class="title">{{news.title}}</h1>
        <Row class="info">
            <span class="time">{{news.time}}</span>
          <p></p>
        </Row>
        <div class="content">
          <span v-html="news.context">
            
          </span>

        </div>
      </div>
    </div>
    <Row>
      <footerDiv></footerDiv>
    </Row>
  </div>
</template>

<script>
import util from '@/libs/util.js'
import footerDiv from '@/views/main-components/footer/footer.vue';
export default {
  name: 'news_detail',
  components: {
    footerDiv
  },
  data () {
    return {
      params: '',
      getUrl: '/news/',
      news: {
        id: 0,
        title: '',
        abstruct: '',
        mainImage: '',
        time: '',
        context: ''
      },
      hasTransTime: true
    };
  },
  methods: {
    init () {
      this.params = this.$route.params
      this.getNews()
    },
    getNews () {
      this.$axios.get(this.getUrl + this.params.newsId)
        .then(response => {
          this.news = response.data
          this.news.time = util.longToDate(this.news.time)
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
