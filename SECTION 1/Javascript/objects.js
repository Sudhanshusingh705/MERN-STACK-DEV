let a=10;
let arr=[23,65,87,45,26,86];
//let students =[Raju, 5, 47638]
let stu = {name : 'Raju', age:5 , roll : 47638};
console.log(stu.name);
console.log(stu);
console.log(stu['roll']);

//this will add a new key and value
stu.address ='Bangalore'

stu.age = 30;
console.log(stu);
const product = {
    name : 'Laptop',
    price : 40000,
    colors : ['Black', 'White', 'Red', 'Blue']
}
console.log(product);
console.log(product.colors[1]);

// rollNo
// thisIsCalledCamelCase
const orders =[
    { id : 1456 , product  : 'Laptop', price : 40000},
    { id : 1457 , product  : 'Mobile', price : 50000},
    { id : 1458 , product  : 'Property', price : 60000},
];
//   let sum = 0;
  
//   for (let index = 0; index < orders.length; index++) {
//     sum += orders[index].price;
//   }
  
//   console.log(sum); // 
let s= 0;
for (let temp of orders){
    // console.log(temp.price);
    s+=temp.price;
};
console.log(s);

prices =orders.map( ord => ord.price )
console.log(prices);
const sum = prices.reduce ((p1,p2)=> {return p1+p2})
console.log(sum);
// orders.reduce((prod1,prod2) => {return prod1.price + prod2.price})

// console.log(orders[1].product);

// const { sname, age, roll, address} = stu;
// console.log(sname, age, roll, address);

// const brand = 'Samsung';
// const price = 40000;
// const model = 'Note 9'
// const rating = 4.9;

// const Mobile = { brand, price, model, rating};
// Mobile.brand= 'Apple';
// console.log(Mobile);
// console.log(Object.keys(Mobile));
// console.log(Object.values(Mobile));
// console.log(Object.entries(Mobile));