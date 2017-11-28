app.factory('ExampleResource', function(){
    return $resource('/user/:userId/card/:cardId',
        {userId:123, cardId:'@id'}, {
            //you will consolidate your $http calls into an Angular $resource, which is a multi-purpose service designed to encapsulate API interaction and make it much easier to maintain.
            //You can return a $resource as a Factory object in order to inject it across modules within your application. This is a great way to get API content into modularized code for use throughout your app.
            charge: {method:'POST', params:{charge:true}}
        });
})