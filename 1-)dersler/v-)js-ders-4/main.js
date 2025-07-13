// * Javascript Scope Kavramı

// Scope javascript'de değerlerin erişilebilir olduğu alanı ifade eder.Temelde 3 tip scope vardır:

// 1-) Global Scope:

// Program içerisinde her yerden erişilebilen scope'tur. Bu scope'a sahip değişkenlere global değişkenler denir.

// 2-) Function Scope:

// Fonksiyon içerisinde erişilebilen scope'tur.Bu scope'a sahip değerlere sadece tanımlandığı function içerisinde erişilebiliriz.

// 3-) Block Scope:

// Bir kod bloğu içerisinde erişilebilen scope'tur. Bu scope'a sahip değerler sadece tanımlandığı block içerisinde erişilebiliriz.

let kullaniciAdi = "alperenuzun"; // global scope

document.write(`Kullanıcı adı: ${kullaniciAdi} <br/>`);

const çiktiVer = (isim) => {
  document.write(`Kullanıcı ismi: ${isim} <br/>`);
};

çiktiVer(kullaniciAdi);

if (4 == 4) {
  document.write(`Kullanıcının adı: ${kullaniciAdi} <br/>`);
}

function toplamaİşlemi() {
  let sayi1 = 12 + 3 + 78 + 44; // function scope
}

toplamaİşlemi();

// document.write(`Toplam Sonuç: ${sayi1} <br/>`); sayi1 function scope'a sahip bir değişken olduğundan yalnızca toplamaİşlemi fonksiyonu içerisinde erişilebilir.

if (true) {
  let öğrenciAdi = "Ayla Ekici"; // block scope
}

// document.write(`Öğrenci: ${öğrenciAdi} <br/>`); öğrenciAdi block scope'a sahip bir değişken olduğundan yalnızca if bloğu içerisinde erişilebilir.

let kursAdi;

if (true) {
  kursAdi = "Udemig";
}

document.write(`Kurs: ${kursAdi} <br/>`);

// ! Özetle programlar içerisinde değişkenlere birden fazla yerde erişmek isteyebiliriz.Ör. bir fonksiyon içerisinde hesaplanan değere fonksiyonun dışarısında erişmek isteyebiliriz.Bu durumda birden fazla yerde erişilmek istenen değişkenin scope'u global scope olarak ayarlanmalıdır.

// * Javascript Tarih Objesi

// Javascript'de güncel tarih verisine erişmek için "Date" objesi kullanılır.Bu obje içerisinde sahip olduğu metotlar sayesinde gün,saat,dakika,saniye,... gibi dinamik değerlere erişebilmemizi sağlar.

// Date objesinde yararlanmak için ilk olarak bu objeden bir örnek almalıyız.Javascript'de örnek alma işlemleri "new" keywordünün devamında bu yapının adını yazılarak yapılır.

const date = new Date();

document.write(`Tarih: ${date} <br/>`);

// ! getDate: Tarih objesi içerisinden gün verisini almak için kullanılır.

document.write(`Gün: ${date.getDate()} <br/>`);

// ! getMonth: Tarih objesi içerisinden ay verisini almak için kullanılır.Javascript ayları bir dizi şeklinde tuttuğundan ayları sırasıyla 0-11 arasında numaralandırır.Bu durumu düzeltmek için bu metodun sonuna +1 yazarız.

document.write(`Ay: ${date.getMonth() + 1} <br/>`);

// ! getFullYear: Tarih objesi içerisinden yıl verisini almak için kullanılır.

document.write(`Yıl: ${date.getFullYear()} <br/>`);

// ! getDay(): Tarih objesi içerisinden bulunulan günün haftanın kaçıncı günü olduğunu almak için kullanılır.

document.write(`Haftanın kaçıncı günü: ${date.getDay()} <br/>`);

// ! getHours: Tarih objesi içerisinden saat verisini almak için kullanılır.

document.write(`Saat: ${date.getHours()} <br/>`);

// ! getMinutes: Tarih objesi içerisinden dakika verisini almak için kullanılır

document.write(`Dakika: ${date.getMinutes()} <br/>`);

// ! getSeconds: Tarih objesi içerisinden saniye verisini almak için kullanılır.

document.write(`Saniye: ${date.getSeconds()} <br/>`);

// ! getTime: 1 Ocak 1970'den bu yana geçen zamanı milisaniye cinsinden almak için kullanılır.Bu metot local projelerde uniq değerler elde edilmek için kullanılabilir.

document.write(`1970 --: ${date.getTime()} <br/>`);

// ! toLocaleDateString:Belirtilen bir konuma göre tarih formatlaması yapmak için kullanılır.

document.write(
  `Tr Konumuna Göre Tarih Formatı: ${date.toLocaleDateString("tr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} <br/>`
);

// ! Özetle javascript'de güncel tarih verisine erişmek istersek bunu Date objesi aracılığıyla yapabiliriz.

// * Javascript setTimeout ve setInterval

// Javascript'de zamana bağlı işlemler yapmak için setTimeout ve setInterval metotları kullanılır.Bu iki metot kendisine verilecek zamanı milisaniye cinsinden alır.

// setTimeout: Belirli bir zaman geçtikten sonra bir işlem tetiklemek için kullanılır.

// setInterval: Belirli bir zaman aralığında bir işlem tetiklemek için kullanılır.

// todo: 3s sonra ekrana "Udemig Akademiden Selamlar" yazdırınız.

// setTimeout(() => {
//   document.write(`Udemig Akademiden selamlar <br/>`);
// }, 3000);

// todo: 2s aralıkla ekrana "Udemig Akademide Javascript Derslerine Devam Ediyoruz 🤩" yazdırınız.

// setInterval(() => {
//   document.write(
//     `Udemig Akademide Javascript Derslerine Devam Ediyoruz 🤩 <br/>`
//   );
// }, 2000);

// * Javascript Set-Map Yapıları

// Set: Javascript'de benzersiz yapılar elde etmemizi sağlar.Set yapısı "new Set()" şeklinde örneği alındıktan sonra örneği üzerinden Set yapısı kullanılabilir.

// todo: Şehirler için bir set yapısı oluştur ve set yapısı içerisindeki metotları kullan.

const şehirlerSet = new Set();

//? Set yapısına eleman eklemek için add metodu kullanılır.Bu metot () içerisinde eklenmek istenen elemanların yazılmasını ister.

şehirlerSet.add("Malatya");
// şehirlerSet.add("Malatya"); Malatya şehirlerSet'in içerisinde bulunduğundan eklenmez.
şehirlerSet.add("İstanbul");
şehirlerSet.add("Ankara");
şehirlerSet.add("Hatay");
şehirlerSet.add("Bursa");
şehirlerSet.add("Konya");
şehirlerSet.add("Mardin");

//? Set yapısından bir eleman silmek için delete metodu kullanılır.Bu metot () içerisinde Set yapısından kaldırılmak istenen elemanın yazılmasını ister.

şehirlerSet.delete("Bursa");

//? Set yapısını sıfırlamak için clear metodu kullanılır.

şehirlerSet.clear();

// console.log(şehirlerSet);

// ! Özetle Set yapısı içerisinde benzersiz elemanlar elde edilir.İçerisinde tekrar eden elemanların bulunduğu bir yapıyı Set yapısı ile düzenleyebiliriz.

const şehirler = [
  "Malatya",
  "Konya",
  "Hatay",
  "İzmir",
  "Gaziantep",
  "Malatya",
  "Konya",
  "Hatay",
  "İzmir",
  "Gaziantep",
];

const karmaŞehir = new Set(şehirler); // Bir diziyi set yapısına çevirme

// console.log(karmaŞehir);

const düzenliŞehirler = Array.from(karmaŞehir); // Set yapısını diziye çevirme

düzenliŞehirler.push("Elazığ");

// console.log(düzenliŞehirler);

// Map: İçerisinde key-value değer çiftleri halinde değerler tutan javascript yapısıdır.Map yapısını kullanabilmek için Set yapısında olduğu gibi örnek alınmalıdır.

const dillerMap = new Map();

//? Map'e eleman eklemek için set metodu kullanılır.

dillerMap.set("tr", "Türkçe");
dillerMap.set("en", "İngilizce");
dillerMap.set("az", "Azerbaycan");
dillerMap.set("az", "İsveç");

//? Map'den eleman kaldırmak için delete metodu kullanılır.

// console.log(dillerMap);

//? Map yapısı içerisinde bir key'e sahip eleman varmı bunu kontrol etmek için has metodu kullanılır.

// console.log(dillerMap.has("tr"));

dillerMap.delete("az");

// todo: Kullanıcıdan Pc tarafından oluşturulmuş 0-100 arasındaki bir tam sayıyı 3 tahmin hakkında tahmin etmesini isteyen eğer bilirse "Doğru Tahmin ettiniz" bilemezse ve hakkı varsa "Bilemediniz,daha büyük-küçük sayı giriniz" şeklinde geri bildirimde bulunan code-script'i yazınız.

// const randomSayı = Math.round(Math.random() * 100);

// console.log(randomSayı);

// for (let hak = 1; hak <= 3; hak++) {
//   const tahmin = Number(prompt(`0-100 arasında bir tam sayı giriniz:`));

//   if (tahmin == randomSayı) {
//     alert(`Tebrikler doğru bildiniz !! ✅✅ `);
//     hak = 3;

//     break;
//   } else if (tahmin > randomSayı) {
//     alert(`Yanlış tahmin.Lütfen daha küçük bir sayı giriniz.`);
//   } else if (tahmin < randomSayı) {
//     alert(`Yanlış tahmin.Lütfen daha büyük bir sayı giriniz.`);
//   }

//   if (hak === 3) {
//     alert(`Maalesef bilemediniz.Hakınız kalmadı.Random sayı: ${randomSayı}`);
//   }
// }

// Bir web sitesi temelde iki ana kısımdan oluşur.Bu kısımlar "Frontend(Ön Uç)" ve "Backend(Arka Uç)" dir.Fronten kullanıcının gördüğü kısımdır backend ise web sitesinin asıl işlemlerinin yapıldığı kısımdır.Ör:Kimlik doğrulama,sipariş işlemleri,...

// Bu iki ana kısım arasında bir haberleşme kurmak için ise "API" kullanılır.Api frontend ve backend arasında haberleşme ve veri aktarımı sağlar.Api temelde iki ana kısımdan oluşur.Bunlar "BASEURL" VE "ENDPOİNTS" dir.Endpoint'ler veri göndermek ve almak için. özelleştirilimiş yapılardır.Baseurl ise endpoint'lerin bir arada tutulduğu kapsayıcıdır.Api frontend ve backend'in haberleşmesini "fetch" metodu ile sağlar.

// Frontend kısmına "client" backend kısmına ise server da denilir.

// Server veri alışverişi için özelleştirilmiş pc'lerdir.Bu pc'ler kendi arasında 1 ve 0'lar ile haberleşir.Biz server ile haberleşmek istediğimizde server ile aramızda ortak bir dil ararız.Bu dil ise JSON'dır.Json hem js koduna hemde makine koduna yakındır.

// Frontend kısmında direkt olarak JSON verisi kullanılamaz.Bu sebeple JSON VE JS kodları arasında dönüşüm yapmamız gerekir.Bu dönüşümü yapmamız için ise "JSON.parse()" ve "JSON.stringify()" metotları ile yaparız.

// JSON.stringfy(): Js kodunu JSON koduna çevirmek için kullanılır.

// JSON.parse(): JSON kodunu JS koduna çevirmek için kullanılır.

// todo: JSON tipinde bir veri oluşturunuz sonrasında bu veriyi JS formatına çeviriniz.Sonrasında bir JS verisini ise JSON formatına çeviriniz.

const jsonVeri = `
{
  "array": [
    1,
    2,
    3
  ],
  "boolean": true,
  "color": "gold",
  "null": null,
  "number": 123,
  "object": {
    "a": "b",
    "c": "d"
  },
  "string": "Hello World"
}`;

// console.log(jsonVeri);

const JsVerisi = JSON.parse(jsonVeri);

// console.log(JsVerisi);

const JsonVerisi1 = JSON.stringify(JsVerisi);

// console.log(JsonVerisi1);

// Frontend ve backend arasındaki haberleşmeyi api fetch metodu ile sağlar.Bu metot kendisine verilen url'e istek atar ve veri alışverişini sağlar.

// Javascript'de aksi söylenmedikçe kodlar sekrondur.Yani birbiri ardınca çalışır.Fakat api işlemleri asekron şekilde yönetilmelidir.Bu sebeple api işlemleri sırasında async-await  veya promise yapısı kullanılır.

//* Async-Await

// Async-await ile işlemler yapılırken asekron çalışması istenen kısıma "await" ibaresi iliştirilir.Eğer bu işlev bir fonksiyon içerisinde gerçekeşleşiyorsa fonksiyonun başına async iliştirilmelidir.Aksi halde çalışmaz.

async function getUsers() {
  // Api'a istek at.Api isteği asekron olmalıdır.Bu sebeple başına await koyduk.
  const response = await fetch("https://dummyjson.com/users?skip=1");

  // Api JSON veri tipinde değer döndürür.JSON verisi js koduna çevrilmelidir.Burada JSON -> JS dönüşümü yapıldı
  const data = await response.json();

  // Api bir endpoint'deki tüm verileri tek seferde kullanıcıya döndürmez.Çünkü tüm verileri tek seferde göndermek server'ı zorlar.Bu sebeple api'lar verileri sayfa sayfa olacak şekilde yönetir.Bu sayfalar arasında geçiş için bizden parametre ister.

  // Api'a parametre geçmek için ? sonrasında geçilecek parametre adı,= ve parametrenin değeri yazılır.Eğer birden fazla parametre geçilecekse bu parametreler & ile birbirinde ayrılır

  //   console.log(data);
}

getUsers();

// * Promise:

// Asekron yönetim için kullanılabilecek bir diğer yapı ise promise'dir.Promise yapısında "Bu işlemi yap sonra şu işleme geç" gibi bir mantık vardır.İlk olarak yapılmasını istenen işlem yazılır sonrasında .then() yazılarak yapılmasını istenen işlemden sonra ne yapılavacaksa onun kodlaması yapılır.

// todo: Recipes için api'a istek at,api'dan veri gelince alert ile veriler geldi yazdırın.

fetch("https://dummyjson.com/recipes")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
