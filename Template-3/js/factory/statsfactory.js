app.factory('statsfactory',function($http,$q){

    var statsobject = {};
    statsobject.servercall = function(){
        var deferred = $q.defer();
        function pass(data){
            deferred.resolve(data);
        }
        function fail(err){
            deferred.reject(err);
        }
        $http.get('server/statistics.json').then(pass,fail);
        return deferred.promise;
    }
    return statsobject;
});  