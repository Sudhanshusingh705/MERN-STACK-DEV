//1. Arrays can contain multiple data type
//2. Arrays are dynamic - can change size.
// 3. Arrays support index & slicing 

const  nums = [1,2,3,4,5,6,2, true, 'nice'];
console.log(nums);
const fruits = ['apple','banana','aam', 'santara']
console.log(fruits);
//Indexing
console.log(fruits[1]);

//SLICING
// console.log(fruits.slice[1,4 ])
// console.log(fruits.slice[1 ])
// console.log(fruits.slice[1,10 ])
// console.log(fruits.slice[5,10 ])

//adding elemts to araay


fruits.push('chery');
console.log(fruits);

//Removing elements from Array
//1. pop() - removes last element

console.log(fruits.pop());
console.log(fruits);
//2. Splice() - removes elements from array 
fruits.splice(1, 3 );
console.log(fruits);


//Traversing Elements

const numbers = [1,4,2,5,34,53,67,32]
for(let i=0;i<numbers.length;i++){
console.log(numbers[i]);
}
for(let n of numbers){
    console.log(n);
}
console.log('forEach');
numbers.forEach((a,i)=> {console.log(a, i)});