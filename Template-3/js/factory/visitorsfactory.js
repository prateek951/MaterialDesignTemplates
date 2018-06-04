app.factory('visitorsfactory',function($http,$q){

    var visitorsobject = {};

    visitorsobject.servercall = function(){
        var defer = $q.defer();
        function pass(data){
            defer.resolve(data);
        }
        function fail(err){
            defer.reject(err);
        }
        $http.get('server/avatars.json').then(pass,fail);
        return defer.promise;
    }
    return visitorsobject;
});