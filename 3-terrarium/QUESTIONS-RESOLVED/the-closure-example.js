// the-closure-example.js
function displayCandy(){
    let candy = ['jellybeans'];
    
    function addCandy(candyType) {
        candy.push(candyType);
    }

    addCandy('gumdrops');
    console.log(candy);
}
displayCandy();


function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();