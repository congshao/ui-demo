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
						<h1>开发中...</h1>
					</div> 
				</div>
			</div>
		</div>
	);
  }
});