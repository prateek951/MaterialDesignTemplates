'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * detailsController of the Application
 */

app.controller('detailscontroller',function($scope){
    $scope.image = 'img/person1.jpg';
    $scope.title = '';
    $scope.postdescription = '';
    $scope.options = [
        {
            value:1,
            description : "Web Development"
        },
        {
            value: 2,
            description : "Graphics Design"
        },
        {
            value: 3,
            description : "Tech Gadgets"
        },
        {
            value: 4,
            description : "Others"
        }
    ];
})