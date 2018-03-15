<style lang="less">
@import '../../styles/common.less';
@import './styles/favorite.less';
</style>
<template>
    <div class="banner">
        <Row style="width:1200px;margin:0 auto">
            <Tabs value="hotjobs">
                <TabPane label="收藏职位" icon="fireball" name="hotjobs">
                    <Row :gutter="5">
                        <Col :md="24" :lg="8">
                        <Row :gutter="5">
                            <div v-for="(job,index) in rows" v-if="index === 0 || index === 3 || index === 6" style="padding:5px">
                                <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                            </div>
                        </Row>
                        </Col>
                        <Col :md="24" :lg="8">
                        <Row :gutter="5">
                            <div v-for="(job,index) in rows" v-if="index === 1 || index === 4 || index === 7" style="padding:5px">
                                <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                            </div>
                        </Row>
                        </Col>
                        <Col :md="24" :lg="8">
                        <Row :gutter="5">
                            <div v-for="(job,index) in rows" v-if="index === 2 || index === 5 || index === 8" style="padding:5px">
                                <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                            </div>
                        </Row>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </Row>
        <Page @on-change="pageChange" @on-page-size-change="pageSizeChange" placement="top" :current="page.current" :total="page.total" :page-size="page.pageSize" :page-size-opts="page.pageSizeOpts" show-total show-sizer style="text-align:center;margin-top:50px;margin-bottom:50px;"></Page>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>
</template>

<script>
import jobsCard from '@/views/main-components/jobs-card/jobs-card.vue';
import footerDiv from '@/views/main-components/footer/footer.vue'
export default {
    name: 'user_favorite',
    components: {
        footerDiv,
        jobsCard
    },
    data () {
        return {
            rows: [],
            page: {
                current: 1,
                total: 0,
                pageSize: 9,
                pageSizeOpts: [9, 18, 27],
            }
        };
    },
    computed: {
    },
    methods: {
        init () {
            this.handleSubmit();
        },
        handleSubmit () {
            this.rows = [];
            let getUrl = '/Receive?pageNumber=' + this.page.current + '&pageSize=' + this.page.pageSize + '&userId=';
            this.$axios.get(getUrl + localStorage.getItem('userid'))
                .then(response => {
                    this.page.total = response.data.total;
                    this.page.current = response.data.pageNum;
                    this.page.pageSize = response.data.pageSize;
                    this.rows = response.data.rows;
                    console.log(this.rows)
                })
        },
        pageChange (page) {
            this.page.current = page;
            this.handleSubmit();
        },
        pageSizeChange (pageSize) {
            this.page.pageSize = pageSize;
            this.handleSubmit();
        }
    },
    mounted () {
        this.init();
    }
};
</script>

<style>

</style>