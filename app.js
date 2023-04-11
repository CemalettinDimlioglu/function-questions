// function writeWords(ab,s){
  
//      for(let i = 1; i<= s;i++){
     
//           console.log(ab);
//           console.log(" ");

//      }
     

// }

// writeWords("hello", 5);
// writeWords("ali", 5);

//? dikdörtgenib alan ve çevresini hesaplayan 

function alanCevreHesapla(kisa,uzun){

     let alan = kisa*uzun;
     let cevre=(kisa+uzun)*2;
     return `alan : ${alan} cevre: ${cevre}`;
}
let sonuc = alanCevreHesapla(3,9)
console.log(alanCevreHesapla(3, 33));
console.log(alanCevreHesapla(4, 2));
console.log(alanCevreHesapla(6, 5));
console.log(alanCevreHesapla(2, 9));