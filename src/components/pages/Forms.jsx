Forms = React.createClass({

    componentDidMount(){
        if (Session.get("animateChild")) {
            $(".reports-page").addClass("ng-enter");
            setTimeout(function () {
                $(".reports-page").addClass("ng-enter-active");
            }, 300);
            setTimeout(function () {
                $(".reports-page").removeClass("ng-enter");
                $(".reports-page").removeClass("ng-enter-active");
            }, 600);
        }
    },

    render: function () {
        return (

           <div className="ng-scope">


               <form action="http://ecreditpal.herokuapp.com/new_accounts">
                   <input type="hidden" id="_token" name="_token"/>
                       <div class="row">
                           <div class="col-sm-4">
                               <label>姓名<sup>*</sup></label>
                               <input id="first_name" maxlength="20" class="form-control text_field to_save_input required_field first_name_field" placeholder="" type="text"/>
                           </div>
                           <div class="col-sm-4">
                               <label>身份证号<sup>*</sup></label>
                               <input id="first_name" maxlength="20" class="form-control text_field to_save_input required_field first_name_field" placeholder="" type="text"/>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-sm-12">
                               <label>电子邮箱<sup>*</sup></label>
                               <input id="email" class="form-control required_field to_save_input email" placeholder="" type="text"/>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-sm-12">
                               <label for="school">学校<sup>*</sup></label><a class="black_link" href="javascript:void(0)" data-toggle="modal" data-target="#myModalEligibilitySchool"><span class="question-image-span question-image-span-margin-bottom"></span></a>
                               <input id="school" class="form-control input-lg required_field school text_field to_save_input" placeholder="" autocomplete="off" type="text"/>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-sm-12"><label>学历<sup>*</sup></label></div>
                           <div class="col-sm-6">
                               <select id="degree" class="form-control to_save_select required_field input_invalid"><option value="-1">选择学历</option><option value="BLR">本科</option><option value="MTS">研究生</option><option value="MBA">MBA</option><option value="JD">JD(法律博士)</option><option value="DDS">DDS(牙医学博士)</option><option value="MD">MD(医学博士)</option><option value="PHD">博士</option><option value="LLM">LL.M</option><option value="BOO">Bootcamp</option><option value="OTH">其他</option></select>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-sm-12">
                               <label for="school">学籍状态<sup>*</sup></label>
                               <select id="enrollment_status" class="form-control required_field to_save_select input_invalid">
                                   <option value="-1">选择学籍状态</option>
                                   <option value="1">大学一年级</option>
                                   <option value="2">大学二年级</option>
                                   <option value="3">大学三年级</option>
                                   <option value="4">大学四年级</option>
                                   <option value="5">研一</option>
                                   <option value="A">研二</option>
                                   <option value="B">研三</option>
                                   <option value="C">博士在读</option>
                               </select>
                           </div>
                       </div>
                       <div class="row">
                           <div class="col-sm-12">
                               <label for="school">毕业时间<sup>*</sup></label>
                           </div>
                           <div class="col-sm-7">
                               <select id="graduation_month" class="form-control required_field to_save_select">
                                   <option value="-1">月份</option>
                                   <option value="1">一月</option>
                                   <option value="2">二月</option>
                                   <option value="3">三月</option>
                                   <option value="4">四月</option>
                                   <option value="5">五月</option>
                                   <option value="6">六月</option>
                                   <option value="7">七月</option>
                                   <option value="8">八月</option>
                                   <option value="9">九月</option>
                                   <option value="10">十月</option>
                                   <option value="11">十一月</option>
                                   <option value="12">十二月</option>
                               </select>
                           </div>
                           <div class="col-sm-5">
                               <select id="graduation_year" class="form-control required_field to_save_select"><option value="-1">年份</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option></select>
                           </div>
                       </div>

                       <div class="row">
                           <div class="col-sm-12">
                               <label for="school">电话</label>
                           </div>
                           <div class="col-sm-12">
                               <input id="phone_number" class="form-control to_save_input phone_field"  type="text"/>
                           </div>
                       </div>

                       <div class="row">
                           <div class="col-sm-12"><label>您是怎么知道我们的</label></div>
                           <div class="col-sm-6">
                               <select id="how_did_you_hear_about_us" class="form-control to_save_select"><option value="-1">选项</option><option value="School Financial Aid or site">学校助学机构</option><option value="Referral from a Friend">朋友推荐</option><option value="Facebook">微信</option><option value="Google Search">百度</option><option value="Twitter">微博</option><option value="StupidSid">学信网</option><option value="The Globalizers">阿里巴巴</option><option value="Athletes USA">QQ</option><option value="La Unidad Latina">La Unidad Latina</option><option value="GOPYT">GOPYT</option><option value="News / Press article">News / Press article</option><option value="Schoold">Schoold</option><option value="Simple Tuition">Simple Tuition</option><option value="Other - please specify">Other - please specify</option></select>
                           </div>
                           <div class="col-sm-6">
                               <input id="how_did_you_hear_about_us_other" class="form-control input-lg text_field" type="text"/>
                           </div>
                       </div>


                       <div class="row">
                           <div class="col-sm-12">
                               <label for="loan_amount">贷款数额 <small></small><sup>*</sup></label><a class="black_link" href="javascript:void(0)" data-toggle="modal" data-target="#myModalEligibilityLoanAmount"><span class="question-image-span question-image-span-margin-bottom"></span></a>
                               <input id="loan_amount" class="form-control input-lg required_field to_save_input loan_amount" placeholder="" type="text"/>
                               <label id="loan_amount_help_field" class="input_help_field">最低 500. 最高 10000</label>
                           </div>
                       </div>
                       <div class="blankSpace"></div>
                       <div class="row">
                           <div class="col-sm-12">
                               <h4 id="checkbox_title" class="text-left">贷款用途 <small>(至少选择一项)</small><span class="sup">*</span></h4>
                           </div>
                       </div>

                       <div class="row">
                           <div class="col-sm-12">
                               <label id="check_error" class="input_help_field input_help_field_invalid hide">Select at least one option</label>
                           </div>
                       </div>

                       <div class="row">
                           <div class="col-sm-6 col-md-6 col-lg-4 check-height">
                               <div class="squaredTwo">
                                   <input type="checkbox" class="to_save_checkbox" name="inlineRadioOptions" id="loan_purpose_tuition" value="option1"/>
                                       <label for="loan_purpose_tuition" class="radio-inline">
                                           <span></span>
                                           <div>学费</div>
                                       </label>
                               </div>
                           </div>
                           <div class="col-sm-6 col-md-6 col-lg-4 check-height">
                               <div class="squaredTwo">
                                   <input type="checkbox" class="to_save_checkbox" name="inlineRadioOptions" id="loan_purpose_university_housing" value="option2"/>
                                       <label for="loan_purpose_university_housing" class="radio-inline">
                                           <span></span>
                                           <div>住宿费</div>
                                       </label>
                               </div>
                           </div>
                           <div class="col-sm-6 col-md-6 col-lg-4 check-height">
                               <div class="squaredTwo">
                                   <input type="checkbox" class="to_save_checkbox" name="inlineRadioOptions" id="loan_purpose_health_insurance" value="option3"/>
                                       <label for="loan_purpose_health_insurance" class="radio-inline">
                                           <span></span>
                                           <div>医保</div>
                                       </label>
                               </div>
                           </div>
                           <div class="col-sm-6 col-md-6 col-lg-4 check-height">
                               <div class="squaredTwo">
                                   <input type="checkbox" class="to_save_checkbox" name="inlineRadioOptions" id="loan_purpose_meal_plan" value="option1"/>
                                       <label for="loan_purpose_meal_plan" class="radio-inline">
                                           <span></span>
                                           <div>伙食费</div>
                                       </label>
                               </div>
                           </div>
                           <div class="col-sm-6 col-md-6 col-lg-4 check-height">
                               <div class="squaredTwo">
                                   <input type="checkbox" class="to_save_checkbox" name="inlineRadioOptions" id="loan_purpose_other_school_bill" value="option2"/>
                                       <label for="loan_purpose_other_school_bill" class="radio-inline">
                                           <span></span>
                                           <div>校内其他杂费</div>
                                       </label>
                               </div>
                           </div>
                       </div>

                       <div class="row">
                           <button id="next" type="submit" class="btn btn-primary pull-right ladda-button" data-style="zoom-in" >
                                <span class="ladda-label">马上查询</span>
                           </button>
                       </div>
               </form>
           </div>
        );
    }
});
