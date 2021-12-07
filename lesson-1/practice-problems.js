function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription(){
      let string = `${this.title} was written by ${this.author}. ` + 
      `I ${this.read ? 'have' : "haven't"} read it.` ; 

    },
    readBook(){
      this.read = true;
    }
  };
}

//as we saw in problem 2, the following code creates a new property
// in the baz object instead of assigning the property in the 
//prototype object.

//write a function that searches the prototype chain of an object
//for a given property and assigns it a new value. 
//If the property does not exist in any of the prototype objects, 
//the function should do nothing.


function assignProperty(obj, prop, value){
  while (obj !== null) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = value;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

let fooA = {bar : 1};
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);
assignProperty(fooC, 'bar', 2);
console.log(fooA.bar);
console.log(fooB.bar);
console.log(fooC.bar);

