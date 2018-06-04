'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * visitorsController of the Application
 */

app.controller('visitorscontroller',function($scope,visitorsfactory){

    var promise = visitorsfactory.servercall($scope);
    
    promise.then(function(data){
        // console.log(data.data.avatars);
        $scope.avatars = data.data.avatars;
    }).catch(function(err){
        $scope.error = err;
    });

})