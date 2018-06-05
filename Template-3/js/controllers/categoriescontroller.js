'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description Render the list of all the categories
 * # dashApp
 *
 * categoriesController of the Application
 */

 app.controller('categoriescontroller',function($scope,categoriesfactory){

    var promise = categoriesfactory.servercall($scope);

    promise.then(function(data){
        // console.log(data.data.categories);
        $scope.categories = data.data.categories;
    }).catch(function(err){
        $scope.error = err;
    });

 });
