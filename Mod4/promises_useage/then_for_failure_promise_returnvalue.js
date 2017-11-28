httpResponseFunction().then(function(response){
    doStuffWithResponse(response)
}, function(error){
    handleErrors(error)
})