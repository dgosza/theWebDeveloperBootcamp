var problem1 = -10;
console.log("all numbers between -10 and 19");
while(problem1 <= 19){
    console.log(problem1);
    problem1++;
}

console.log("all numbers even between 10 and 40");
var problem2 = 10;
while(problem2 <=40){
    if(problem2 % 2 === 0){
        console.log(problem2);
    }
    problem2++;
}

console.log("all numbers odd between 300 and 333");
var problem3 = 300;
while(problem3 <=333){
    if((problem3 % 2) >0){
        console.log(problem3);
    }
    problem3++;
}

console.log("all numbers divisible by 5 and 3 between 5 and 50");
var problem4 = 5;
while(problem4 <=50){
    if((problem4 % 5 === 0 && problem4 % 3 === 0)){
        console.log(problem4);
    }
    problem4++;
}

