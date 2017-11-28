function deferThis(){
    //If the failure occurs within this promise, errorhandle1() will be called
    var deferred = $q.defer()
    $http.get('something').then(function(response){
        deffered.resolve(response)
    }, function(error){
        errorHandle1(error)
    })
    return deferred.promise
}