// function* generatorFunction(name) {
//   yield "My";
//   yield "Name";
//   yield "is";
//   yield "Basit";
// }
// // generator function return an object on which we call next() which return
// // shape object have two properties value and done.
// let obj = generatorFunction("Name");
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// // obj = generatorFunction();
// console.log(obj.next()); // on last call we don't have yield so it will return undefined
// so value have undefined and done becomes true.
// console.log("---------------------------------");

// function* generatorFunction1() {
//   yield "My";
//   yield "Name";
//   return "is"; // will end here return will make done true.
//   yield "Basit";
// }
// const obj1 = generatorFunction1();
// console.log(obj1.next());
// console.log(obj1.next());
// console.log(obj1.next());
// console.log(obj1.next());
// console.log(obj1.next());

// console.log("---------------------------------");

// function* iteratableFunction() {
//   yield "My";
//   yield "Name";
//   yield "is";
//   yield "Basit";
// }
// for (let value of iteratableFunction()) {
//   console.log(value);
// }
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// for (let value of generator) {
//   alert(value); // 1, then 2
// }

// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let sequence = [0, ...generateSequence()];

// alert(sequence);

function* generatorFunction() {
  while (true) {
    yield "My";
    yield "Name";
    yield "is";
    yield "Basit";
  }
}
// generator function return an object on which we call next() which return
// shape object have two properties value and done.
let obj = generatorFunction();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.return("End"));
console.log(obj.next());
console.log(obj.next());

// function* gen(name) {
//   while (true) {
//     yield name;
//   }
// }
// const g = gen("Ali");
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.return("bye"));
// console.log(g.throw("Error"));
// let i = 2;
// function* gen(name) {
//   while (i > 0) {
//     yield name;
//     yield "b";
//     i--;
//   }
// }
// console.log(i);
// let g = gen("Ali");
// console.log(i);
// console.log(g.next());
// console.log(i);
// console.log(g.next());
// console.log(i);
// console.log(g.next());
// console.log(i);
// g = gen("Ahamd");
// console.log(i);
// console.log(g.next());
// console.log(i);
// console.log(g.next());
// console.log(i);
