<style lang="less">
@import './result-card.less';
</style>

<template>
    <div class="s_position_list">
        <div class="con_list_item first_row default_list">
            <div class="list_item_top">
                <div class="position">
                    <div class="p_top">
                        <a class="position_link" @click="goDetail" target="_blank">
                            <h3 style="max-width: 180px;">{{job.title}}</h3>
                            <span class="add">[{{job.zone}}]</span>
                        </a>
                        <span class="format-time">{{job.publishDaysBefore}}</span>
                        <!-- <div class="chat_me"></div> -->
                    </div>
                    <div class="p_bot">
                        <div class="li_b_l">
                            <span class="money">{{wage}}</span>
                            <!--<i></i>-->{{serviceYear}} / {{job.education}}
                        </div>
                    </div>
                </div>
                <div class="company">
                    <div class="company_name">
                        <a @click="goDetail2" target="_blank">{{job.enterprise}}</a>
                        <Tooltip content="该企业已通过认证">
                            <i class="company_mark">
                            </i>
                        </Tooltip>
                    </div>
                    <div class="industry">
                        {{job.enterpriseCategory}} / 在招{{job.peopleNumber}}人
                    </div>
                </div>
                <div class="com_logo">
                    <a href="#" target="_blank"><img :src="job.enterpriseLogo" :alt="job.enterprise" width="60" height="60"></a>
                </div>
            </div>
            <div class="list_item_bot">
                <div class="li_b_l">
                    <span v-for="(cy,index) in job.category">{{cy}}</span>
                </div>
                <div class="li_b_r">{{job.welfare}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'result-card',
    props: ['message'],
    data () {
        return {
            job: {
                id: '',
                enterprise: '',
                title: '',
                nature: '',
                zone: '',
                enterpriseId: '',
                category: [],
                wage: '',
                education: '',
                enterpriseLogo: '',
                rank: '',
                publishDaysBefore: '',
                serviceYear: '',
                enterpriseCategory: '',
                welfare: '',
                peopleNumber: '',
                key: ''
            },
            wage: '',
            serviceYear: ''
        };
    },
    computed: {

    },
    methods: {
        init () {
            this.job = this.message;
            this.handleData();
        },
        handleData () {
            this.wage = this.job.wage / 1000 + 'k';
            if (this.job.serviceYear === 0) {
                this.serviceYear = '无经验限制';
            } else {
                this.serviceYear = '要求' + this.job.serviceYear + '年经验';
            }
        },
        goDetail () {
            let argu = { job_id: this.job.id };
            localStorage.setItem('recentJobid', this.job.id);
            localStorage.setItem('recentJobtitle', this.job.title);
            localStorage.setItem('recentJobwage', this.job.wage);
            this.$router.push({
                name: 'jobs',
                params: argu
            });
        },
        goDetail2 () {
            let argu = { company_id: this.job.enterpriseId };
            this.$router.push({
                name: 'companys',
                params: argu
            });
        }
    },
    mounted () {
        this.init()
    }
};
</script>

<style>

</style>
