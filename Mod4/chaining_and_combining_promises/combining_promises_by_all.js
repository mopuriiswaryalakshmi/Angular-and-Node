unction deferThis(){
    var deferred = $q.defer()
    $http.get('something').then(function(response){
        deffered.resolve(response)
    }, function(error){
        errorHandle1(error)
    })
    return deferred.promise
}

function deferAnother(){
    var deferred = $q.defer()
    $http.get('something').then(function(response){
        deffered.resolve(response)
    }, function(error){
        errorHandle1(error)
    })
    return deferred.promise
}

$q.all(deferThis(), deferAnother()).then(function(response){
    promiseOneReturnFunction(response[0])
    promiseTwoReturnFunction(response[1])
})