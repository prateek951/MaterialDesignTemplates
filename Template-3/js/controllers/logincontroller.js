app.controller('logincontroller',function($scope,$window){

    var loginObject = {
        "username" : "ROOT@ROOT.com",
        "password" : "TOOR"
    }
    $scope.loginUser = function(){
        if($scope.email === loginObject.username && $scope.password === loginObject.password){
            console.log('You are now logged in');
            $window.location.href = '/index.html';
        }
    }

});