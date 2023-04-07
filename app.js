// Question 1
// let num1 = +prompt("Enter number 1")
// let num2 = +prompt("Enter number 2")
// let num;
// if(num1 > num2){
//     num = num1
// }else{
//     num = num2
// }
// console.log("the largest number is " + num)

// Question 2
// let numb = +prompt("Enter a number")
// if (numb > 0){
//     alert("the sign is +")
// }else{
//     alert("the sign is -")
// }

// Question 3
// let num1 = +prompt("Enter number 1")
// let num2 = +prompt("Enter number 2")
// let num3 = +prompt("Enter number 3")
// let num4 = +prompt("Enter number 4")
// let num5 = +prompt("Enter number 5")
// let num;
// if(num1 > num2){
//     num = num1
// }else if(num2 > num3){
//    num = num2
// }
// else if(num3 > num4){
//     num = num3
//  }else if(num4 > num5){
//     num = num4
//  }else{
//     num = num5
//  }
// console.log("the highest number is " + num);

// Question 4
// for(let i = 0 ; i <= 15; i++){
//     if(i % 2 === 0){
//         console.log(i + " is even");
//     }else{
//         console.log(i + " is odd");
//     }
// }

// Question 5
// let studentNum = +prompt("Enter your marks")
// if(studentNum < 60){
//     console.log("you got F grade");
// }else if(studentNum < 70){
//     console.log("you got D grade");
// }else if(studentNum < 80){
//     console.log("you got C grade");
// }else if(studentNum < 90){
//     console.log("you got B grade");
// }else if(studentNum < 100){
//     console.log("you got A grade");
// }else{
//     console.log("invalid marks");
// }


//Question 6
// for(let i = 1 ; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// Question 7
let patt = ""
for(i=1; i <= 5; i++){
   for(j=0; j < i ; j++){
        patt += "*"
     }
     patt += "\n"
 }
 console.log(patt)
