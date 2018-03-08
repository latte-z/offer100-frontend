<style lang="less">
@import './jobadd.less';
</style>

<template>
    <div class="row-wrapper">
        <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;padding-bottom:100px">
            <div class="container clearfix">
                <div class="post-cont">
                    <div class="group-box">
                        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="170">
                            <FormItem label="职位名称：" prop="jobName">
                                <Input v-model="formValidate.jobName" style="width: 300px;"></Input>
                            </FormItem>
                            <FormItem label="职位性质：" prop="jobProp">
                                <RadioGroup v-model="formValidate.jobProp" type="button" >
                                    <Radio label="全职" style="margin-right:10px;"></Radio>
                                    <Radio label="兼职" style="margin-right:5px;border-left:1px solid #dddee1"></Radio>
                                    <Radio label="实习" style="margin-right:5px;border-left:1px solid #dddee1"></Radio>
                                    <Radio label="校园" style="border-left:1px solid #dddee1"></Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="职位类别：" prop="jobCategory">
                                <Cascader :data="data4" :load-data="loadData" v-model="formValidate.jobCategory" style="width:200px;"></Cascader>
                            </FormItem>
                            <FormItem label="职位月薪：" prop="jobSalary">
                                <Select v-model="model" style="width:150px">
                                    <Option value="学历不限">1000元以下</Option>
                                    <Option value="本科">1000-2000元</Option>
                                    <Option value="硕士">2000-4000元</Option>
                                    <Option value="博士">4000-6000元</Option>
                                    <Option value="大专">6000-8000元</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="工作地址：" prop="jobAddress">
                                <div>
                                    <Cascader :data="data4" :load-data="loadData" v-model="formValidate.jobCategory" class="fl"></Cascader>
                                    <Input v-model="formValidate.jobAddress" class="fl" style="width: 400px;margin-left: 10px;"></Input>
                                </div>
                            </FormItem>
                            <FormItem label="发布时长：" prop="durationTime" class="jobDuration">
                                <RadioGroup v-model="button2" type="button">
                                    <Radio label="30天" style="margin-right:10px;" class="fl"></Radio>
                                    <div class="fl">
                                        <Radio label="自定义" style="border-left:1px solid #dddee1;margin-right:10px;" class="fl" @on-change="inputJobDuration()"></Radio>
                                        <Input class="fl " placeholder="请输入天数" style="width: 200px;" ref="inputDuration"></Input>
                                    </div>
                                </RadioGroup>
                            </FormItem>
                            
                        </Form>
                    </div>
                    <div class="group-box">
                        <Form ref="" :model="formValidate" :rules="ruleValidate" :label-width="170">
                            <FormItem label="招聘人数：" prop="employeeNum">
                                <Input v-model="formValidate.employeeNum" style="width:150px;"></Input>
                                <label for="">人</label>
                            </FormItem>
                            <FormItem label="学历要求：" prop="enducation">
                                <Select v-model="model" style="width:150px">
                                    <Option value="学历不限">学历不限</Option>
                                    <Option value="本科">本科</Option>
                                    <Option value="硕士">硕士</Option>
                                    <Option value="博士">博士</Option>
                                    <Option value="大专">大专</Option>
                                </Select>
                                <label for="">及以上</label>
                            </FormItem>
                            <FormItem label="工作年限：" prop="jobYear">
                                <Select v-model="model" style="width:150px">
                                    <Option value="年限不限">年限不限</Option>
                                    <Option value="1年以下">1年以下</Option>
                                    <Option value="1-3年">1-3年</Option>
                                    <Option value="3-5年">3-5年</Option>
                                    <Option value="5年及以上">5年及以上</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="职位描述：" prop="jobDesc">
                                <Input v-model="jobDescValue" type="textarea" :rows="7" placeholder="Enter something..."></Input>
                            </FormItem>
                            <FormItem label="福利待遇：" prop="welfare" style="font-size: 20px;">
                                <Input v-model="welfareValue" type="textarea" :rows="7" placeholder="Enter something..."></Input>
                            </FormItem>
                        </Form>
                    </div>
                    <div class="operate-btn">
                        <Button type="primary" @click="handleSubmit('formValidate')" style="margin-right:50px">发布职位</Button>
                        <Button type="ghost" @click="handleSubmit('formValidate')">职位预览</Button>
                    </div>
                </div>

            </div>
        </Row>
    </div>
</template>

<script>

// import resume from './components/resume.vue'
export default {
    name: 'enterprise_jobadd',
    components: {

    },
    data () {
        return {
            button1: '全职',
            button2: '30天',
            // model6: '',
            jobDescValue: '',
            formValidate: {
                jobName: '',
                jobProp: '',
                jobCategory: '',
                jobAddress: '',
                durationTime: '',
                jobSalary: ''

            },
            ruleValidate: {
                jobName: [
                    { required: true, message: '职位名称不能为空', trigger: 'blur' }
                ],
                jobProp: [
                    { required: true, message: '请选择职位性质', trigger: 'blur' },
                ],
                jobCategory: [
                    { required: true, message: '请选择职位类别', trigger: 'blur' }
                ],
                jobAddress: [
                    { required: true, message: '请填写工作地址', trigger: 'blur' }
                ],
                durationTime: [
                    { required: true, message: '', trigger: 'blur' }
                ],
                jobSalary: [
                    { required: true, message: '职位月薪不能为空', trigger: 'blur' }
                ],
                

            }
        };
    },
    methods: {
        inputJobDuration () {
            alert(1234);
            // this.$refs.inputDuration.style.display = 'inline-block';
        }
    },
    computed: {

    }
};
</script>
