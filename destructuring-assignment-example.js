// Array Destructuring
let x, y, restof;
[x, y] = [10, 20];
console.log(x);
console.log(y);
//..
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x);
console.log(y);
console.log(restof);
// Object Destructuring
({x, y} = {x: 12, y: 21});
console.log(x);
console.log(y);
//..
({x, y, ...restof} = {x: 13, y: 43, m: 2, n: 5});
console.log(x);
console.log(y);
console.log(restof);
//..
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [firstName, secondName] = NamesList();

console.log(firstName);
console.log(secondName);
//..
const marks = {
    section1: { alpha: 23, beta: 5},
    section2: { alpha: 1, beta: 7 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1);
