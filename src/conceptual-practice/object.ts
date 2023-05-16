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
    sName: string,
    readonly age: number,
    prof: string, 
    isMarried ?:boolean } = {
    sName: 'Hena khan',
    age: 32,
    prof:'acting'
}
// heroinObj.name = 'hena';
heroinObj.isMarried = true;
// console.log(heroinObj);
// object destructuring:
// const { sName:myHroName } = heroinObj;
const { sName } = heroinObj;
// console.log(myHroName);
console.log(sName);