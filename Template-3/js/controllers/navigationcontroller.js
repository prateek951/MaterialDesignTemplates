'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * navigationController of the Application
 */


 app.controller('navigationController',function($scope,myfactory){

    var promise = myfactory.servercall($scope);

    promise.then(function(data){
        console.log(data.data);
        $scope.result = data.data;
    }).catch(function(err){
        $scope.error = err;
    });



 });