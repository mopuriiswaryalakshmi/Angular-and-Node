function deferThis(){
    var deferred = $q.defer()
    $http.get('something').then(function(response){
        deffered.resolve(response)
    })
    return deferred.promise
}
function passTheBuck(response){
    deferThis.then(function(response){
        doStuffWithResponse(response)
    })
}