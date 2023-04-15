// const names = ["ali", "veli", "ayşe", "musa"]

// names[2]= "selahaddin"
// names[4]="murtaza"
// console.log(names);

// // console.log(names[2]);
// // console.log(names);
// // console.log(typeof names);
// // const emptyAr = []

// // names[0].toUpperCase()

// // console.log(names[0].toUpperCase());
// // console.log(names);
// // // const a = names.toUpperCase()

// // let arr = ['apple', 'banana', 'orange'];
// // let uppercaseArr = arr.map(function(item) {
// //   return item.toUpperCase();
// // });
// // console.log(uppercaseArr);
// // console.log(arr[2]);//

// // output: ['APPLE', 'BANANA', 'ORANGE']

// // console.log(arr[1]);
// // // const isimler = ["ali", "veli"];
// // const axel = isimler.map((f) => {
// //   return f.toUpperCase();
// // });
// // // console.log(isimler[0].toUpperCase());
// // console.log(axel);
// // //?7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
// // /
// // Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
// //  Öğrenci 2: Ada Bilgi 2012 (80,80,90)
// //  Öğrenci 3: Ahmet Turan 2009 (60,60,70)

// let stu1 = ["yigit", "adam", 2010, [70, 60, 80]]
// let stu2 = ["adem", "aydın", 2013, [70, 90, 80]]
// let stu3 = ["melike", "didar", 2005, [70, 80, 80]]

// let students = [stu1,stu2,stu3];

// let yigit_yas = new Date().getFullYear() - students [0][2];
// let adem_yas = new Date().getFullYear() - students [1][2];
// let melike_yas = new Date().getFullYear() - students [2][2];

// console.log(yigit_yas);
// console.log(adem_yas);
// console.log(melike_yas);

// let yigit_not = ((students[0][3][0] + students[0][3][1] + students[0][3][2])/3).toFixed(1)
// let adem_not = ((students[1][3][0] + students[1][3][1] + students[1][3][2])/3).toFixed(1);
// let melike_not = ((students[2][3][0] + students[2][3][1] + students[2][3][2])/3).toFixed(1);

// console.log(yigit_not);
// console.log(adem_not);
// console.log(melike_not);

// let ogrenciler = [
//   ["Yiğit", "Bilgi", 2010, [70, 60, 80]],
//   ["Ada", "Bilgi", 2012, [80, 80, 90]],
//   ["Ahmet", "Turan", 2009, [60, 60, 70]],
// ];
// for (let i = 0; i < ogrenciler.length; i++) {
//   let notlar = ogrenciler[i][3];
//   let ortalama = (notlar[0] + notlar[1] + notlar[2]) / 3;
//   console.log(
//     "Öğrenci " +
//       (i + 1) +
//       " - " +
//       ogrenciler[i][0] +
//       " " +
//       ogrenciler[i][1] +
//       ", " +
//       (new Date().getFullYear() - ogrenciler[i][2]) +
//       " yaşında, not ortalaması: " +
//       ortalama.toFixed(2)
//   );
// }

// // const isimler = ["ali", "veli","deli"];
// // const array = [1, 2, 3];

// // let newArray = []
// // for (let i=0; i<isimler.length; i++){
// //   // newArray =isimler.map(isim=> `${isimler[i]} = ${array[i]}`)
// //   newArray = `${isimler[i]} = ${array[i]}`;
// // }
// // console.log(newArray);
// // // for (let i = 0; i < isimler.length; i++) {
// // //   console.log(`${isimler[i]} = ${array[i]}`);
// // // }

// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];
// const newArray = isimler.reduce(
//   (obj, key, i) => ({ ...obj, [key]: array[i] }),
//   {}
// );
// console.log(newArray);

// //? FOR IN ILE ORNEKLER

// // const sayilar =[-5,15,22,-4,45,78,-25];

// // let sonuc = 0;

// // for (let i in sayilar){
// //   sonuc += sayilar[i]
// // }

// // console.log(sonuc);

// const arr = [-5, 15, 22, -4, 45, 78, -25];

// let negatives =[];
// let positives =[];

// for(let j in arr){
//    if(arr[j]<0){
//     negatives.push(arr[j]);
//    }else {
//     positives.push(arr[j]);
//    }

// }
// console.log(negatives);
// console.log(positives);
// console.log(arr);

//SORU-3
//aşağıda verilen iki ayrı dizideki eşleşen indis elemanlarını birleştirerek saklayan ayrı bir uygulamayı for in döngüsü ile yazın
// const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
// const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];
//? 3.soru
//  const names = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
//  const lastnames = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];
//  const fullnames = [];
//  for (let i in names) {
//    fullnames.push(`${names[i]} ${lastnames[i]}}`);
//  }
//  console.log(fullnames);

// SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudent = (names) => {
  let counter = 0;
  for (let i in students) {
    if (names.toLowerCase() === students[i]) {
      counter++;
    }
  }
  if (counter===0){
    return `${names} can not be found`;
  }
  else{
    return `${names} found ${counter}  times`;
  }
};
console.log(findStudent("ali"));
console.log(findStudent("MEHMET"));
console.log(findStudent("CAN"));

const numbers = [-5, 15, 22, -4, 45, 78, -25];

//? Dizideki elmanların toplamını bulan programı for of ile yazınız.
const sayilar2 = [-5, 15, 22, -4, 45, 78, -25];
let sonuc2 = 0;
for (let item of sayilar2) {
  sonuc2 += item; // sonuc2= sonuc2+ item;
}
console.log(sonuc2);