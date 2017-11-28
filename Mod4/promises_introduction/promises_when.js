function someOtherFunction(){
    return $http.get('someresource')
}

$q.when(someOtherFunction()).then(function(){
    
})