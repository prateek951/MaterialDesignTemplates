app.factory('commentsfactory',function($http,$q){

    var commentsobject = {};
    commentsobject.servercall = function(){
        var defer = $q.defer();
        $http.get('server/comments.json').then(pass,fail);
        function pass(data){
            defer.resolve(data);
        }
        function fail(){
            defer.reject(err);
        }
        return defer.promise;
    }
    return commentsobject;
});