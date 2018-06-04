'use strict';

/**
 * @ngdoc overview
 * @name dashApp
 * @description
 * # dashApp
 *
 * todoscontroller of the Application
 */

 app.controller('todoscontroller',function($scope,todosfactory){

    $scope.todo = '';

    var promise = todosfactory.servercall($scope);

    promise.then(function(data){
        $scope.todos = data.data.todos;
        $scope.addTodo = function(){
            $scope.todos.push($scope.todo);
        }
    });

 })
