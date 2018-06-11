var app = angular.module('geoms', ['ngRoute']);

app.run(function ($rootScope) {
    console.log("run wrkng");
    $(document).ready(function(){
        $('input.autocomplete').autocomplete({
          data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
          },
        });
      });
      $rootScope.navBar="homeNav";
});

app.controller('header',function($rootScope,$scope){
    console.log("header");
    $scope.dropMe=function(){
        $('#drop-down').slideToggle();
    }
});

app.controller('home',function($scope,$rootScope){

    console.log("home loaded");
    $scope.img1="background1.jpg";
    $(document).ready(function(){
        $('.parallax').parallax();
      });
      $(document).ready(function(){
        $('.modal').modal();
      });


      $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
        var $this = $(this),
            label = $this.prev('label');
      
            if (e.type === 'keyup') {
                  if ($this.val() === '') {
                label.removeClass('active highlight');
              } else {
                label.addClass('active highlight');
              }
          } else if (e.type === 'blur') {
              if( $this.val() === '' ) {
                  label.removeClass('active highlight'); 
                  } else {
                  label.removeClass('highlight');   
                  }   
          } else if (e.type === 'focus') {
            
            if( $this.val() === '' ) {
                  label.removeClass('highlight'); 
                  } 
            else if( $this.val() !== '' ) {
                  label.addClass('highlight');
                  }
          }
      
      });
      
      $('.tab a').on('click', function (e) {
        
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
      
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
      });
});

app.controller('company',function($scope,$rootScope){
    $(document).ready(function(){
        $('.carousel').carousel();
      });
    console.log("company");
});

app.controller('account',function($scope,$rootScope){
    console.log("account");
    $(document).ready(function(){
        $('.tabs').tabs();
      });
});

app.controller('search',function($rootScope,$scope){
    console.log("search");
    $rootScope.navBar="dashNav";

});

app.controller('dashboard',function($rootScope,$scope){
    console.log("dashboard");
    $scope.state="Profile";
    $scope.Profile="true";
    
	$scope.setProfile=function(){
		$scope.state="Profile"
		$scope.Profile="true";
		$scope.Products="false";
		$scope.Payments="false";
		$scope.Orders="false";
	}
	$scope.setProducts=function(){
		$scope.state="Products"
		$scope.Profile="false";
		$scope.Products="true";
		$scope.Payments="false";
		$scope.Orders="false";
	}
	$scope.setPayments=function(){
		$scope.state="Payments"
		$scope.Profile="false";
		$scope.Products="false";
		$scope.Payments="true";
		$scope.Orders="false";
	}
	$scope.setOrders=function(){
        $scope.state="Orders"
		$scope.Profile="false";
		$scope.Products="false";
		$scope.Payments="false";
		$scope.Orders="true";
	}
});
//routing
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "home.html"
    })
    .when("/company",{
        templateUrl : "company.html"
    })
    .when("/account",{
        templateUrl : "account.html"
    })
    .when("/search",{
        templateUrl : "search.html"
    })
    .when("/dashboard",{
        templateUrl : "dashboard.html"
    })
});