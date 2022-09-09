const num = [34, 6, 23, 67, 4, 7 ,2]
//map is function of array that returns a new array
const newNums = num.map((n=> {return '₹'+ n**2}));
console.log(newNums);

//Create a new array where if number is even , it is divided by 2
//if it is odd, it is multiplied by 2

const newarray = num.map((n) => { 
    if(n%2===0) return n/2;
else
    return n*2;
});
console.log(newarray);

//More shorter version 2
const numbers2 = num.map ( (n) => {
    return n%2==0 ? n/2 : n*2;
} ) 
console.log(numbers2);

//More shorter version 3
const numbers3 = num.map ( n => n%2==0 ? n/2 : n*2 ) 
console.log(numbers3);

console.log(num);
const newArr2 = [];
for(let i of num){
    if (i%2==0){
        newArr2.push(i);
    }
}
console.log(newArr2);

//filter is function of aray that returns a new array 
const filNumsEven = num.filter((n) => {return n%2==0});
const filNumsOdd = num.filter((n) => {return n%2!=0});
console.log(filNumsEven, filNumsOdd);


//WAP to filter numbers greater than 100 : [965, 45,754, 234,765,67, 87]
// const nums = 965, 45 ,754, 234,765,67, 87
const newArr3 = [];
for(let i of num){
    if (i>100){
        newArr3.push(i);
    }
}
console.log(newArr3);

// const filNumsgreater = num.filter((n) => {return n>100});
// console.log(filNumsgreater);

// console.log(parseInt{'₹985', substring(1)});
// console.log(100>985);

let pricesArr = ['₹123', '₹565', '₹52', '₹568']
const filterprice = pricesArr.filter((p) => {return p.substring(1)>100});
console.log(filterprice);

let brands = ['Asus', 'Lenevo', 'Dell', 'HP', 'Apple', 'Microsoft']
let search = "Asus";
const comparebrands = brands.filter((ele)=> {if(ele==search)return ele});
console.log(comparebrands);
console.log('Mubassir'.toLowerCase());
console.log('Mubassir'.includes('be'));