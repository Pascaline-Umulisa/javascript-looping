for(let n=1;n<=100;n++){
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz")
    }
    else if(n%3==0){
        console.log("Fizz")
    }
    else if(n%5==0){
        console.log("Buzz")
    }
    else{
        console.log(n)
    }
}


let sum=0
for(let i=1;i<1000;i++){
    if(i%3==0 || i%5==0){
        sum+=i   
    }
}
console.log("the sum of multiple of 3 and 5 is", sum)




for(let num=0;num<=20;num++){
    if(num%2==0){
        console.log(num, "is even")
    }
    else{
        console.log(num, "is odd")
    }
}



const num=[-2, 4,-5, 6,0]
let largest=num[0]
for(let i=0;i<num.length;i++){
    if(num[i]>largest){
        largest=num[i]
    }
}
console.log(largest)



function findLargest(num1,num2){
    if(num1>num2){
        console.log(num1, "is the largest")
    }
    else if(num2>num1){
        console.log(num2, "is the largest")
    }
    else{
        console.log("The numbers are equal")
    }
}
findLargest(10,40)


let year=2000;
while(year<=2022){
    if(year%4==0 && year%100!=0){
        console.log(year, "is a leap year")
    }
    else if(year%100==0 && year%400==0){
        console.log(year, "is a leap year")
    }
    year++
}

