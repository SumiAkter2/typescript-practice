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

// 3.
interface IProduct{
    id: number;
    name: string;
    price: number;
    category: string;
}
function filterProducts<T extends keyof IProduct>(
  products: IProduct[],
  criterion: T,
  value: IProduct[T]
): IProduct[] {
  return products.filter((product) => product[criterion] === value);
}
const products: IProduct[] = [
  { id: 1, name: 'Product A', price: 10, category: 'Category A' },
  { id: 2, name: 'Product B', price: 20, category: 'Category B' },
  { id: 3, name: 'Product C', price: 30, category: 'Category A' },
  { id: 4, name: 'Product D', price: 40, category: 'Category B' },
];

const filteredProducts = filterProducts(products, 'category', 'Category A');
console.log(filteredProducts);