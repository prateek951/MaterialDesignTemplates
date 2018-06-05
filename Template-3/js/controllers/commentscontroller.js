'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * commentsController of the Application
 */

app.controller('commentscontroller',function($scope,commentsfactory){

    var promise = commentsfactory.servercall($scope);

    promise.then(function(data){
        $scope.comments = data.data.comments;
    }).catch(function(err){
        $scope.error = err;
    })
});
