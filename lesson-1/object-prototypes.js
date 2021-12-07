let obj = {
  test: 'one',
  method() {
    console.log('Do something!');
  }, 
  number2: "two",

}

// console.log(obj.propertyIsEnumerable('method'));
// console.log(Object.keys(obj));

// console.log(obj.propertyIsEnumerable('length'));
// for (property in obj) {
//   console.log(property);
// }

let arr = ['a','b'];

console.log(arr.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__);

let obj1 = {
  fantastic: 'abc',
}
let obj2 = Object.create(obj1);
obj2.test = 'anotherone';
console.log(obj2.hasOwnProperty('fantastic'));
console.log(obj2.fantastic);
console.log(obj2.__proto__);
console.log(obj2.constructor);



let toyota_car = {
  make: 'toyota', 
  engine: 'v6',
  isOn : false,
  start(){
    this.isOn = true;
  },
  stop(){
    this.isOn = false;
  }
}
let corolla = Object.create(toyota_car);
console.log(corolla.make);
corolla.steering = "power";
toyota_car.steering = "test";
console.log(corolla.steering);
console.log(toyota_car.steering);
console.log(toyota_car.isOn);
console.log(corolla.isOn);
// corolla.start();
console.log(toyota_car.isOn);
console.log(corolla.isOn);

console.log(corolla);

