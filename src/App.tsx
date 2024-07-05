import React from 'react'

function App() {
  let sayi = 5;
  let sayi2 = 10;
  let result = sayi * sayi2;
  console.log('result.....: ', result);

  /**
   * Javascript değişkenleri esnektir ve güvenli değildir.
   */
  let arr = [];
  arr.push(100);
  arr.push('selamlar');
  console.log(arr);
  
  const dizi:string[] = [];
  dizi.push('metin gir');

  let sayisalDeger:number; // değişken tanımlama
  let ifade:string;
  let demoObject:string | null = null; // bir değişkene birden fazla datatype atanabilir.
  ifade= 'değer';
  console.log('ifade UpperCase....: ', ifade.toUpperCase());
  // bu değer null olabileceği için methodlar çalışmaz.
  demoObject = 'Yeni bir değer geldi';
  if(demoObject){ // bir değişkenin varlığını kontrol eder. böylece değer var ise işlem yaparsınız. 
    console.log('demoObject UpperCase....: ', demoObject.toUpperCase());
  }

  const musteri = {
    id: 1,
    ad: "muhammet",
    adres: "yok"
  };



  return (
    <>
      <h1>BAŞLIK</h1>
      <div>{sayi}  ve {sayi2} gibi iki sayının çarpımı {result} dir </div>
      <label>müşteri adı....: {musteri.ad}</label>    
    </>
 
  )
}

export default App;

