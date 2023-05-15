// js:
// function normalFunc() {
// return 'dddddd'
// }

function normalFunc(a: number, b: number): number{
    return a + b;
}
console.log(normalFunc(3, 5));
// arrow function:
const ArrowFunc=(c: number, d: number): number => {
    return c + d;
}
console.log(ArrowFunc(3,7));