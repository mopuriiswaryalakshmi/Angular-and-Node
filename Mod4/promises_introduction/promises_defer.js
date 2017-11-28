function demonstrateDefer(){
    var deferred = $q.defer()
    $http.get('someresource').then(function(response){
        $q.resolve(response)
    })
return $q.promise()
}