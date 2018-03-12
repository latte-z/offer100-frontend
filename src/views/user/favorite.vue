<style lang="less">
    @import '../../styles/common.less';
    @import './styles/favorite.less';
</style>
<template>
    <div id="container">
        <div class="clearfix">
            <div class="new_section">
                <dl class="c_collections">
                    <dt>
                        <h1>我收藏的职位</h1>
                    </dt>
                        <Form id="collectionsForm">
                            <ul class="reset my_collections">
                                <li>
                                    <div style="background:#eee;">
                                        <Card :bordered="false">
                                            <p slot="title">
                                                <a href="#" style="color:#0d9572">
                                                    {{ favoriteJob.enterprise }}：{{ favoriteJob.title }}
                                                </a>
                                            </p>
                                            <a href="#">
                                                <em class="jobName" style="max-width: 200px;color: #0d9572">{{ favoriteJob.title }}</em>
                                                <span class="salary" style="color: #e6775c">({{ favoriteJob.wage }})</span>
                                            </a>
                                            <span class="co_time">发布时间：{{ favoriteJob.publishTime }}</span>
                                            <div class="co_cate">{{ favoriteJob.enterprise }} / {{ favoriteJob.zone }} / {{ favoriteJob.serviceYear }} / {{ favoriteJob.education }}</div>
                                            <span class="co_youhuo c7">{{ favoriteJob.welfare }}</span>
                                            <Button type="success">投个简历</Button>
                                            <Button type="error">删除本条</Button>
                                        </Card>
                                    </div>
                                </li>

                                <li data-id="3287644" data-company="128998">
                                    <div style="background:#eee;">
                                        <Card :bordered="false">
                                            <p slot="title">
                                                <a href="#">offer-100公司：Java工程师</a>
                                            </p>
                                            <a href="#">
                                                <em class="jobName" style="max-width: 200px;color:#3baf41">Java工程师</em>
                                                <span class="salary">（15k-30k）</span>
                                            </a>
                                            <span class="co_time">发布时间：2018-03-01 15:47</span>
                                            <div class="co_cate">offer-100 / 武汉 / 无 / 本科</div>
                                            <span class="co_youhuo c7">快速发展的业务和足够的技术挑战</span>
                                            <Button type="success">投个简历</Button>
                                            <Button type="error">删除本条</Button>
                                        </Card>
                                    </div>
                                </li>
                            </ul>
                        </Form>
                </dl>
            </div>

            <div class="content_r">
                <div class="collections_nav_button">
                    <div class="mr_r_nav">
                        <ul class="clearfix">
                            <li :class="[curPage === 'enterprise_index' ? curClass : '']">
                                <a  @click="handlePush('投递箱')" href="#">投递箱
                                    <i class="td"></i>
                                </a>                          
                            </li>                           
                            <li :class="[curPage === 'enterprise_index' ? curClass : '']">
                                <a @click="handlePush('user_resume')" href="#">我的简历
                                    <i class="sc"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style=" padding-top: 20px;margin-top: 80px;">
                    <Card :bordered="false">
                        <p slot="title">这是广告位</p>
                        <p>这免费为软酷网打的广告1</p>
                    </Card>
                </div>
                <div style="padding-top: 20px;margin-top: 80px;">
                    <Card :bordered="false">
                        <p slot="title">这是广告位</p>
                        <p>这免费为软酷网打的广告2</p>
                    </Card>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'user_favorite',
        data() {
            return {
                favoriteJob: {
                    enterprise: 'offer-100',
                    title: 'Java开发',
                    wage: '5K-10k',
                    publishTime: '2017-9-1',
                    zone: '武汉',
                    serviceYear: '不限',
                    education: '本科以上',
                    welfare: '五险一金'
                }
            };
        },
        computed: {
            avatorPath() {

            }
        },
        methods: {
            handlePush(name) {
                this.$router.push({
                    name: name
                })
            }

        }
    };
</script>

<style>
</style>