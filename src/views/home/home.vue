<style lang="less">
@import './home.less';
@import '../../styles/common.less';
</style>
<template>
    <div>
        
    </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
        
    }
  },
  computed: {
    avatorPath() {
      return localStorage.avatorImgPath
    }
  },
  methods: {
    init() {
      this.userName = localStorage.getItem('username')
    }
  },
  mounted() {
    this.init()
  }
}
</script>
