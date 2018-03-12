<style lang="less">
@import './jobadd.less';
</style>

<template>
    <div class="row-wrapper">
        <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
            <div class="container clearfix">
                <div class="post-cont">
                    <div class="group-box">
                        <Form ref="formValidate1" :model="formValidate" :rules="ruleValidate" :label-width="170" >
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
                                <Cascader v-model="formValidate.jobCategory" :data="categoryData" style="width:200px;"></Cascader>
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
                                <!-- <distpicker @selected="onSelected"></distpicker> -->
                                <Cascader @on-change="onChanged" v-model="formValidate.jobZone" :data="zoneData" style="width: 200px;"></Cascader>
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
                                <Input v-model="formValidate.jobDesc" type="textarea" :rows="7" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="福利待遇：" prop="welfare" style="font-size: 20px;">
                                <Input v-model="formValidate.welfare" type="textarea" :rows="7" placeholder="Enter something..."></Input>
                            </FormItem>
                        </Form>
                    </div>
                    <div class="operate-btn">
                        <Button type="primary" @click="handleSubmit()" style="margin-right:50px">发布职位</Button>
                        <!-- <Button type="ghost" @click="handleSubmit('formValidate')">职位预览</Button> -->
                    </div>
                </div>

            </div>
        </Row>
    </div>
</template>

<script>
import distpicker from 'v-distpicker'
import axios from 'axios'
import qs from 'qs'

export default {
    name: 'enterprise_jobadd',
    components: {
        distpicker
    },
    data () {
        return {
            // 岗位详情数据的存放
            job: {},
            jobaddUrl: 'http://47.93.20.40:8081/job/postJob',
            submitMsg: '',
            submitStatus: '',
            categoryData: [
                {
                    value: 'internet',
                    label: '互联网',
                    children: [
                        {
                            value: 'ended',
                            label: '后端'
                        },
                        {
                            value: 'fronted',
                            label: '前端'
                        }
                    ]
                }
            ],
            zoneData: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'chaoyang',
                            label: '朝阳区'
                        },
                        {
                            value: 'haidian',
                            label: '海淀区'
                        }
                    ]
                }
            ],
            // zoneData: {
            //     province:'',
            //     city: '',
            //     area: ''
            // },
            formValidate: {
                jobName: '',
                jobProp: '',
                jobCategory: [1655],
                jobSalary: 0,
                jobZone: [503],
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
        init () {

        },
        // onSelected(data) {
        //     console.log(data.province);
        //     this.zoneData.province = data.province;
        //     this.zoneData.city = data.city;
        //     this.zoneData.area = data.area;
        //     console.log(this.zoneData);
        // },
        onChanged (data) {

            // this.$axios.post(this.zoneUrl, qs.stringify)
        },
        //将岗位信息进行拼接
        buildJob () {
            this.job = {};  //岗位信息清空

            this.job.enterpriseId = 1;
            this.job.title = this.formValidate.jobName;
            this.job.nature = this.formValidate.jobProp;
            this.job.industryId = this.formValidate.jobCategory[0];
            this.job.zoneId = this.formValidate.jobZone[0];
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
        // buildUrl() {

        // },
        handleSubmit () {
            
            this.buildJob();
            console.log(this.job);
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

    }
};
</script>
