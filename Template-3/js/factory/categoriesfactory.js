app.factory('categoriesfactory',function($http,$q){
    
    var categoriesobject = {};
    categoriesobject.servercall = function(){
        var defer = $q.defer();
        $http.get('server/categories.json').then(pass,fail);

        function pass(data){
            defer.resolve(data);
        }
        function fail(err){
            defer.reject(err);
        }
        return defer.promise;
    }
    return categoriesobject;
});