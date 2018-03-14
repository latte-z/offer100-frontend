<style lang="less">
@import './jobadd.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <div class="post-cont mr_myresume_l">
                            <div class="group-box">
                                <Form ref="formValidate1" :model="formValidate" :rules="ruleValidate" :label-width="170">
                                    <FormItem label="职位名称：" prop="jobName">
                                        <Input v-model="formValidate.jobName" style="width: 300px;"></Input>
                                    </FormItem>
                                    <FormItem label="职位性质：" prop="jobProp">
                                        <RadioGroup v-model="formValidate.jobProp" type="button">
                                            <Radio label="全职" style="margin-right:10px;"></Radio>
                                            <Radio label="兼职" style="margin-right:5px;border-left:1px solid #dddee1"></Radio>
                                            <Radio label="实习" style="margin-right:5px;border-left:1px solid #dddee1"></Radio>
                                            <Radio label="校园" style="border-left:1px solid #dddee1"></Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem label="职位类别：" prop="jobCategory">
                                        <Cascader v-model="formValidate.jobCategory" :data="categoryData" change-on-select :render-format="CategoryFormat" style="width: 200px;"></Cascader>
                                    </FormItem>
                                    <FormItem label="职位月薪：" prop="jobSalary">
                                        <Select v-model="formValidate.jobSalary" ref="jobwage" style="width:150px">
                                            <Option value=1000>1000元以下</Option>
                                            <Option value=1500>1000-2000元</Option>
                                            <Option value=3000>2000-4000元</Option>
                                            <Option value=5000>4000-6000元</Option>
                                            <Option value=7000>6000-8000元</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="工作地区：" prop="jobZone">
                                        <Cascader v-model="formValidate.jobZone" :data="zoneData" :load-data="loadData" :render-format="zoneFormat" style="width: 200px;"></Cascader>
                                    </FormItem>
                                    <FormItem label="详细地址：" prop="jobAddress">
                                        <Input v-model="formValidate.jobAddress" style="width: 400px;"></Input>
                                    </FormItem>
                                    <FormItem label="发布时间：" prop="startTime">
                                        <DatePicker v-model="formValidate.startTime" value="" format="yyyy-MM-dd" type="date" placement="bottom-start" placeholder="Select date" style="width: 200px"></DatePicker>
                                    </FormItem>
                                    <FormItem label="失效时间：" prop="endTime" class="jobDuration">
                                        <DatePicker v-model="formValidate.endTime" value="" format="yyyy-MM-dd" type="date" placement="bottom-start" placeholder="Select date" style="width: 200px"></DatePicker>
                                    </FormItem>
                                </Form>
                            </div>
                            <div class="group-box">
                                <Form ref="formValidate2" :model="formValidate" :rules="ruleValidate" :label-width="170">
                                    <FormItem label="招聘人数：" prop="employeeNum">
                                        <Input v-model="formValidate.employeeNum" style="width:150px;" number></Input>
                                        <label for="">人</label>
                                    </FormItem>
                                    <FormItem label="学历要求：" prop="education">
                                        <Select v-model="formValidate.education" style="width:150px">
                                            <Option value="学历不限">学历不限</Option>
                                            <Option value="本科">本科</Option>
                                            <Option value="硕士">硕士</Option>
                                            <Option value="博士">博士</Option>
                                            <Option value="大专">大专</Option>
                                        </Select>
                                        <label for="">及以上</label>
                                    </FormItem>
                                    <FormItem label="工作年限：" prop="jobYear">
                                        <Select v-model="formValidate.jobYear" style="width:150px">
                                            <Option value="年限不限">年限不限</Option>
                                            <Option value="1年以下">1年以下</Option>
                                            <Option value="1-3年">1-3年</Option>
                                            <Option value="3-5年">3-5年</Option>
                                            <Option value="5年及以上">5年及以上</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="职位描述：" prop="jobDesc">
                                        <Input v-model="formValidate.jobDesc" type="textarea" :rows="7" placeholder="请输入职位描述" style="width:500px;"></Input>
                                    </FormItem>
                                    <FormItem label="福利待遇：" prop="welfare" style="font-size: 20px;">
                                        <Input v-model="formValidate.welfare" type="textarea" :rows="7" placeholder="请输入福利待遇" style="width:500px;"></Input>
                                    </FormItem>
                                </Form>
                            </div>
                            <div class="operate-btn">
                                <div ref="createJob">
                                    <Button type="primary" @click="handleSubmit()" size="large">发布职位</Button>
                                </div>
                                <div ref="modifyJob" style="display: none">
                                    <Button type="primary" @click="modifySubmit()" size="large">修改职位</Button>
                                </div>

                            </div>
                        </div>
                        <main-navbar></main-navbar>
                    </div>
                </div>
            </Row>
        </div>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>

</template>

<script>
import axios from 'axios'
import footerDiv from '@/views/main-components/footer/footer.vue'
import mainNavbar from './components/main-navbar.vue'
import qs from 'qs'
import index from 'vue';

export default {
    name: 'enterprise_jobadd',
    components: {
        footerDiv,
        mainNavbar
    },
    data () {
        return {
            // 岗位详情数据的存放
            job: {},
            jobaddUrl: '/job',
            submitMsg: '',
            submitStatus: '',
            //获取行业类别
            getCategoryUrl: '/industry/getAll',
            categoryData: [],

            //用当前地区id获取下一级的地区
            getZoneUrl: '/zone/getZoneByParentId/',
            zoneData: [],

            //查询岗位详情
            updateJobUrl: '/job/',

            formValidate: {
                jobName: '',
                jobProp: '',
                jobCategory: [],
                jobSalary: 0,
                jobZone: [],
                jobAddress: '',
                startTime: '',
                endTime: '',
                employeeNum: 0,
                education: '',
                jobYear: '',
                jobDesc: '',
                welfare: ''
            },
            ruleValidate: {
                jobName: [
                    { required: true, message: '职位名称不能为空', trigger: 'blur' }
                ],
                jobProp: [
                    { required: true, message: '请选择职位性质', trigger: 'blur' },
                ],
                // jobCategory: [
                //     { required: true, type:'array', message: '请选择职位类别', trigger: 'change' }
                // ],
                // jobZone: [
                //     { required: true, type:'text', message: '请选择工作区域', trigger: 'change' }
                // ],
                jobAddress: [
                    { required: true, message: '请填写具体地址', trigger: 'blur' }
                ],
                jobSalary: [
                    { required: true, message: '职位月薪不能为空', trigger: 'change' }
                ],
                employeeNum: [
                    { required: true, type: 'number', message: '招聘人数不能为空', trigger: 'blur' }
                ]

            }
        };
    },
    methods: {
        init () {   //默认是发布岗位
            this.getJobCategory();
            this.getJobZone();
            if (this.$route.params.jobInfo !== undefined) {//修改岗位
                this.formValidate.jobName = this.$route.params.jobInfo.title;
                this.formValidate.jobProp = this.$route.params.jobInfo.nature;
                this.formValidate.jobCategory[0] = this.$route.params.jobInfo.industryId;
                this.formValidate.jobZone[0] = this.$route.params.jobInfo.zoneId;
                this.formValidate.jobAddress = this.$route.params.jobInfo.address;
                this.formValidate.startTime = this.$route.params.jobInfo.effectiveTime;
                this.formValidate.endTime = this.$route.params.jobInfo.expirationTime;
                this.formValidate.jobSalary = this.$route.params.jobInfo.wage;
                this.formValidate.employeeNum = this.$route.params.jobInfo.peopleNumber;
                this.formValidate.education = this.$route.params.jobInfo.education;
                this.formValidate.jobYear = this.$route.params.jobInfo.serviceYear;
                this.formValidate.jobDesc = this.$route.params.jobInfo.description;
                this.formValidate.welfare = this.$route.params.jobInfo.welfare;
                this.$refs.createJob.style.display = 'none';
                this.$refs.modifyJob.style.display = 'inline-block';
            }
        },
        //提交修改后的岗位信息
        modifySubmit () {
            this.updateJobUrl += this.$route.params.jobInfo.id;
            this.buildJob();

            if (JSON.stringify(this.job) != '{}') {
                this.$axios.put(this.updateJobUrl, this.job)
                    .then(response => {
                        this.$Message.info('提交成功！');
                        //清空表单
                    })
                    .catch(function (error) {
                        console.log(error)
                    }
                    )
            }
        },
        //获取行业类别
        getJobCategory () {
            this.$axios.get(this.getCategoryUrl)
                .then(response => {
                    this.categoryData = response.data.children;
                    console.log(this.categoryData);
                })
        },
        //获取地区信息
        getJobZone () {
            this.$axios.get(this.getZoneUrl + 1)
                .then(response => {
                    this.zoneData = response.data;
                    this.zoneData.forEach(element => {
                        element.label = element.name;
                        // element.value = element.id;
                        if (element.level < 4) { element.children = [] }
                        element.loading = false
                    })
                })
        },
        zoneFormat (label, selectedData) {
            const index = label.length - 1
            const data = selectedData[index] || false
            this.formValidate.jobZone[index] = data.id;
            console.log(this.formValidate.jobZone);

            return label.join('/');
        },
        loadData (item, callback) {
            item.loading = true;
            this.$axios.get(this.getZoneUrl + item.id)
                .then(response => {
                    item.children = response.data;
                    item.children.forEach(element => {
                        element.label = element.name;
                        // element.value = element.id;
                        if (element.level < 3) {
                            element.children = []
                            element.loading = false
                        }
                    })
                })
            item.loading = false
            callback()
        },
        CategoryFormat (labels, selectedData) {
            const index = labels.length - 1;
            const data = selectedData[index] || false;
            this.formValidate.jobCategory[index] = data.id;
            console.log('jobCategory' + this.formValidate.jobCategory);
            return labels.join('/');
        },
        //将岗位信息进行拼接
        buildJob () {
            this.job = {};  //岗位信息清空
            //获取地区和行业类别的长度
            let categoryLength = this.formValidate.jobCategory.length;
            let zoneLength = this.formValidate.jobZone.length;

            this.job.enterpriseId = localStorage.getItem('userid');
            this.job.title = this.formValidate.jobName;
            this.job.nature = this.formValidate.jobProp;
            this.job.industryId = this.formValidate.jobCategory[categoryLength - 1];
            this.job.zoneId = this.formValidate.jobZone[zoneLength - 1];
            this.job.address = this.formValidate.jobAddress;
            this.job.effectiveTime = this.formValidate.startTime;
            this.job.expirationTime = this.formValidate.endTime;
            this.job.wage = this.formValidate.jobSalary;
            this.job.peopleNumber = this.formValidate.employeeNum;
            this.job.education = this.formValidate.education;
            this.job.serviceYear = this.formValidate.jobYear;
            this.job.description = this.formValidate.jobDesc;
            this.job.welfare = this.formValidate.welfare;


        },
        handleSubmit () {

            this.buildJob();
            console.log('job:' + this.job);
            if (JSON.stringify(this.job) != '{}') {
                this.$axios.post(this.jobaddUrl, this.job)
                    .then(response => {
                        this.$Message.info('提交成功！');
                        //清空表单
                        this.$refs.formValidate1.resetFields();
                        this.$refs.formValidate2.resetFields();
                        // this.$refs.jobwage.clearSingleSelect();
                    })
                    .catch(function (error) {
                        console.log(error)
                    }
                    )
            }

        }
    },
    computed: {

    },
    mounted () {
        this.init();
    }
};
</script>
