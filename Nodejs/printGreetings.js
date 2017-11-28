//Importing with require()
var greetings = require('./greetings.js')

console.log('Swedish ' +
  greetings.sayHelloInSwedish() +
  ' & English ' +
  greetings.sayHelloInEnglish() +
  ' & Tatar ' +
  greetings.sayHelloInTatar())

/*Next, we can edit print-greetings.js to import methods 
from greetings.js using require(). The require() method
 returns whatever was exported from the imported module.
In this case, the require() method returns an object
 with three greeting methods and that object gets 
 assigned to the greetings variable. The greetings 
 methods are then accessible through the greetings 
 variable. */