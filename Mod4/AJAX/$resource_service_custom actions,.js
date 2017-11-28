var CreditCard = $resource('/user/:userId/card/:cardId',
{userId:123, cardId:'@id'}, {
    //you will consolidate your $http calls into an Angular $resource, which is a multi-purpose service designed to encapsulate API interaction and make it much easier to maintain.
    //To define custom actions, pass an object into the 3rd parameter. This will allow you to modify the inputs for each method, and other customizations.
 charge: {method:'POST', params:{charge:true}}
  /*You can use any of the standard HTTP actions with $resource.
   { 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
  */
});