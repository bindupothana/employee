var app=angular.modul("myapp",['ui.router'])
app.config(['$stateProvider','$urlRouteProvider',functions($stateprovider, $urlRouteProvider)

{
	$urlRouteProvider.otherwise('/');
	$state provider 
	.state("home",{
		url:"\home",
		template url:"templates\home.html",
		controller:"homeController",
		controller As:"homeCtrl"
	})
	.state("technology",{
		url:"\technology",
		template url:"templates\technology.html",
		controller:"technologyController",
		controller As:"technologyectrl"
	})
	.state("employee",{
		url:"\employee",
		template url:"templates\employee.html",
		controller:"employeeControler",
		controller As:"employeectrl"
		resolve:{
			employee list:function($http){
				return $http.get("employeeservice.asmx/get All employees")
				.then(function(response)
				{
					return response.data;
				})
			}
		}
  
	})


.controller("homeController",function(){
	this.message="home.html";
})
.controller("coursesController",function(){
	this.technology=["c++","vb.net","asp.net","sql srver","angular js","java"];

})
.controller("employee controller",function(employee list,$route,$location){
	var vm=this;
	vm.employeesearch=function(){
		if(vm.name)
			$location.url("/employeesearch"+vm.name)
		else
			$location.url("/employeesearch")
	}
	vm.reloaddata=function(){
		$route.reload();

	}
	vm.employee=employee list;
	}
})