var app=angular.modul("myapp",[])
.config(functions($stateprovider)
{
	$state provider 
	.state("home",{
		url:"\home",
		template url:"templates\home.html",
		controller:"homeController",
		controller As:"homectrl"
	})
	.state("technology",{
		url:"\technology",
		template url:"templates\technology.html",
		controller:"technologycontroller",
		controller As:"technologyetrl"
	})
	.state("employee",{
		url:"\employee",
		template url:"templates\employee.html",
		controller:"employeecontroler",
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

})
.controller("home controller",function(){
	this.message="home page";
})
.controller("courses controller",function(){
	this.technology=["c++","vb.net","asp.net","sql srver","angular js","java"];

})
.controller("employee controller",function(employee list,$route,$location){
	var vm=this;
	vm.employee search=function(){
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