'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * statsController of the Application
 */

 app.controller('statscontroller',function($scope,statsfactory){

    var promise = statsfactory.servercall($scope);

    promise.then(function(data){
        // console.log(data.data.statistics);
        $scope.result = data.data.statistics;
        
    }).catch(function(err){
        $scope.error = err;
    });

 });
