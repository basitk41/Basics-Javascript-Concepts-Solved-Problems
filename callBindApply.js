let funcOne = function(a,b){
    console.log(a,b);
    console.log(this);
};
//const funcBind = funcOne.bind({name:'Basit'},'Hi','I am Bind Method'); // create new function object.
funcOne = funcOne.bind({name:'Ali'},'Hi','I am Bind Method'); // create new function object.
funcOne(); // inside function this will reference the object we pass in bind method
//funcBind(); // inside function this will reference the Global object.
funcOne.call({name:'Ali'},'Hi','I am Call Method');
funcOne.apply({name:'Khan'},['Hi','I am Apply Method']);

// const funcNew = new funcBind();
// funcNew.call({name:'Ali'},'Hi','I am Call Method');



/////////////////////////////////////////
// this , implicit, explicit, hard, new binding
// const myFunction = function () {
//     console.log(this); // reference window/global object.
//   };

//   // call it
//   myFunction();
// /////////////////////////
  const myObject = {
    myMethod: function () {
      console.log(this); // we don't know what will be the value
    }
  };
const myMethod = function () {
    console.log(this);
  };
  
const myObject = {
    myMethod: myMethod
  };

// myMethod(); // reference the global object
// myObject.myMethod(); // reference the object in which its called.

// //This is called implicit binding

//Explicit binding
//This is done with call() or apply()

// const myMethod = function () {
//     console.log(this);
//   };
  
// const myObject = {
//     myMethod: myMethod
//   };
  
//   myMethod() // this === window
//   myMethod.call(myObject, args1, args2, ...) // this === myObject
//   myMethod.apply(myObject, [array of args]) // this === myObject

//Hard binding
// const myMethod = function () {
//         console.log(this);
//       };
      
// const myObject = {
//         myMethod: myMethod
//       };

// myMethod = myMethod.bind(myObject);

// myMethod();  // this === myObject

// const myMethod = function () { 
//     console.log(this.a);
//   };
  
//   const obj1 = {
//     a: 2
//   };
  
//   const obj2 = {
//     a: 3
//   };
  
//   myMethod = myMethod.bind(obj1); // 2
//   myMethod.call( obj2 ); // 2

class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

class Bird {
  get name() {
    return 'Tweety';
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari
