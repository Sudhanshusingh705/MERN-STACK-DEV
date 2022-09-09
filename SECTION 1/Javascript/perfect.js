// var n, count=0;
// for(n=1;n<=100;i++){
//     for(let i=1;i<=6;i++){
//         if(n%i==0){
//             count=count+i;
//         }
//     }
//     if(count==n){
//         console.log(n);
//     }
// }


//fibonacci Series
x=0;
y=1;
console.log(x);
console.log(y);
for(let i=0;i<10;i++)
{
    let temp=x;
    x=y;
    y=temp + y;
    console.log(y);
}

//perfect square 

for(let i=1;i<=100;i++){
    let sqrt=i*0.5
    if(sqrt==parseInt(sqrt)){
        console.log(i);
    }
}


