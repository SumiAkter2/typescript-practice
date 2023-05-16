type myArray<T> = Array<T>;


const sumiName:myArray<string>= ['sumi akter'];
const sumiNames: boolean = true;
const sumiAge: myArray<number> = [45, 97, 67, 9];

type dataType = {
    name: string,
    age:number
}
const person: myArray<dataType> = [
    { name: 'ss', age: 45, }, 
    {name:'sdd',age:87}


]

// tuple in generic:
type GenericTuple<T, K> = [T, K];
type MyType<X, Y, Z> = [X, Y, Z];

const myNewArray: GenericTuple<number, string> = [78, 'ssss'];
const threeITems: MyType<boolean, string, number> = [true, 'yes', 1]

// function in generic:
const printValue = <T, K>(value: T, value2: K): T => {
    console.log(`${value},${value2}`);
    return value;
}
printValue<boolean, number>(true, 0)

// interface generic:
interface Ime <T,U>{
    name: string,
    age: T,
    isMarried:U
}
const me:Ime<number,boolean> = {
    name: 'sumi',
    age: 34,
    isMarried:true,
}


// key of :
type Movie = {
    name: string,
    duration: number,
    category:string
}
const MovieName = {
    name: 'agni',
    duration: 2.40,
    category:'action'
}
type myMovie = keyof Movie;
const myMovie1: myMovie = 'duration';
// console.log(MovieName[myMovie1]);
console.log(MovieName['name']);
