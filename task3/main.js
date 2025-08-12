let nume="Rfida yasser"; 
console.log("Rofida yasser");
let age=20;
console.log(20);
let unsingvar=true;
console.log(unsingvar);
let unsing=[90,80,70];
console.log(unsing[1]);
let s=90+60+80;
console.log(s);
let y=240/3;
console.log(y);
let avaradge=50;
console.log(avaradge<=60);
console.log(avaradge==40);
if(avaradge>=90){
    console.log("Excellent")

}
else if(avaradge<=75)
{
    console.log(" very good")

}
else if(avaradge>=60)
{
    console.log("  good")

}
else 
{
    console.log(" faild")

}
let sub="subject1";
switch (sub) {
    case "subject2" :
        console.log("math")
        
        break;
    case "subject1" :
        console.log("English")
        
        break;
    case "subject2" :
        console.log("Science")
        
        break;
    
        
        
    default:
        
 console.log("Science")
        
}

let grads=[200,20,60,70];
for(let i=0;i<grads.length;i++){
console.log(grads[i]);

}




let num=5;
while(num<5){

    console.log("done")
}
let num2=11;
do{
console.log("done")

}while(num2<11);

let numbers = [1, 2, 3, 4, 5, 6];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += numbers[i];
}
console.log("Sum using for loop:", sumFor)
let sumWhile = 0;
let index = 0;
while (index < numbers.length) {
    sumWhile += numbers[index];
    index++;
}
console.log("Sum using while loop:", sumWhile);

function calctotal(grades)
{
    let total = 0;
    
for(let i=0;i<grades.length;i++){
    total+=grades[i];
    return total;
}

}

const calcAverage=(grades)=>{
       let total = calctotal(grades);
    return total / grades.length;

}
    
let gradesArray = [80, 90, 75, 85];
console.log("Total Grades:", calctotal(gradesArray));
console.log("Average Grades:", calcAverage(gradesArray)); 