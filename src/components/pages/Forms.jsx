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

            <div className="ng-scope" style={{display: 'flex', justifyContent: 'center', width: '70%'}}>


                <form action="http://ecreditpal.herokuapp.com/new_accounts">
                    <h2>基本信息</h2>
                    <input type="hidden" id="_token" name="_token"/>
                    <div className="row">
                        <div className="col-sm-2 input-group-sm">
                            <label>姓名</label>
                            <input height="70" id="first_name" maxlength="20" className="input-lg form-control text_field to_save_input required_field first_name_field" placeholder="" type="text"/>
                        </div>
                        <div className="col-sm-4 input-group-sm">
                            <label>身份证号</label>
                            <input id="first_name" maxlength="20" className="input-lg form-control text_field to_save_input required_field first_name_field" placeholder="" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 input-group-sm">
                            <label>电子邮箱</label>
                            <input id="email" className="form-control required_field to_save_input" placeholder="" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <label for="school">电话</label>
                        </div>
                        <div className="col-sm-6 input-group-sm">
                            <input id="phone_number" className="form-control to_save_input"  type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 input-group-sm">
                            <label for="school">家庭住址</label>
                            <input id="school" className="form-control required_field text_field to_save_input" placeholder="" autocomplete="off" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>出生时期</h4>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-sm-2 input-group-sm" >
                                <label>年份</label>
                                <input id="first_name" maxlength="10" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                            </div>
                            <div className="col-sm-2 input-group-sm">
                                <label>月份</label>
                                <input id="first_name" maxlength="5" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                            </div>
                            <div className="col-sm-2 input-group-sm">
                                <label>日</label>
                                <input id="first_name" maxlength="5" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-sm-12"><label>学历</label></div>
                        <div className="col-sm-6">
                            <select id="degree" className="form-control to_save_select required_field input_invalid"><option value="-1">选择学历</option><option value="BLR">本科</option><option value="MTS">研究生</option><option value="MBA">MBA</option><option value="JD">JD(法律博士)</option><option value="DDS">DDS(牙医学博士)</option><option value="MD">MD(医学博士)</option><option value="PHD">博士</option><option value="LLM">LL.M</option><option value="BOO">Bootcamp</option><option value="OTH">其他</option></select>
                        </div>
                    </div>




                    <h2>经济状况</h2>
                    <div className="row">
                        <div className="col-sm-3 input-group-sm">
                            <label>年收入</label>
                            <input id="first_name" maxlength="20" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                        </div>
                        <div className="col-sm-3 input-group-sm">
                            <label>月支出</label>
                            <input id="first_name" maxlength="20" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 input-group-sm">
                            <label>车牌号码</label>
                            <input id="first_name" maxlength="20" className="form-control text_field to_save_input required_field" placeholder="" type="text"/>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-sm-6 input-group-sm">
                            <label for="loan_amount">贷款数额</label>
                            <input id="loan_amount" className="form-control input-lg required_field to_save_input" placeholder="" type="text"/>
                            <label id="loan_amount_help_field" className="input_help_field">最低 500. 最高 10000</label>
                        </div>
                    </div>
                    <div className="blankSpace"></div>
                    <div className="row">
                        <div className="col-sm-8">
                            <label for="loan_amount">贷款用途 <small>(至少填一项)</small><span className="sup">*</span></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 input-group-sm">
                            <input className="form-control required_field to_save_input" placeholder="" type="text"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12"><label>您是怎么知道我们的</label></div>
                        <div className="col-sm-6 input-group-sm">
                            <select id="how_did_you_hear_about_us" className="form-control to_save_select"><option value="-1">选项</option><option value="School Financial Aid or site">学校助学机构</option><option value="Referral from a Friend">朋友推荐</option><option value="Facebook">微信</option><option value="Google Search">百度</option><option value="Twitter">微博</option><option value="StupidSid">学信网</option><option value="The Globalizers">阿里巴巴</option><option value="Athletes USA">QQ</option><option value="La Unidad Latina">La Unidad Latina</option><option value="GOPYT">GOPYT</option><option value="News / Press article">News / Press article</option><option value="Schoold">Schoold</option><option value="Simple Tuition">Simple Tuition</option><option value="Other - please specify">Other - please specify</option></select>
                        </div>
                    </div>


                    <div className="row">
                        <button id="next" type="submit" className="pull-right btn btn-primary btn-outline btn-rounded" data-style="zoom-in" >
                            <span className="ladda-label">马上查询</span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
});