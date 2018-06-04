app.factory('myfactory',function($http,$q){

    var myobject = {};
    myobject.servercall = function(){
        var deferred = $q.defer();
        function pass(data){
            deferred.resolve(data);
        }
        function fail(err){
            deferred.reject(err);
        }
        $http.get('server/navigation.json').then(pass,fail);
        return deferred.promise;
    }
    return myobject;

});