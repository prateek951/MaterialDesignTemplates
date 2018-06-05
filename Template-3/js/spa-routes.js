app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: 'dashboard.html'
    }).when('/login',{
        templateUrl : 'login.html'
    }).when('/categories',{
        templateUrl : 'categories.html'
    }).when('/comments',{
        templateUrl : 'comments.html'
    }).when('/details', {
        templateUrl: 'details.html'
    }).otherwise({
        template: 'Error page, no match found'
    })
});
