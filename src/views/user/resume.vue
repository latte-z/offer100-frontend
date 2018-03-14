<style lang="less">
@import '../../styles/common.less';
@import './styles/resume.less';
</style>

<template>
    <div class="container clearfix" id="container">
        <div>
            <div class="clearfixs mr_created">
                <div class="mr_myresume_l">
                    <div id="mr_mr_head">
                        <!-- 设置头像 -->
                        <div class="mr_top_bg" id="baseinfo">
                            <div class="demo-avatar">
                                <img :src="resume.personPhoto" style="border-radius:50%; margin-left: 301px; margin-top:39px; width: 144px; height: 144px ">
                            </div>
                        </div>
                        <div class="mr_baseinfo">
                            <!-- 个人信息 -->
                            <div class="mr_p_info mr_infoed mr_w604 clearfixs">
                                <div class="mr_p_name mr_w604 clearfixs">
                                    <span class="mr_name">{{ resume.userName }}</span>
                                </div>
                                <div class="info_t">
                                    <span class="shenfen">
                                        <i></i>
                                        <em>{{ resume.graduatedSchool }}</em>
                                        <em>{{ resume.profession }}</em>
                                    </span>
                                </div>
                                <div class="info_j">
                                    <span class="base_info">
                                        <i></i>
                                        <em class="s">{{ resume.sex }}</em>
                                        <em class="a">
                                            <span class="age">{{ resume.age }}</span>
                                        </em>
                                        <em class="x">{{ resume.education }}</em>

                                        <em class="mr0 d">{{ resume.nativePlace }}</em>
                                    </span>
                                </div>
                                <div class="info_b">
                                    <span class="mobile">
                                        <i></i>
                                        <em>{{ resume.telephone }}</em>
                                    </span>
                                    <span class="email">
                                        <i></i>
                                        <em>{{ resume.email }}</em>
                                    </span>
                                </div>
                                <span class="mr_edit mr_head_r mr_edit_on">
                                    <i></i>
                                    <em @click="editInfoSwitch">编辑</em>
                                </span>
                            </div>
                            <div>
                                <Form :class="{dn:!editInfoToggle}" ref="editUserInfo" id="olinfoForm">
                                    <div class="mr_info_edit mr_info_on">
                                        <FormItem prop="resume.userName">
                                            <label>姓名</label>
                                            <Input v-model="resume.userName" size="large" placeholder="请输入姓名" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.graduatedSchool">
                                            <label>学校</label>
                                            <Input v-model="resume.graduatedSchool" size="large" placeholder="请输入学校" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.profession">
                                            <label>专业</label>
                                            <Input v-model="resume.profession" size="large" placeholder="请输入专业" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.sex">
                                            <RadioGroup v-model="resume.sex">
                                                <Radio label="男"></Radio>
                                                <Radio label="女"></Radio>
                                            </RadioGroup>
                                        </FormItem>

                                        <FormItem prop="resume.age">
                                            <label>年龄</label>
                                            <Input :max="30" :min="10" v-model="resume.age" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.education">
                                            <label>最高学历</label>
                                            <Input v-model="resume.education" placeholder="请输入学历" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.nativePlace">
                                            <label>所在城市</label>
                                            <Input v-model="resume.nativePlace" size="large" placeholder="请输入居住地" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.telephone">
                                            <label>手机号码</label>
                                            <Input v-model="resume.telephone" size="large" placeholder="请输入手机号" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.email">
                                            <label>联系邮箱</label>
                                            <Input v-model="resume.email" size="large" placeholder="请输入邮箱" style="width: 350px"></Input>
                                        </FormItem>

                                        <div class="mr_ope">
                                            <Button @click="handleUpdateInfo" type="success" style="width: 100px">保存</Button>
                                            <Button @click="closeUpdateInfo" type="error" style="width: 100px">取消</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <!-- 项目和教育经历 -->
                    <div class="mr_content">
                        <!-- 项目经历 -->
                        <div id="workExperience" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c"> 项目经历 </span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em @click="editProExpSwitch">编辑</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <div ref="projectExperience">
                                    <Form :class="{dn:!editProExpToggle}" ref="updateProForm" class="jobExpForm" id="addJobForm" novalidate="novalidate">
                                        <!-- 项目经历添加页面 -->
                                        <div class="mr_add_work">
                                            <FormItem prop="updateProForm.projectName">
                                                <label>项目名称</label>
                                                <div class="company">
                                                    <Input v-model="resume.projectExperiences[0].projectName" size="large" placeholder="请输入项目名称" style="width: 350px"></Input>
                                                </div>
                                            </FormItem>

                                            <FormItem prop="updateProForm.job">
                                                <label>承担的职位</label>
                                                <div class="projectExp.job">
                                                    <Input v-model="resume.projectExperiences[0].job" size="large" placeholder="请输入所在职位" style="width: 350px"></Input>
                                                </div>
                                            </FormItem>
                                            <FormItem prop="updateProForm.startTime">
                                                <label>开始时间</label>
                                                <div class="workTime">
                                                    <DatePicker v-model="resume.projectExperiences[0].startTime" type="date" format="yyyyMMdd" placeholder="Select date" style="width: 200px"></DatePicker>
                                                </div>
                                            </FormItem>

                                            <FormItem prop="updateProForm.endTime">
                                                <label>结束时间</label>
                                                <div class="workTime">
                                                    <DatePicker v-model="resume.projectExperiences[0].endTime" type="date" format="yyyyMMdd" placeholder="Select date" style="width: 200px"></DatePicker>
                                                </div>
                                            </FormItem>

                                            <FormItem prop="updateProForm.projectDesc">
                                                <label>具体描述</label>
                                                <Input v-model="resume.projectExperiences[0].projectDesc" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                            </FormItem>

                                            <FormItem>
                                                <div class="mr_ope clearfixs">
                                                    <Button @click="handleUpdatePro" type="success" style="width: 100px">保存</Button>
                                                    <Button @click="editProExpSwitch" type="error" style="width: 100px">取消</Button>
                                                </div>
                                            </FormItem>
                                        </div>
                                        <textarea name="editorValue" id="ueditor_textarea_editorValue" style="display: none;" aria-invalid="false" class="valid"></textarea>
                                    </Form>
                                </div>

                                <!-- 项目经历显示 -->
                                <div class="list_show">
                                    <div class="updatejob_wrap">
                                        <!-- 实习经历添加之后的页面显示 -->
                                        <div class="mr_jobe_list" style="display: block;">
                                            <div class="clearfixs">
                                                <div class="mr_content_l clearfixs">
                                                    <div class="l1">
                                                        <img src="" alt="公司logo" class="my_company_logo dn" style="display: none;">
                                                    </div>
                                                    <div class="l2">
                                                        <h4>{{ resume.projectExperiences[0].projectName }}</h4>
                                                        <span>{{ resume.projectExperiences[0].job }}</span>
                                                    </div>
                                                </div>
                                                <div class="mr_content_r">
                                                    <div class="mr_edit mr_c_r_t" style="cursor: pointer;">
                                                        <span>{{resume.projectExperiences[0].startTime }}</span>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dn mr_content_m ueditor_parse" style="display: flex;">
                                                <p>{{ resume.projectExperiences[0].projectDesc }}
                                                    <br>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 教育经历添加 -->
                        <div id="educationalBackground" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c">教育经历</span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em @click="editEduExpSwitch">编辑</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <Form :class="{dn:!editEduExpToggle}" rel="editEduExp" id="addEduForm" novalidate="novalidate">
                                    <div class="mr_add_work">
                                        <FormItem prop="resume.educations[0].schoolTitle">
                                            <label>学校名称</label>
                                            <Input v-model="resume.educations[0].schoolTitle" placeholder="请输入学校名称" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.educations[0].note">
                                            <label>所学专业</label>
                                            <Input v-model="resume.educations[0].note" placeholder="请输入专业" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.educations[0].stage">
                                            <label>最高学历</label>
                                            <Input v-model="resume.educations[0].stage" placeholder="请输入最高学历" style="width: 350px"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.educations[0].endTime">
                                            <label>毕业年份</label>
                                            <DatePicker v-model="resume.educations[0].endTime" type="date" format="yyyyMMdd" placeholder="Select date" style="width: 200px"></DatePicker>
                                        </FormItem>

                                        <div class="mr_ope clearfixs">
                                            <Button @click="handleUpdateEdu" type="success" style="width: 100px">保存</Button>
                                            <Button @click="closeEduInfo" type="error" style="width: 100px">取消</Button>
                                        </div>
                                    </div>
                                </Form>

                                <!-- 教育经历显示 -->
                                <div class="list_show">
                                    <div class="clearfixs mb46 mr_jobe_list">
                                        <div class="mr_content_l">
                                            <!--
                                            <div class="l1">
                                                <img src="//www.lgstatic.com/i/image/M00/AD/4F/CgqKkVi1E5uAD0xGAAAZJHHiMms08.jpeg" alt="学校Logo">
                                            </div>
                                            -->
                                            <div class="l2">
                                                <h4>{{ resume.educations[0].schoolTitle }}</h4>
                                                <span>{{ resume.educations[0].note }}</span>
                                                <span>{{ resume.educations[0].stage }}</span>
                                            </div>
                                        </div>
                                        <div class="mr_content_r">
                                            <div class="mr_edit mr_c_r_t" style="cursor: pointer;">
                                                <!--
                                                <i></i>
                                                <em>编辑</em>
                                                -->
                                                <span>毕业时间：</span>
                                                <span>{{ resume.educations[0].endTime }}</span>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 其他 -->
                        <div id="educationalBackground" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c">其他</span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em @click="editSlefEvlSwitch">编辑</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <Form :class="{dn:!editSlefEvlToggle}" ref="elseForm" id="addElseForm" style="padding: 48px 48px;background-color:#fff4fcfd">
                                    <div class="mr_add_else">
                                        <FormItem prop="resume.professinalSkill">
                                            <label>专业技能</label>
                                            <Input v-model="resume.professinalSkill" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.selfEvaluation">
                                            <label>自我评价</label>
                                            <Input v-model="resume.selfEvaluation" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>

                                        <FormItem prop="resume.reward">
                                            <label>获奖情况</label>
                                            <Input v-model="resume.reward" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>
                                        <div class="mr_ope clearfixs">
                                            <Button @click="handleUpdateElse" type="success" style="width: 100px">保存</Button>
                                            <Button @click="closeOtherInfo" type="error" style="width: 100px">取消</Button>
                                        </div>
                                    </div>
                                </Form>

                                <!-- 显示 -->
                                <div class="list_show">
                                    <Row>
                                        <Col span="20" style="margin-bottom: 5px">
                                        <Card dis-hover style="background-color: #fafafa; border: 0px">
                                            <p slot="title" style="border-bottom: 0px">专业技能</p>
                                            <p>{{ resume.professinalSkill }}</p>
                                        </Card>
                                        </Col>
                                        <Col span="20" style="margin-bottom: 15px">
                                        <Card dis-hover style="border: 0px;background-color: #fafafa">
                                            <p slot="title" style="border-bottom: 0px">自我评价</p>
                                            <p>{{ resume.selfEvaluation }}</p>
                                        </Card>
                                        </Col>
                                        <Col span="20">
                                        <Card dis-hover style="border: 0px;background-color: #fafafa">
                                            <p slot="title" style="border-bottom: 0px">获奖情况</p>
                                            <p>{{ resume.reward }}</p>
                                        </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 页面右侧 -->
                <div class="mr_myresume_r">
                    <div class="mr_upload">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button type="ghost" icon="ios-cloud-upload-outline" :on-success="uploadSuccess" action="/picture/manageFile" style="width: 288px; height: 56px">我要上传简历</Button>
                        </Upload>
                    </div>

                    <div class="scroll_fix">
                        <!-- <div class="mr_integrity">
                            <div class="mr_top clearfixs">
                                <span class="mr_tip_l">
                                    <em class="mr_tip">简历完整度：</em>
                                    <em class="mr_bfb">{{ resumeCompletion }}</em>
                                </span>
                                <a @click="handlePush(user_preview)" class="mr_tip_r" href="#">预览简历</a>
                            </div>
                            <div class="mr_integrity_m">
                                <div class="mr_solid" style="width: 32.5px;"></div>
                                <div class="mr_dashed" style="width: 7.5px;"></div>
                            </div>
                        </div> -->
                        <!-- <div class="mr_module">
                            <ul>
                                <li class="active md_flag" data-md="baseinfo">
                                    <a class="clearfixs">
                                        <i class="mr_base_i"></i>
                                        <span class="mr_m_name">基本信息</span>
                                    </a>
                                </li>
                                <li data-md="workExperience" class="md_flag">
                                    <a class="clearfixs">
                                        <span class="mr_require flag_work dn">必填</span>
                                        <i class="mr_works_i"></i>
                                        <span class="mr_m_name"> 项目经历 </span>
                                    </a>
                                </li>
                                <li data-md="educationalBackground" class="md_flag">
                                    <a class="clearfixs">
                                        <i class="mr_edu_i"></i>
                                        <span class="mr_m_name">教育经历</span>
                                    </a>
                                </li>
                                <li data-md="educationalBackground" class="md_flag">
                                    <a class="clearfixs">
                                        <i class="mr_edu_i"></i>
                                        <span class="mr_m_name">其他经历</span>
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '@/libs/util.js'
export default {
    name: 'user_resume',
    data () {
        return {
            resume: {},
            updateResumeUrl: '/resume/getResumeVO/',
            updateProExpUrl: '/project_experience/',
            updateInfoUrl: '/resume/',
            updateEduUrl: '/education/',
            updateElseUrl: '/resume/',
            resumeCompletion: '13',                               //简历完整度   
            rowsCount: 0,
            educationsCount: 0,
            projectExperiensCount: 0,
            editInfoToggle: false,
            editProExpToggle: false,                            //添加项目经历
            editEduExpToggle: false,                            //添加教育经历
            editSlefEvlToggle: false,                           //编辑其他
        }

    },
    computed: {
    },
    mounted () {
        this.init()
    },
    methods: {
        success () {
            this.$Message.success('修改成功！');
        },
        init () {
            this.get()
        },
        get () {
            this.$axios.get(this.updateResumeUrl + localStorage.getItem('userid') + '?pageNumber=1&pageSize=10')
                .then(response => {
                    this.resume = response.data.rows[0];
                    this.resume.sex = (this.resume.sex === 1 ? '男' : '女');
                    this.resume.educations[0].startTime = util.longToDate(this.resume.educations[0].startTime);
                    this.resume.educations[0].endTime = util.longToDate(this.resume.educations[0].endTime);
                    this.resume.projectExperiences[0].startTime = util.longToDate(this.resume.projectExperiences[0].startTime);
                    this.resume.projectExperiences[0].endTime = util.longToDate(this.resume.projectExperiences[0].endTime);
                    switch (this.resume.educations[0].stage) {
                        case 1: this.resume.educations[0].stage = '本科'; break;
                        case 2: this.resume.educations[0].stage = '硕士'; break;
                        case 3: this.resume.educations[0].stage = '博士'; break;
                        case 4: this.resume.educations[0].stage = '高中'; break;
                        case 5: this.resume.educations[0].stage = '初中'; break;
                        case 6: this.resume.educations[0].stage = '大专'; break;
                    }
                })
        },
        //修改个人信息
        handleUpdateInfo () {
            let url = this.updateInfoUrl + this.resume.id;
            let putInfoData = {};
            let gender = (this.resume.sex === '男' ? 1 : 0);
            putInfoData = {
                'userName': this.resume.userName,
                'graduatedSchool': this.resume.graduatedSchool,
                'profession': this.resume.profession,
                'sex': gender,
                'age': this.resume.age,
                'education': this.resume.education,
                'nativePlace': this.resume.nativePlace,
                'email': this.resume.email,
                'telephone': this.resume.telephone,
            };
            this.$axios.put(url, putInfoData)
                .then(response => {
                    // console.log(response.data);
                    this.$Message.info('修改成功');
                    this.closeUpdateInfo();
                });
        },

        //修改项目经历
        handleUpdatePro () {
            var url = this.updateProExpUrl + this.resume.projectExperiences[0].id;
            let putProExpData = {};
            putProExpData = {
                'projectName': this.resume.projectExperiences[0].projectName,
                'job': this.resume.projectExperiences[0].job,
                'startTime': this.resume.projectExperiences[0].startTime,
                'endTime': this.resume.projectExperiences[0].endTime,
                'projectDesc': this.resume.projectExperiences[0].projectDesc,
            };
            this.$axios.put(url, putProExpData)
                .then(response => {
                    this.$Message.info('保存成功！');
                    this.closeExperInfo();
                });
        },

        //修改教育经历
        handleUpdateEdu () {
            var url = this.updateEduUrl + this.resume.educations[0].id;
            let putEduExpData = {};
            let stage = 0;
            switch (this.resume.educations[0].stage) {
                case '本科': stage = '1'; break;
                case '硕士': stage = '2'; break;
                case '博士': stage = '3'; break;
                case '高中': stage = '4'; break;
                case '初中': stage = '5'; break;
                case '大专': stage = '6'; break;
            };
            putEduExpData = {
                'schoolTitle': this.resume.educations[0].schoolTitle,
                'note': this.resume.educations[0].note,
                'stage': stage,
                'endTime': this.resume.educations[0].endTime,
            };

            this.$axios.put(url, putEduExpData)
                .then(response => {
                    this.$Message.info('续改成功');
                    this.closeEduInfo();
                });
        },

        //修改"其他"
        handleUpdateElse () {
            var url = this.updateElseUrl + this.resume.id;
            let putData = {};
            putData = {
                'professinalSkill': this.resume.professinalSkill,
                'reward': this.resume.reward,
                'selfEvaluation': this.resume.selfEvaluation,
            };
            this.$axios.put(url, putData)
                .then(response => {
                    this.$Message.info('修改成功');
                    this.closeOtherInfo();
                })

        },
        closeUpdateInfo() {
            this.editInfoToggle = !this.editInfoToggle;
        },
        closeExperInfo() {
            this.editProExpToggle = !this.editProExpToggle;
        },
        closeEduInfo() {
            this.editEduExpToggle = !this.editEduExpToggle;
        },
        closeOtherInfo() {
            this.editSlefEvlToggle = !this.editSlefEvlToggle;
        },
        uploadSuccess () {

        },
        handlePush (name) {
            this.$router.push({
                name: name
            })
        },
        //修改个人信息
        editInfoSwitch () {
            return this.editInfoToggle = !this.editInfoToggle
        },
        //添加实习经历
        editProExpSwitch () {
            return this.editProExpToggle = !this.editProExpToggle
        },
        editEduExpSwitch () {
            return this.editEduExpToggle = !this.editEduExpToggle
        },
        editSlefEvlSwitch () {
            return this.editSlefEvlToggle = !this.editSlefEvlToggle
        }

    },
};
</script>
<style>

</style>