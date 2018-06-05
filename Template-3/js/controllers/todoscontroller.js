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
    
    var promise = todosfactory.servercall($scope);

    promise.then(function(data){
        $scope.todos = data.data.todos;
         
        $scope.addTodo = function (todoToAdd) {
            $scope.todos.push({name: todoToAdd});
             Materialize.toast('Todo Added', 3000);
             console.log($scope.todos);
             $scope.todoToAdd = '';         
         }
         $scope.deleteTodo = function(i){
             $scope.todos.splice(i,1);
             Materialize.toast('Todo removed',3000);
             console.log($scope.todos);
         }

    });

    

 })
