"use strict";

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin

// function divideByNum(num){
//     if(num % 3 == 0 && num % 7 == 0){
//         console.log("Eded 3 ve 7 e bolunur")
//     }else{
//         console.log("Bolunmurrr!!   ");
//     }
// }


// divideByNum(21);






// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir


// function calcFact(num){
//     let factorial = 1;
    
//     if(num <=0){
//         console.log("Duzgun eded daxil edin!!")
//     }

//     for(let i = 1;i<=num;i++){
//         factorial *=i;
//     }

//     return factorial;
// }


// console.log(calcFact(4))






// 3) Her hansisa numbers elementleri olan arrayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin


// const numbers = [1,2,3,4,5];

// function calcNumbers(arr){

//     let sum = 0;
    

//     for (const num of arr) {
//         if(num % 2 == 0){
//             sum+=num**2;
//         }
//     }

//     console.log(sum);
// }


// calcNumbers(numbers);


// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin


// function checkUser(mail,password){
//     if(mail == "cavid@code.edu.az" && password == 12345){
//         console.log("Giris olundu")
//     }else{
//         console.log("Mail ve ya password yanlisdir")
//     }
// }


// checkUser("cavid@code.edu.az",12345);



// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir

// const numbers = [1,2,3,4,5,6,7];

// function sumOfOddNumbers(arr){
    
//     let sum = 0;

//     for (const num of arr) {
//         if(num % 2 == 1){
//             sum+=num
//         }
//     }

//     console.log(sum);

// }


// sumOfOddNumbers(numbers);





// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir


// const numbers = [1,2,3,4,5,6,7,8];

// function countOfEvenCount(arr){
//     let count = 0;

//     for (const num of arr) {
//         if(num % 2 == 0){
//             count++;
//         }
//     }

//     console.log(count);
// }


// countOfEvenCount(numbers);