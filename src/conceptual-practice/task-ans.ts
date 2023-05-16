// 1.Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.
function getSumOfArray(array: number[]): number {
    let sum: number = 0;
    const newArray = array.map(arr => {
        sum = sum + arr; 
    })
     return sum;
}

console.log(getSumOfArray([10,20,30]));
// 2.Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.
interface Person{
    name: string,
    age: number,
    email:string
}
const personObj: Person = {
    name: 'sumi akter', age: 23, email: 'abc@gmail.com'
}
    console.log(personObj.age);
    console.log(personObj.name);
console.log(personObj.email);

    // 3.Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.
function calculateArea(length: number, width: number): number{
    const area = length * width;
    return area;
}
console.log(calculateArea(10, 20));

// 4.Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.
function reverseArray<T>(array: T[]): T[]{
    const newArray = array.reverse();
    return newArray;
}
console.log(reverseArray<string>(['sumji', 'ffff', '3']));
console.log(reverseArray<number>([2, 3, 4]));


// 5.Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.
interface IRepository<T>{
    // id:R,
    // create: T,
    // update: K,
    // delete:S,
}
// class Repository implements IRepository{
//     constructor(id:R)
    
// }