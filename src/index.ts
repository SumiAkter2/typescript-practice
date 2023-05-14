// 1.
const userInfo: [number, string, string, boolean, string] = [101, 'Ema', 'Jonh', true, '2023'];
console.log(userInfo);

// 2.
function getCommonNumber(array1: number[], array2: number[]): number[] {
    const CommonNumber: number[] = []
    for (const num1 of array1 ){
        if (array2.includes(num1)){
             CommonNumber.push(num1);
        }
    }
    return CommonNumber;
}
const newArray1=[1,2,3,4,5]
const newArray2=[2,4,6,8]

console.log(getCommonNumber(newArray1, newArray2));