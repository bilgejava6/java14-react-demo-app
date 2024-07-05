import React from 'react'
import { IMusteri } from './models/IMusteri';

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

  const musteri:IMusteri = {
    id: 1,
    ad: "muhammet",
    adres: "yok",
    telefon: "0 555 666 9977",
    status: false
  };
  const musteri2:IMusteri = {
    id: 1,
    ad: "muhammet",
    adres: "İzmir",
    telefon: "",
    status: true
  };
  const musteri3:IMusteri = {
    id: 1,
    ad: "muhammet",
    adres: "",
    telefon: "00 55 778844",
    status: true
  };
 const musteriList = [musteri,musteri2,musteri3];

   /** 
    * JS kullandığınızda Object alanlarını belirtmek zorunda değilsiniz.
    */


  return (
    <>
      <h1>BAŞLIK</h1>
      <div>{sayi}  ve {sayi2} gibi iki sayının çarpımı {result} dir </div>
      {
        musteriList.map((m,index)=>
        <>
          <label>müşteri adı........: {m.ad}</label><br />
          <label>müşteri adresi.....: {m.adres}</label><br />
          <label>müşteri telefonu...: {m.telefon}</label><br />
          <br /><br />
        </>
        )
      }
    </>
 
  )
}

export default App;

