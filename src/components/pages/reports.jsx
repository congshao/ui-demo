Reports = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".reports-page").addClass("ng-enter");
			setTimeout(function(){
				$(".reports-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".reports-page").removeClass("ng-enter");
				$(".reports-page").removeClass("ng-enter-active");
			}, 600);
		}
	},
	render: function() {
		return (
			<div className="reports">
				<div key="reports" className="reports-page ui-view main">
					<div className="ng-scope">
						<a href="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">返回主页</a>
						<h2>个人信用查询 <small>企业版</small></h2>

						<i className="fa fa-dashboard bg-fade"></i>
						<div className="jumbotron">
							<h3>个人信用查询, 我们提供一下服务:</h3>
							<ul>
								<li>信用风险评分</li>
								<li>基本信用分数</li>
								<li>信用分数波动图</li>
								<li>FICO预测分数</li>
								<li>信用分数排名（百分比)</li>
								<li>信用分析报告</li>
								<li>重要数据信息披露</li>
								<li>信用分数影响因素</li>
								<li>违约风险几率预测与解释</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
});