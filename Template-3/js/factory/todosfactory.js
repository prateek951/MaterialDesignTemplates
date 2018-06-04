app.factory('todosfactory', function ($http, $q) {

    var todosobject = {};

    todosobject.servercall = function () {
        var defer = $q.defer();

        function pass(data) {
            defer.resolve(data);
        }

        function fail(err) {
            defer.reject(err);
        }
        $http.get('server/todos.json').then(pass, fail);
        return defer.promise;
    }
    return todosobject;
});