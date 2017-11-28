app.controller("menuController",[
    "$scope",
    /* purpose of $scope in an Angular application -> 
    The $scope object is used to make the model available to the view ,
    By $scope variables, the communication between the view and the controller can go both ways.*/
    function($scope){
        $scope.model = {title: 'Our Menu'};
        //Inside the main function($scope) method, to create a property named "title", enter the following code:
        
        $scope.$watch('model.mainDish',function(newValue,oldValue){
            if(newValue === 'BBQ Chicken Pizza'){
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });

        $scope.changeMainDish = function(item,value){
            $scope.model.mainDish.name = item;
            $scope.model.mainDish.price = value;
        }


        //the $scope object can also hold functions for your view to interact with using Angular's event handlers such as ng-click, ng-mouseover, etc.
        //This has several advantages, such as not having to manage event handlers separately or deal with the lifecycle of unbinding them when elements are removed from the DOM.
        //If this were a live application, you could simply submit the $scope values to an API and they would already have the values that had been set by Angular. Pretty cool
        
    }
])