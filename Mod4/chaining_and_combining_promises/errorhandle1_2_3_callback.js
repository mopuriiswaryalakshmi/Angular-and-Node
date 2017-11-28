function passMoreBucks(){
    //If the failure occurs here, errorhandle1(), errorhandle2(), and errorhandle3() will all be called
    passTheBuck.then(function(response){
        console.log(response)
    }, function(error){
        errorhandle3(error)
    })
}