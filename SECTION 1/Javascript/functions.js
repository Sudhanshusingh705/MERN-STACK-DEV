var n = 123, r, rev=0;
while(n!=0){
    r=n%10;
    rev=rev*10+r;
    // n=Math.floor(n/10);
    n= parseInt(n/10);
}
console.log(rev);

function addNums(a,b){
    console.log(a,b);
    return a+b;
    var c = a+b;
    console.log(c);
}

addNums(576, 666);

const proNums = function (x, y){
    console.log(x*y);
    return x*y;
}
const res = proNums(36 , 62)
console.log(res);

const sumProd = (a, b) => {
    const sum = a+b;
    const prod = a*b;
    return [sum, prod];
}
const [ s,p ] = sumProd(2345,345);
console.log(s,p);