Overview = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".overview-page").addClass("ng-enter");
			setTimeout(function(){
				$(".overview-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".overview-page").removeClass("ng-enter");
				$(".overview-page").removeClass("ng-enter-active");
			}, 600);
		}
	},

	render: function() {
		return (
			<div className="overview">
				<div className="overview-page ui-view main" key="overview">
					<a href="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">报告</a>
					<h2>概述 <small>为什么选择锐茅?</small></h2>
					<div className="jumbotron">
						<h1>欢迎!</h1> 锐茅科技致力于面向企业和个人的在线金融反欺诈和风险控制。利用互联网的海量数据，融合传统征信，应用大数据建模和机器学习的方法给个人和小微企业提供网贷风控及信用分析，既解决了传统征信覆盖率低的问题，也解决了市面上现有风控系统的“信息孤岛”问题。
						<br /><br />
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">关于锐茅</a> </p>
					</div>
				</div>
			</div>
		);
	}
});