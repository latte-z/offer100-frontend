<style lang="less">
@import './job-nav.less';
</style>

<template>
    <div id="sidebar" class="sidebar">
        <div class="mainNavs">
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            技术
                        </h2>
                        <a @click="goSearch">Java</a>
                        <a @click="goSearch">PHP</a>
                        <a @click="goSearch">C++</a>
                        <a @click="goSearch">Android</a>
                        <a @click="goSearch">iOS</a>
                        <a @click="goSearch">数据挖掘</a>
                        <a @click="goSearch">深度学习</a>
                        <a @click="goSearch">自然语言处理</a>
                        <a @click="goSearch">机器学习</a>
                        <a @click="goSearch">测试</a>
                        <a @click="goSearch">html5</a>
                        <a @click="goSearch">技术总监</a>
                        <a @click="goSearch">架构师</a>
                        <a @click="goSearch">CTO</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn" style="top: 0px;">
                    <dl>
                        <dt>
                            <span>后端开发</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">Java</a>
                            <a @click="goSearch" class="curr">C++</a>
                            <a @click="goSearch" class="curr">PHP</a>
                            <a @click="goSearch" class="curr">数据挖掘</a>
                            <a @click="goSearch" class="">搜索算法</a>
                            <a @click="goSearch" class="">精准推荐</a>
                            <a @click="goSearch" class="">C</a>
                            <a @click="goSearch" class="">C#</a>
                            <a @click="goSearch" class="">全栈工程师</a>
                            <a @click="goSearch" class="">.NET</a>
                            <a @click="goSearch" class="">Hadoop</a>
                            <a @click="goSearch" class="">Python</a>
                            <a @click="goSearch" class="">Delphi</a>
                            <a @click="goSearch" class="">VB</a>
                            <a @click="goSearch" class="">Perl</a>
                            <a @click="goSearch" class="">Ruby</a>
                            <a @click="goSearch" class="">Node.js</a>
                            <a @click="goSearch" class="">Go</a>
                            <a @click="goSearch" class="">ASP</a>
                            <a @click="goSearch" class="">Shell</a>
                            <a @click="goSearch" class="">后端开发其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>移动开发</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">HTML5</a>
                            <a @click="goSearch" class="curr">Android</a>
                            <a @click="goSearch" class="curr">iOS</a>
                            <a @click="goSearch" class="">WP</a>
                            <a @click="goSearch" class="">移动开发其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>前端开发</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">web前端</a>
                            <a @click="goSearch" class="">Flash</a>
                            <a @click="goSearch" class="curr">html5</a>
                            <a @click="goSearch" class="">JavaScript</a>
                            <a @click="goSearch" class="">U3D</a>
                            <a @click="goSearch" class="">COCOS2D-X</a>
                            <a @click="goSearch" class="">前端开发其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>人工智能
                                <i class="icon_new"></i>
                            </span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">深度学习</a>
                            <a @click="goSearch" class="curr">机器学习</a>
                            <a @click="goSearch" class="">图像处理</a>
                            <a @click="goSearch" class="">图像识别</a>
                            <a @click="goSearch" class="">语音识别</a>
                            <a @click="goSearch" class="">机器视觉</a>
                            <a @click="goSearch" class="">算法工程师</a>
                            <a @click="goSearch" class="curr">自然语言处理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>测试</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">测试工程师</a>
                            <a @click="goSearch" class="">自动化测试</a>
                            <a @click="goSearch" class="">功能测试</a>
                            <a @click="goSearch" class="">性能测试</a>
                            <a @click="goSearch" class="">测试开发</a>
                            <a @click="goSearch" class="">游戏测试</a>
                            <a @click="goSearch" class="">白盒测试</a>
                            <a @click="goSearch" class="">灰盒测试</a>
                            <a @click="goSearch" class="">黑盒测试</a>
                            <a @click="goSearch" class="">手机测试</a>
                            <a @click="goSearch" class="">硬件测试</a>
                            <a @click="goSearch" class="">测试经理</a>
                            <a @click="goSearch" class="">测试其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>运维</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">运维工程师</a>
                            <a @click="goSearch" class="">运维开发工程师</a>
                            <a @click="goSearch" class="">网络工程师</a>
                            <a @click="goSearch" class="">系统工程师</a>
                            <a @click="goSearch" class="">IT支持</a>
                            <a @click="goSearch" class="">IDC</a>
                            <a @click="goSearch" class="">CDN</a>
                            <a @click="goSearch" class="">F5</a>
                            <a @click="goSearch" class="">系统管理员</a>
                            <a @click="goSearch" class="">病毒分析</a>
                            <a @click="goSearch" class="">WEB安全</a>
                            <a @click="goSearch" class="">网络安全</a>
                            <a @click="goSearch" class="">系统安全</a>
                            <a @click="goSearch" class="">运维经理</a>
                            <a @click="goSearch" class="">运维其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>DBA</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">MySQL</a>
                            <a @click="goSearch" class="">SQLServer</a>
                            <a @click="goSearch" class="">Oracle</a>
                            <a @click="goSearch" class="">DB2</a>
                            <a @click="goSearch" class="">MongoDB</a>
                            <a @click="goSearch" class="">ETL</a>
                            <a @click="goSearch" class="">Hive</a>
                            <a @click="goSearch" class="">数据仓库</a>
                            <a @click="goSearch" class="">DBA其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">技术经理</a>
                            <a @click="goSearch" class="curr">技术总监</a>
                            <a @click="goSearch" class="curr">架构师</a>
                            <a @click="goSearch" class="curr">CTO</a>
                            <a @click="goSearch" class="">运维总监</a>
                            <a @click="goSearch" class="">技术合伙人</a>
                            <a @click="goSearch" class="">项目总监</a>
                            <a @click="goSearch" class="">测试总监</a>
                            <a @click="goSearch" class="">安全专家</a>
                            <a @click="goSearch" class="">高端技术职位其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>项目管理</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">项目经理</a>
                            <a @click="goSearch" class="">项目助理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>硬件开发</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">硬件</a>
                            <a @click="goSearch" class="">嵌入式</a>
                            <a @click="goSearch" class="">自动化</a>
                            <a @click="goSearch" class="">单片机</a>
                            <a @click="goSearch" class="">电路设计</a>
                            <a @click="goSearch" class="">驱动开发</a>
                            <a @click="goSearch" class="">系统集成</a>
                            <a @click="goSearch" class="">FPGA开发</a>
                            <a @click="goSearch" class="">DSP开发</a>
                            <a @click="goSearch" class="">ARM开发</a>
                            <a @click="goSearch" class="">PCB工艺</a>
                            <a @click="goSearch" class="">模具设计</a>
                            <a @click="goSearch" class="">热传导</a>
                            <a @click="goSearch" class="">材料工程师</a>
                            <a @click="goSearch" class="">精益工程师</a>
                            <a @click="goSearch" class="">射频工程师</a>
                            <a @click="goSearch" class="">硬件开发其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>企业软件</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">实施工程师</a>
                            <a @click="goSearch" class="">售前工程师</a>
                            <a @click="goSearch" class="">售后工程师</a>
                            <a @click="goSearch" class="">BI工程师</a>
                            <a @click="goSearch" class="">企业软件其它</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            产品
                        </h2>
                        <a @click="goSearch">产品总监</a>
                        <a @click="goSearch">产品经理</a>
                        <a @click="goSearch">数据产品经理</a>
                        <a @click="goSearch">游戏策划</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn" style="top: 0px;">
                    <dl>
                        <dt>
                            <span>产品经理</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">产品经理</a>
                            <a @click="goSearch" class="">网页产品经理</a>
                            <a @click="goSearch" class="">移动产品经理</a>
                            <a @click="goSearch" class="">产品助理</a>
                            <a @click="goSearch" class="curr">数据产品经理</a>
                            <a @click="goSearch" class="">电商产品经理</a>
                            <a @click="goSearch" class="curr">游戏策划</a>
                            <a @click="goSearch" class="">产品实习生</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>产品设计师</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">网页产品设计师</a>
                            <a @click="goSearch" class="">无线产品设计师</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">产品部经理</a>
                            <a @click="goSearch" class="curr">产品总监</a>
                            <a @click="goSearch" class="">游戏制作人</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            设计
                        </h2>
                        <a @click="goSearch">UI设计师</a>
                        <a @click="goSearch">交互设计</a>
                        <a @click="goSearch">网页设计师</a>
                        <a @click="goSearch">平面设计师</a>
                        <a @click="goSearch">视觉设计师</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn" style="top: 0px;">
                    <dl>
                        <dt>
                            <span>视觉设计</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">视觉设计师</a>
                            <a @click="goSearch" class="curr">网页设计师</a>
                            <a @click="goSearch" class="">Flash设计师</a>
                            <a @click="goSearch" class="">APP设计师</a>
                            <a @click="goSearch" class="curr">UI设计师</a>
                            <a @click="goSearch" class="curr">平面设计师</a>
                            <a @click="goSearch" class="">美术设计师（2D/3D）</a>
                            <a @click="goSearch" class="">广告设计师</a>
                            <a @click="goSearch" class="">多媒体设计师</a>
                            <a @click="goSearch" class="">原画师</a>
                            <a @click="goSearch" class="">游戏特效</a>
                            <a @click="goSearch" class="">游戏界面设计师</a>
                            <a @click="goSearch" class="">游戏场景</a>
                            <a @click="goSearch" class="">游戏角色</a>
                            <a @click="goSearch" class="">游戏动作</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>交互设计</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">交互设计师</a>
                            <a @click="goSearch" class="">无线交互设计师</a>
                            <a @click="goSearch" class="">网页交互设计师</a>
                            <a @click="goSearch" class="">硬件交互设计师</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>用户研究</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">数据分析师</a>
                            <a @click="goSearch" class="">用户研究员</a>
                            <a @click="goSearch" class="">游戏数值策划</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">设计经理/主管</a>
                            <a @click="goSearch" class="">设计总监</a>
                            <a @click="goSearch" class="">视觉设计经理/主管</a>
                            <a @click="goSearch" class="">视觉设计总监</a>
                            <a @click="goSearch" class="">交互设计经理/主管</a>
                            <a @click="goSearch" class="">交互设计总监</a>
                            <a @click="goSearch" class="">用户研究经理/主管</a>
                            <a @click="goSearch" class="">用户研究总监</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            运营
                        </h2>
                        <a @click="goSearch">新媒体运营</a>
                        <a @click="goSearch">编辑</a>
                        <a @click="goSearch">数据运营</a>
                        <a @click="goSearch">运营总监</a>
                        <a @click="goSearch">COO</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn" style="top: 0px;">
                    <dl>
                        <dt>
                            <span>运营</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">用户运营</a>
                            <a @click="goSearch" class="">产品运营</a>
                            <a @click="goSearch" class="curr">数据运营</a>
                            <a @click="goSearch" class="">内容运营</a>
                            <a @click="goSearch" class="">活动运营</a>
                            <a @click="goSearch" class="">商家运营</a>
                            <a @click="goSearch" class="">品类运营</a>
                            <a @click="goSearch" class="">游戏运营</a>
                            <a @click="goSearch" class="">网络推广</a>
                            <a @click="goSearch" class="">运营专员</a>
                            <a @click="goSearch" class="">网店运营</a>
                            <a @click="goSearch" class="curr">新媒体运营</a>
                            <a @click="goSearch" class="">海外运营</a>
                            <a @click="goSearch" class="">运营经理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>编辑</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">副主编</a>
                            <a @click="goSearch" class="">内容编辑</a>
                            <a @click="goSearch" class="">文案策划</a>
                            <a @click="goSearch" class="">记者</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>客服</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">售前咨询</a>
                            <a @click="goSearch" class="">售后客服</a>
                            <a @click="goSearch" class="">淘宝客服</a>
                            <a @click="goSearch" class="">客服经理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">主编</a>
                            <a @click="goSearch" class="curr">运营总监</a>
                            <a @click="goSearch" class="curr">COO</a>
                            <a @click="goSearch" class="">客服总监</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            市场与销售
                        </h2>
                        <a @click="goSearch">市场推广</a>
                        <a @click="goSearch">市场总监</a>
                        <a @click="goSearch">市场策划</a>
                        <a @click="goSearch">BD</a>
                        <a @click="goSearch">销售总监</a>
                        <a @click="goSearch">销售经理</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn">
                    <dl>
                        <dt>
                            <span>市场/营销</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">市场营销</a>
                            <a @click="goSearch" class="curr">市场策划</a>
                            <a @click="goSearch" class="">市场顾问</a>
                            <a @click="goSearch" class="curr">市场推广</a>
                            <a @click="goSearch" class="">SEO</a>
                            <a @click="goSearch" class="">SEM</a>
                            <a @click="goSearch" class="">商务渠道</a>
                            <a @click="goSearch" class="">商业数据分析</a>
                            <a @click="goSearch" class="">活动策划</a>
                            <a @click="goSearch" class="">网络营销</a>
                            <a @click="goSearch" class="">海外市场</a>
                            <a @click="goSearch" class="">政府关系</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>公关</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">媒介经理</a>
                            <a @click="goSearch" class="">广告协调</a>
                            <a @click="goSearch" class="">品牌公关</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>销售</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">销售专员</a>
                            <a @click="goSearch" class="curr">销售经理</a>
                            <a @click="goSearch" class="">客户代表</a>
                            <a @click="goSearch" class="">大客户代表</a>
                            <a @click="goSearch" class="">BD经理</a>
                            <a @click="goSearch" class="">商务渠道</a>
                            <a @click="goSearch" class="">渠道销售</a>
                            <a @click="goSearch" class="">代理商销售</a>
                            <a @click="goSearch" class="">销售助理</a>
                            <a @click="goSearch" class="">电话销售</a>
                            <a @click="goSearch" class="">销售顾问</a>
                            <a @click="goSearch" class="">商品经理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>供应链</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">物流</a>
                            <a @click="goSearch" class="">仓储</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>采购</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">采购专员</a>
                            <a @click="goSearch" class="">采购经理</a>
                            <a @click="goSearch" class="">商品经理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>投资</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">分析师</a>
                            <a @click="goSearch" class="">投资顾问</a>
                            <a @click="goSearch" class="">投资经理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">市场总监</a>
                            <a @click="goSearch" class="curr">销售总监</a>
                            <a @click="goSearch" class="">商务总监</a>
                            <a @click="goSearch" class="">CMO</a>
                            <a @click="goSearch" class="">公关总监</a>
                            <a @click="goSearch" class="">采购总监</a>
                            <a @click="goSearch" class="">投资总监</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            职能
                        </h2>
                        <a @click="goSearch">HR</a>
                        <a @click="goSearch">行政</a>
                        <a @click="goSearch">财务</a>
                        <a @click="goSearch">审计</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn">
                    <dl>
                        <dt>
                            <span>人力资源</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">人力资源</a>
                            <a @click="goSearch" class="">招聘</a>
                            <a @click="goSearch" class="">HRBP</a>
                            <a @click="goSearch" class="">人事/HR</a>
                            <a @click="goSearch" class="">培训经理</a>
                            <a @click="goSearch" class="">薪资福利经理</a>
                            <a @click="goSearch" class="">绩效考核经理</a>
                            <a @click="goSearch" class="">员工关系</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>行政</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">助理</a>
                            <a @click="goSearch" class="">前台</a>
                            <a @click="goSearch" class="curr">行政</a>
                            <a @click="goSearch" class="">总助</a>
                            <a @click="goSearch" class="">文秘</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>财务</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">会计</a>
                            <a @click="goSearch" class="">出纳</a>
                            <a @click="goSearch" class="curr">财务</a>
                            <a @click="goSearch" class="">结算</a>
                            <a @click="goSearch" class="">税务</a>
                            <a @click="goSearch" class="curr">审计</a>
                            <a @click="goSearch" class="">风控</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>法务</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">法务</a>
                            <a @click="goSearch" class="">律师</a>
                            <a @click="goSearch" class="">专利</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">行政总监/经理</a>
                            <a @click="goSearch" class="">财务总监/经理</a>
                            <a @click="goSearch" class="">HRD/HRM</a>
                            <a @click="goSearch" class="">CFO</a>
                            <a @click="goSearch" class="">CEO</a>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="menu_box">
                <div class="menu_main job_hopping">
                    <div class="category-list">
                        <h2>
                            金融
                        </h2>
                        <a @click="goSearch">投资</a>
                        <a @click="goSearch">融资</a>
                        <a @click="goSearch">并购</a>
                        <a @click="goSearch">风控</a>
                        <i class="arrow"></i>
                    </div>
                </div>
                <div class="menu_sub dn" style="top: 0px;">
                    <dl>
                        <dt>
                            <span>投融资</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">投资经理</a>
                            <a @click="goSearch" class="">分析师</a>
                            <a @click="goSearch" class="">投资助理</a>
                            <a @click="goSearch" class="curr">融资</a>
                            <a @click="goSearch" class="curr">并购</a>
                            <a @click="goSearch" class="">行业研究</a>
                            <a @click="goSearch" class="">投资者关系</a>
                            <a @click="goSearch" class="">资产管理</a>
                            <a @click="goSearch" class="">理财顾问</a>
                            <a @click="goSearch" class="">交易员</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>风控</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="curr">风控</a>
                            <a @click="goSearch" class="">资信评估</a>
                            <a @click="goSearch" class="">合规稽查</a>
                            <a @click="goSearch" class="">律师</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>审计税务</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">审计</a>
                            <a @click="goSearch" class="">法务</a>
                            <a @click="goSearch" class="">会计</a>
                            <a @click="goSearch" class="">清算</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>高端职位</span>
                        </dt>
                        <dd>
                            <a @click="goSearch" class="">投资总监</a>
                            <a @click="goSearch" class="">融资总监</a>
                            <a @click="goSearch" class="">并购总监</a>
                            <a @click="goSearch" class="">风控总监</a>
                            <a @click="goSearch" class="">副总裁</a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        goSearch (e) {
            this.$router.push({
                name: 'search_index',
                params: { searchInput: e.currentTarget.innerText }
            })
        }
    },
    mounted () { }
}
</script>
