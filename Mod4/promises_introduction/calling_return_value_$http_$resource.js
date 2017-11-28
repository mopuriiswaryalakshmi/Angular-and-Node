function builtInPromise(){
    return $http.get('').then(response){
        return response
    }
}

builtInPromise.then(function(response){
    
})
