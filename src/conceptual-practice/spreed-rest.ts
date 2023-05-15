
// spreed:
const myName: string[] = ['sumi akter', 'rashed ', 'abdullah'];
const description:(number| boolean|string)[] = [23, true];
description.push(...myName);
// console.log(description);
// rest:
const heroFunc = (...roll: number[]): number => {
    let sum: number = 0;
    roll.map(n => {
        sum = sum + n;
    })
    
    return sum;
}

console.log(heroFunc(2, 3,6,8,9,235));