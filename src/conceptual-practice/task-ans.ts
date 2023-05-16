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







// ======================

// 6.Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates = {
    latitude: number,
    longitude:number,
}
const coordinates: Coordinates = {
    latitude: 34.55,longitude:34.7
}
console.log(coordinates.latitude);
console.log(coordinates.longitude);
// 7.Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").
enum Color{
    Red="Red",
    Green="Green", Blue="Blue"
}
function takesColor(value: Color): void {
    if ( value === Color.Red) {
        console.log('You selected Red');
    }
    else if ( value === Color.Blue) {
        console.log('You selected Blue');
    }
    else if ( value === Color.Green) {
        console.log('You selected Green');
    } else {
        console.log('You selected nothing');
    }
    
}
takesColor(Color.Red);
// 8.Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.
class Shape{
    calculateArea():number {
        return 0;
}
}
class Rectangle extends Shape{
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea():number {
        return this.length*this.width
    }

}
class Circle extends Shape{
   
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
        
    }
    calculateArea():number {
        return Math.PI * this.radius * this.radius;
    }

}

function getArea(value: Shape) {
    console.log(value.calculateArea());
}
// console.log(object);
getArea(new Rectangle(10,20))
getArea(new Circle(10))

// 9.Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car{
    make:string,model:string,year:number
}
interface Driver{
    name:string,licenseNumber:number
}

function CarWithDriver(car:Car , driver:Driver):{} {
   return {car,driver}
}
const car:Car={model:'ss',year:2023,make:'eee'}
const driver :Driver= { name: 'ssRR', licenseNumber: 8765 }
console.log(CarWithDriver(car, driver));

// 10.Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.
function getUppercase(params: string | string[]): string | string[] |undefined {
    if (typeof params === 'string') {
        return params.toUpperCase();
    }
  else if (Array.isArray(params)) {
     return  (params.map(param=>  param.toUpperCase()))
    } 
}
console.log(getUppercase(['sumi', 'rashed']));
// 11.Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.
let initialValue: string | null = null;
initialValue='sili'
console.log((initialValue as string).length);

// 12.Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function UnknownParam(params: unknown) {
    if (typeof params === 'string'){
        console.log(`its string: ${params.toUpperCase()}`);
    } else if (typeof params === 'number') {
         console.log(`its number ${params*3}`);
    } else {
        console.log('undi');
    }
}
UnknownParam(100);


// 13.Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

function getFirstElement<T extends number|string|boolean>(array: T[]) {
    if (array.length < 0) {
       return 'soory no element';
    } else {
       return array[0]
    }
}
console.log(getFirstElement(['we', 'can']));

// 14.Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.
function withTwoParam(param1: string | number, param2: boolean | string[]) {
    if (typeof param1 === 'string' ) {
        console.log( param1.length);
    }
    else if (typeof param1 === 'number') {
        console.log(param1.toFixed(2)); 
    } 
     if (typeof param2 === 'boolean') {
        console.log(param2); 
    }
    else if (Array.isArray(param2)) {
        return param2.find(param=>console.log(param))
    } 
}
(withTwoParam('bal', ['false', 'true']));
// 15.Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

function filterArray<T>(array: T[],predicate:(item:T)=>boolean): T[]{
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (item) => item % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const names = ['Alice', 'Bob', 'Charlie', 'David'];
const longNames = filterArray(names, (item) => item.length > 5);
console.log(longNames); // Output: ['Charlie']