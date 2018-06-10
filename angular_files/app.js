var app = angular.module('myapp', ['ngRoute', 'ngMessages']);

app.run(function () {
	console.log("run wrkng");
});

//routing
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "main.html"
	})
	.when("/search",{
		templateUrl : "search.html"
	})
	.when("/company",{
		templateUrl : "company.html"
	})
})
