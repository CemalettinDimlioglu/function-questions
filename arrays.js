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

let yigit_yas = new Date().getFullYear() - students [0][2];
let adem_yas = new Date().getFullYear() - students [1][2];
let melike_yas = new Date().getFullYear() - students [2][2];

console.log(yigit_yas);
console.log(adem_yas);
console.log(melike_yas);

let yigit_not = ((students[0][3][0] + students[0][3][1] + students[0][3][2])/3).toFixed(1)
let adem_not = ((students[1][3][0] + students[1][3][1] + students[1][3][2])/3).toFixed(1);
let melike_not = ((students[2][3][0] + students[2][3][1] + students[2][3][2])/3).toFixed(1);

console.log(yigit_not);
console.log(adem_not);
console.log(melike_not);

let ogrenciler = [
  ["Yiğit", "Bilgi", 2010, [70, 60, 80]],
  ["Ada", "Bilgi", 2012, [80, 80, 90]],
  ["Ahmet", "Turan", 2009, [60, 60, 70]],
];
for (let i = 0; i < ogrenciler.length; i++) {
  let notlar = ogrenciler[i][3];
  let ortalama = (notlar[0] + notlar[1] + notlar[2]) / 3;
  console.log(
    "Öğrenci " +
      (i + 1) +
      " - " +
      ogrenciler[i][0] +
      " " +
      ogrenciler[i][1] +
      ", " +
      (new Date().getFullYear() - ogrenciler[i][2]) +
      " yaşında, not ortalaması: " +
      ortalama.toFixed(2)
  );
}

const isimler = ["ali", "veli","deli"];
const array = [1, 2, 3];

let newArray = []
for (i=0; i<isimler.length; i++){
     newArray =isimler.map(isim=>isim+"="+ array[i])
}
console.log(newArray);