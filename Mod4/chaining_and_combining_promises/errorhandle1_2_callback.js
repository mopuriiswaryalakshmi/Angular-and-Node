function passTheBuck(){
    //If the failure occurs here, errorhandle1() and errorhandle2() will be called, but not errorhandle3()
    var deferred2 = $q.defer()
    deferThis.then(function(response){
        deferred2.resolve(response)
    }, function(error){
        errorHandle2(error)
    })
    return deferred2.promise
}