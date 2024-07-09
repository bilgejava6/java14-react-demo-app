# REACT NOTLARIM

## Kurulum

    İlk olarak react uygulamalarını derlemek ve çalıştırak için gerekli olan NodeJS i kurmak 
    gerekli.
    - https://nodejs.org/en/download/package-manager

    DİKKAT!!!! Kurulum yapılan zaman içerisinde en güncel olan sürümü kullanın, aşağıda 
    görütülenen sürümler içinde bulunduğumuz zamanın en güncel hallederidir. Bu nedenle
    rakamlar aynı olmayabilir.

```bash
    # installs nvm (Node Version Manager)
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    # download and install Node.js (you may need to restart the terminal)
    nvm install 22
    # verifies the right Node.js version is in the environment
    node -v # should print v22.3.0
    # verifies the right NPM version is in the environment
    npm -v # should print 10.8.1
```

    ReactJS ve Farklı türlerde kurulumları 

    - https://react.dev/learn/typescript
    - https://create-react-app.dev/docs/getting-started

    Aşağıdaki kod ile yeni bir ReactJS uygulaması oluşturabilirsiniz ancak burada dikkat edilmesi
    gereken husus oluşturulan projenin javascript ile oluşturulması yani kodlama tarzı JS türünde
    bu nedenle TypeScript gibi farklı türleri bunun içerisine entege edemezsiniz.

```bash
    npx create-react-app yeni-uygulama
```
    Uygulamayı TypeScript temelli olarak kurmak.

```bash
    npx create-react-app yeni-uygulama --template typescript
```

## Uygulamayı başlatmak 

    Dikkat!!!! uygulamayı başlatmak için "npm start" komutu kullanırız. Ancak burada   
    önemli bir nokta bulunmakta, içerisinde bulunduğunuz dizin uygulamanızın kök dizini 
    olmalı, package.json dosyasını içeren konumda olmalısınız.

    Bu nedenle ilk olarak projenizi içeren klasörün içerisine giriniz.

```bash
    cd demo-app; // ilgili klasöre gir
    npm start; // uygulamayı başlat
```

## Uygulamanın Port numarasını değiştirmek

    Uygulamanız default olarak 3000 portunda ayağa kalkar, değiştirmek için 
    script komutlarını manipüle etmeniz gereklidir.

```json
  "scripts": {
    "start": "react-scripts start", // bu şekilde default tur 3000
  },
  // MACOS için
    "scripts": {
    "start": "PORT=19090 react-scripts start", 
  },
  // MACOS 
    "scripts": {
    "start": "export PORT=19090 react-scripts start", 
  },
  // WINDOWS 
    "scripts": {
    "start": "set PORT=19090 && react-scripts start", 
  },
  
```

## Kaynak kodlarının mümükün olduğunca gizlenmesini sağlamak

```json

 "scripts": {
    "build": "GENERATE_SOURCEMAP=false && react-scripts build"
  },

```

## Notlar
      Dikkat return işleminde sadece tek bir değer dönebilirsiniz. Bu nedenle 
  HTML TAG i olarak ta ek bir tag dönebilirsiniz.
      Buradaki asıl konu sadece bir kapsayıcı TAG dönülmesi, yani tüm tasarımınızı
  bir ana TAG ile sarmalar iseniz doğru bir şekilde çalışacaktır.
```js
function App() {
  return (
    <div>App</div>
  )
}
// yanlış kullanım
function App() {
  return (
    <h1>BAŞLIK</h1>
    <div>App</div>
    <footer></footer>
  )
}
// doğrusu v1
function App() {
  return (
    <div>
      <h1>BAŞLIK</h1>
      <div>App</div>
      <footer></footer>
    </div>
  )
}
// doğrusu v1
function App() {
  return (
    <>
      <h1>BAŞLIK</h1>
      <div>App</div>
      <footer></footer>
    </>
  )
}
```

```java
public Integer islemYap(){
  int sayi1 = new Random().nextInt();
  int sayi2 = new Random().nextInt();
  int toplam = sayi1 * sayi2;
  System.out.println("toplam...: "+ toplam);
  return toplam;
}
```

  Bir javascipt function içerisinde yazılan yanımlanan kodların return edilen HTML
  elementleri içerisinde kullanılabilmesi için {} eklemeniz gereklidir.


## Kullanışlı demo datalar

  - https://dummyjson.com/docs/auth#auth-refresh
  - https://randomuser.me/api/?results=5
  - https://app.quicktype.io/

## Proje içerisine yeni bileşenler eklemek ve Bootstrap kullanımı
  i install kısaltmasıdır. "bootstrap@5.3.3" Burada ilk kısım(@ öncesi) kurulacak bileşenin adını ikinci kısım ise ilgil bileşenin sürmünü tanımlar. İstediğiniz bir sürümü kurmak
  için bu kısmı değiştiriniz.

  - npm i bootstrap@5.3.3 

  Dikkat!!! bootstrap i tüm sistemde kullanabilmek için index.js yada index.tsx içerisine bootstrap.css in eklenmesi gereklidir.
  import 'bootstrap/dist/css/bootstrap.min.css';

## React Hooks

# useState

    react bir sayfada bileşenlerinin değişimlerini takip etmek ve yönetmek için Hook ları kullanır. Bir değişkenin durumunun
  değişmesi durumunda sayfanın render olamasını sağlamak için aşağıdablirtyilen şekilde bir kullanımla işlem yapılabilir.
  
```js
  // bu kullanım değişkenin takip edilmesini ve sayda render ini desteklemez.
  let userName;
  // set işlemi state in değişimini bileceği için sayfanın render emrinin verebilir.
  const [userName,setUserName] = useState('');
```

## React Router

  React ta sayfalar arasında gezinmek için index.tsx içerisinde render işlevinin istek atılan 
  URL ye göre sayfanın renderlanması gereklidir Bu işlemi bizim için yöneten ve kolaylaştıran
  react router dom paketini kullanıyoruz.

```bash
npm i react-router-dom
```
  Sonrasında sayfalama oluşturabilmek için index.tsx e şu 3 bileşeni eklyoruz.


## Sweet Alert Eklentisi

```bash
 npm install sweetalert --save
```
  
## FETCH & AXIOS Kullanımları


## Fonctional Component & Props

    bir komponent tanımladığınızda bunu içerisine muhtemelen bilgi göndermek isteyeceksiniz.
  bu nedenle bu bileşenler birer method gibi düşünüldüğünde içerisine değer alabilmektedir.
  siz bu function içerisiniz 'props' adı verilen bir atama işlemi ile değer yollayabilirsiniz.
  React componentleri tag etiketlerinin içerisine properti alabilir ve bu bilgilei kendilerinin
  oluşturan fonksiyonlara iletebilirler.
  