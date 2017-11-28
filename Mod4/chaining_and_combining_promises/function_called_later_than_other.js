function function1(){
    //Then these two functions would use the same promise and would resolve simultaneously on the promise's conclusion, or if one function was called later than the other it would use the cached value
    fancyDeferral.then(function(response){
        console.log(response)
    })
}

function function2(){
    fancyDeferral.then(function(response){
        console.log(response)
    })
}
