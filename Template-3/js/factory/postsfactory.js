app.factory('postsfactory', function ($http, $q) {

    var postsobject = {};

    postsobject.servercall = function () {
        var defer = $q.defer();

        function pass(data) {
            defer.resolve(data);
        }

        function fail(err) {
            defer.reject(err);
        }
        $http.get('server/posts.json').then(pass, fail);
        return defer.promise;
    }
    return postsobject;
});