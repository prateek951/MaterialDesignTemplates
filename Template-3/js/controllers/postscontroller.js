'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * postscontroller of the Application
 */

 app.controller('postscontroller',function($scope,postsfactory){

    var promise = postsfactory.servercall($scope);

    promise.then(function(data){
        // console.log(data.data.posts);
        $scope.posts = data.data.posts;
    }).catch(function(err){
        $scope.error = err;
    });

 });
