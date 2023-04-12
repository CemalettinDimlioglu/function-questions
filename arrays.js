const names = ["ali", "veli", "ayşe", "musa"]

names[2]= "selahaddin"
names[4]="murtaza"
console.log(names);



// console.log(names[2]);
// console.log(names);
// console.log(typeof names);
// const emptyAr = []

// names[0].toUpperCase()

// console.log(names[0].toUpperCase());
// console.log(names);
// // const a = names.toUpperCase()

// let arr = ['apple', 'banana', 'orange'];
// let uppercaseArr = arr.map(function(item) {
//   return item.toUpperCase();
// });
// console.log(uppercaseArr); 
// console.log(arr[2]);//

// output: ['APPLE', 'BANANA', 'ORANGE']


// console.log(arr[1]);
// // const isimler = ["ali", "veli"];
// const axel = isimler.map((f) => {
//   return f.toUpperCase();
// });
// // console.log(isimler[0].toUpperCase());
// console.log(axel);
// //?7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
// /
// Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
//  Öğrenci 2: Ada Bilgi 2012 (80,80,90)
//  Öğrenci 3: Ahmet Turan 2009 (60,60,70)
 

let stu1 = ["yigit", "adam", 2010, [70, 60, 80]]
let stu2 = ["adem", "aydın", 2013, [70, 90, 80]]
let stu3 = ["melike", "didar", 2005, [70, 80, 80]]

let students = [stu1,stu2,stu3];

let yigit_yas = new Date().getFullYear - students [0][2];
let adem_yas = new Date().getFullYear - students [1][2];
let melike_yas = new Date().getFullYear - students [2][2];

console.log(yigit_yas);
console.log(adem_yas);
console.log(melike_yas);
