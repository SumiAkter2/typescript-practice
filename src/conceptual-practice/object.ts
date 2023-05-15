// js:
// const student = {
//     name: 'sumi',
//     roll: 3,
//     job: 'student',
// }
const Student: {name: string, roll: number, isMarried: boolean}= {
    name: 'sumi',
    roll: 1,
    isMarried:true,
}
const heroinObj: {
    name: string,
    readonly age: number,
    prof: string, 
    isMarried ?:boolean } = {
    name: 'Hena khan',
    age: 32,
    prof:'acting'
}
heroinObj.name = 'hena';
heroinObj.isMarried = true;
console.log(heroinObj);