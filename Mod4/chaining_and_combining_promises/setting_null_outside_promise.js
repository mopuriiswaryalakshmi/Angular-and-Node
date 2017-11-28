defer = null
cache = null
function fancyDeferral(){
    //Check to see if promise has been instantiated
    if (defer !== null && defer.promise.$$state.status === 0){
      return defer.promise
    }
    else {
        //If it hasn't, execute the desired effect after creating the promise
        defer = $q.defer()
        if (cache !== null){
            defer.resolve(cache)
        }
        $http.get('something').then(function(response){
            cache = response
            defer.resolve(response)
        })
        return defer.promise
    }
}