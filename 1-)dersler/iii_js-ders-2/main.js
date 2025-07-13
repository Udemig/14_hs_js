// * Javascript String Metotları

// Javascript'de metin ifadelerin veri tipi string'dir.String'lerin sahip olduğu metotlar:

const text =
  "            Udemig akademiden selamlar.Frontend kursundaki sıradaki konumuz javascript.Javascript ile dinamik web siteleri oluşturabileceğiz.Javascript önemli bir programlama dilidir.Udemig akademi öğrencileri gümbür gümbür geliyor.             ";

document.write("String Metin: ", text, "<br/>");

// ! length: Bir string ifadenin karakter sayısını hesaplamak için kullanılır.Karakter uzunluğu hesaplanacak string ifadenin adından sonra .koyulup length metodu çağırılır.
document.write("--------------------------", "<br/>");

document.write("String Metinin Uzunluğu: ", text.length, "<br/>");

// ! toLocaleUpperCase: Bir string ifadenin her karakterini büyük harfe çevirir.
document.write("--------------------------", "<br/>");

document.write("String Büyük Harf: ", text.toLocaleUpperCase(), "<br/>");

// ! toLocaleLowerCase: Bir string ifadenin her karakterini büyük harfe çevirir.
document.write("--------------------------", "<br/>");

document.write("String Küçük Harf: ", text.toLocaleLowerCase(), "<br/>");

// ! indexOf: Bir string ifade içerisinde belirtilen bir kelimenin kaçıncı sırada olduğunu bulmak için kullanılır.
document.write("--------------------------", "<br/>");

document.write(
  "String Kelime İçerisinde frontend: ",
  text.indexOf("Frontend"),
  "<br/>"
);

// ! lastIndexOf: Bir string ifade içerisinde belirtilen birden fazla kez yazılmış kelimenin sonuncusunun kaçıncı index'te olduğunu bulmak için kullanılır.
document.write("--------------------------", "<br/>");

document.write(
  "String Kelime İçerisinde Udemig: ",
  text.lastIndexOf("Udemig"),
  "<br/>"
);

// ! slice: Bir string ifadenin belli bir aralığını almak için kullanılır.Bu metot bizden iki değer talep eder.Bunlar sırasıyla başlangıç index'i ve bitiş index'i dir. Başlangıç index'i zorunludur bitiş index'i ise opsiyoneldir.Yani başlangıç index'i bu metoda verilmelidir.Eğer başlangıç index'i verilip bitiş index'i verilmezse bu string kelimeyi başlangıç index'inden string'in sonuna kadar parçalar.
document.write("--------------------------", "<br/>");

document.write(
  "String Kelime İçerisinde 44-78 Arası: ",
  text.slice(44, 78),
  "<br/>"
);

document.write("--------------------------", "<br/>");
// ! replace: Bir string ifade içerisinde belirtilen bir kelimeyi başka bir kelime ile değiştirmek için kullanılır.Bu metot bizden string ifade içerisinde bulunacak ve değiştirilecek değerleri vermemizi ister.

document.write(
  "String İçerisindeki Javascript Yerine Phyton: ",
  text.replace("Javascript", "Phyton"),
  "<br/>"
);

document.write("--------------------------", "<br/>");

// replace metodu ile bir  güncelleme yapılırken eğer güncellenecek kelimeden birden fazla varsa bu durumda ilk bulunanı günceller diğerlerine karışmaz.

// ! replaceAll: Bir string ifade içerisinde yer alan birden fazla kelimeyi değiştirmek için kullanılır.

document.write(
  "String İçerisindeki Tüm Javascriptler Yerine Phyton: ",
  text.replaceAll("Javascript", "Phyton"),
  "<br/>"
);

// ! concat: Bir string ifadeyi başka bir string ifade ile birleştirmek için kullanılır.Bu metot birleştirme yapılacak string adından sonra .concat() diyerek kullanılır.() içerisinde birleştirilmek istenen değerleri yazmamızı ister.
document.write("--------------------------", "<br/>");

document.write(
  "String Birleştirilmiş: ",
  text.concat("Html ", "Scss ", "React ", "Css ", "Bootstrap "),
  "<br/>"
);

// ! includes: Bir string ifade içerisinde bir kelimenin olup olmadığını kontrol etmek için kullanılır.Kontrol edilen kelime varsa "true" yoksa "false" değer döndürür.
document.write("--------------------------", "<br/>");

document.write(
  "String İçerisinde Yusuf Var mı ?: ",
  text.includes("Yusuf"),
  "<br/>"
);

document.write(
  "String İçerisinde Udemig Var mı ?: ",
  text.includes("Udemig"),
  "<br/>"
);

// ! trim: Bir string ifadenin başlangıç ve bitişindeki boşlukları kaldırmak için kullanılır.
document.write("--------------------------", "<br/>");

document.write(
  "String İçerisindeki boşlukları kaldır: ",
  text.trim().length,
  "<br/>"
);

// ! split: Bir string ifadenin hangi karakterlere göre bölüneceğini belirlemek için kullanılır.Bu metot () içerisinde metin ifadenin hangi karakterlere göre bölüneceğini belirtir.
document.write("--------------------------", "<br/>");

const text1 = "Selamlar Udemig Nasılsınız Udemig Ne Yapıyorsunuz Udemig ";

document.write("String Böl: ", text1.split("Udemig"), "<br/>");

document.write("--------------------------", "<br/>");

// * Javascript Number Metotları

// Javascript'de number veri tipindeki ifadeler için kullanacağımız metotlar şunlardır:

const number = 143.242535;

document.write("Sayı:", number, "<br/>");

// ! toFixed(): Ondalıklı bir sayının devreden kısmının kaç basamaktan oluşacağını belirlemek için kullanılır.Bu metot () içerisinde sayının devreden kısmının kaç basamaktan oluşacağını belirtmemizi ister.

document.write("Sayı-1:", number.toFixed(1), "<br/>");

// ! Math.round(): Bir ondalıklı sayının en yakın tam sayıya yuvarlanmasını sağlar.Bu metot () içerisinde yuvarlanacak sayının yazılmasını ister.

document.write("Sayı-2:", Math.round(number), "<br/>");

// ! Math.floor(): Bir ondalıklı sayıyı en yakın bir alt tam sayıya göre yuvarlamak için kullanılır.

document.write("Sayı-3:", Math.floor(134.87678), "<br/>");

// ! Math.ceil(): Bir ondalıklı sayıyı en yakın bir üst tam sayıya göre yuvarlamak için kullanılır.

document.write("Sayı-4:", Math.ceil(134.17678), "<br/>");

// ! parseInt(): Number haricindeki ifadeleri number veri tipine çevirmek için kullanılır.

document.write("Sayı-5:", typeof parseInt("44"), "<br/>");

// ! Number(): Number haricindeki ifadeleri number veri tipine çevirmek için kullanılır.

document.write("Sayı-5:", typeof Number("44"), "<br/>");

// ! Math.random():0-1 arasında rastgele bir sayı üretmek için kullanılır.

document.write("Random Sayı:", Math.random(), "<br/>");

// Math.random() 0-1 arasında sayılar oluşturur.Ama proje içerisinde 0-1 arasında bir sayı çok kullanışlı değildir.Bu sebeple bu metot üzerinden bazı işlemler yaparak istediğimiz sayıları elde edebiliriz.

document.write("Random Sayı-1:", Math.round(Math.random() * 100), "<br/>");

document.write("--------------------------", "<br/>");

// * Javascript Diziler (Arrays)

// Javascript'de birden fazla veriyi bir arada tutmak ve kolayca yönetmek için diziler kullanılır.

// const kişi1 = "Alperen";
// const kişi2 = "Armağan";
// const kişi3 = "Ayla";
// const kişi4 = "Fadime";
// const kişi5 = "Fahri";
// const kişi6 = "Fatma";

// Verileri dizi ile yönetmek için ilk olarak bir dizi tanımlamalı sonrasında ise dizilerin sahip olduğu metotlar sayesinde verilerimizi yönetebiliriz.

// ? Dizi Nasıl Tanımlanır Ve Nasıl Atama Yapılır

// Bir diziyi tanımlarken var,let ve const anahtar kelimelerinden biri seçilir.Sonrasında diziye bir isim verilir.Verilen bu isim sonrasında atama operatörü çağırıldıktan sonra [] oluşturulur.Bu [] içerisinde dizinin elemanları yazılır.

const kişiler = ["Alperen", "Armağan", "Ayla", "Fadime", "Fahri", "Fatma"];

// ? Dizi Elemanlarına Erişme

// Tüm diziye erişme
document.write("Kişiler: ", kişiler, "<br/>");

// Dizinin spesifik bir elemanına erişme

// Bir dizinin elemanına erişmek için dizi isminden sonra [] koyulup [] içerisinde erişilmek istenen elemanın sırası yazılır.Ama bu durumda ufak bir hatayla karşılaşırız.1. elemana erişmek isterken 2.elemana erişiriz.Bunun sebebi dizilerdeki index kavramıdır.Diziler içerisindeki elemanları 1,2,3,... şeklinde değil 0,1,2,3,... şeklinde sayar.Bu duruma dizilerde index kavramı denir.

// Bu hatalı durumu düzeltmek için dizinin erişilmek istenen sıra sayısının bir eksiği yazılır.

document.write("Kişiler 1. Eleman: ", kişiler[0], "<br/>");
document.write("Kişiler 2. Eleman: ", kişiler[1], "<br/>");
document.write("Kişiler 3. Eleman: ", kişiler[2], "<br/>");

// todo: Diller adında bir dizi oluşturunuz.Bu dizi içerisine birkaç eleman atayınız.Sonrasında hem diziye hem de dizi içerisindeki bir elemana erişiniz.

const languages = ["javascript", "pyhton", "ruby", "c", "c+", "c#"];

document.write(languages, "<br/>");
document.write(languages[0], "<br/>");
document.write(languages[2], "<br/>");

document.write("--------------------------", "<br/>");

//  Javascript Dizi Metotları

// Javascript dizi metotları ile diziye eleman ekleyebilir,diziden eleman kaldırabilir,dizinin belirtilen index'indeki elemanına erişebilir ve güncelleyebiliriz.Bu metotlara bakalım:

const şehirler = ["Malatya", "Ankara", "İzmir", "Antalya", "İstanbul", "Hatay"];

document.write("Şehirler:", şehirler, "<br/>");

// ! push(): Bir dizinin sonuna eleman eklemek için kullanılır.Eklenecek elemanları () içerisinde yazmalıyız.

şehirler.push("Konya", "Gaziantep");

document.write("Şehirler-1:", şehirler, "<br/>");

// ! unshift(): Bir dizinin başına eleman eklemek için kullanılır.Eklenecek elemanları () içerisinde yazmalıyız.

şehirler.unshift("Kahramanmaraş");

document.write("Şehirler-2:", şehirler, "<br/>");

// ! pop(): Bir dizinin sonundan eleman kaldırmak için kullanılır.

şehirler.pop();

document.write("Şehirler-3:", şehirler, "<br/>");

// ! shift(): Bir dizinin başından eleman kaldırmak için kullanılır.

şehirler.shift();

document.write("Şehirler-4:", şehirler, "<br/>");

// ! slice(): Bir dizideki belirli bir aralığı almak için kullanılır.Bu metot bizden iki adet değer ister.Bunlar sırasıyla başlangıç ve bitiş index'leridir.Başlangıç index'i zorunludur.Bitiş index'i ise opsiyoneldir.Bitiş index'i verilmediğinde dizinin belirtilen başlangıç index'inden dizinin son elemanına kadar olan aralığı alır.

document.write("Şehirler 1-3 Arası:", şehirler.slice(1, 4), "<br/>");

// ! length: Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write("Şehirler Dizisi Uzunluğu:", şehirler.length, "<br/>");

// ! indexOf(): Bir dizi içerisinde belirtilen elemanın kaçıncı index'de olduğunu belirlemek için kullanılır.

document.write(
  "Şehirler Dizisi İçerisinde Antalya:",
  şehirler.indexOf("Antalya"),
  "<br/>"
);

şehirler.push("Antalya");

document.write("Şehirler-5:", şehirler, "<br/>");

document.write(
  "Şehirler Dizisi İçerisinde Antalya:",
  şehirler.indexOf("Antalya"),
  "<br/>"
);

// ! lastIndexOf(): Bir dizideki bulunmak istenen elemandan birden fazla varsa bu noktada sonuncu index'deki elemanı bulmak için kullanılır.

document.write(
  "Şehirler Dizisi İçerisinde Antalya:",
  şehirler.lastIndexOf("Antalya"),
  "<br/>"
);

// ! concat(): Bir diziye başka bir diziyle veya elemanla birleştirmek için kullanılır.

document.write(
  "Şehirler Dizisi Birleştirilmiş:",
  şehirler.concat("Kütahya", languages),
  "<br/>"
);

// ! reverse(): Bir diziye takla attırmak için kullanılır.

document.write("Şehirler Takla Atmış:", şehirler.reverse(), "<br/>");

// ! join(): Bir dizinin elemanlarını belirtilen ayraca göre bölüp geriye bir string döndürür.

document.write("Şehirler Bölünmüş:", şehirler.join(" 🔥"), "<br/>");

document.write("--------------------------", "<br/>");

document.write("Şehirler-6:", şehirler, "<br/>");

// ! splice(): Bu metot dizilerin isveç çakısıdır.Bu metot sayesinde bir diziye eleman ekleyebilir,eleman silebilir veya dizinin bir elemanı güncellenebilir.

// ? splice ile diziden eleman kaldırma

// splice metodu ile bir diziden eleman kaldırmak için bu metoda iki adet değer vermemiz gerekir.Bunlardan ilki kaçıncı index'den itibaren eleman silineceği;ikincisi ise kaç adet eleman silinceğidir.Bu şekilde diziden eleman silindiğinde silinen elemanları geri döndürebilir

const silinenŞehirler = şehirler.splice(3, 2);

document.write("Şehirler-7:", şehirler, "<br/>");

document.write("Silinen Şehirler:", silinenŞehirler, "<br/>");

// ? splice ile diziye eleman ekleme

// splice metodu ile bir diziye eleman eklemek için temelde üç adet değer vermemiz gerekir.Burada temelde dememizin sebebi eğer diziye birden fazla eleman eklenecekse verilecek değerlerin sayısı artacaktır.Bu metoda verilecek ilk değer dizinin kaçıncı index'inden itibaren eleman ekleyeceğimizdir.İkinci değer olaraksa 0 yazarız.İkinci değerden sonra ise ekleyeceğimiz elemanlar kaç tane ise bunları teker teker yazarız.

şehirler.splice(1, 0, "Şanlıurfa", "Trabzon");

document.write("Şehirler-8:", şehirler, "<br/>");

// ? splice ile dizideki elemanı güncelleme

// splice metodu ile bir dizideki elemanı güncellemek için temelde üç adet değer vermemiz gerekir.Bu metoda verilecek ilk değer dizinin kaçıncı index'inden itibaren eleman güncelleyeceğimizdir.İkinci değer olaraksa güncellenecek eleman sayısını yazarız.Üçüncü değerden olaraksa güncelleme yapılacak değerleri yazarız.

şehirler.splice(1, 2, "Eskişehir", "Van");

document.write("Şehirler-9:", şehirler, "<br/>");

document.write("--------------------------", "<br/>");

/*

! Özetle:

splice metodu ile bir dizideki temel işlemlerimizi yapabiliriz.
splice metoduna

(index,deleteCount) şeklinde değer girilirse belirtilen index'den itibaren belirtilen sayıdaki elemanı diziden kaldırır ve kaldırılan elemanları geri döndürür.


(index,0,items) şeklinde değer girilirse belirtilen index'den itibaren verilen items'ları diziye ekler.


(index,updateCount,items) şeklinde değer girilirse belirtilen index'den itibaren belirtilen sayıda elemanı günceller.



*/

// birlikteTodo: objelerden sonra sort || find || filter  metotları için buraya dönülecek.

// * Javascript Template Literals (Backtick)

// Javascript'de string ifadeleri ve değişkenleri bir arada kullanma istediğimizde bu elemaları ya , yada + ile birbirinden ayırabiliriz.Fakat bu şekilde bir kullanımda string ve değişken ifadelerin bir arada kullanılması yazım zorluğuna sebep olmaktadır.Bu zorluğu aşmak için javascript'in güncel sürümüyle gelen template literals (backtick-``) kullanabiliriz.Bu yapıda ``içerisinde string ifadeleri direkt olarak yazar değişkenleri ise ${} içerisinde yazarız.

const isim = "Alperen";
const soyisim = "Uzun";
const yaş = 30;

document.write(
  isim,
  " isimli ",
  soyisim,
  " soyisimindeki ",
  yaş,
  " yaşındaki öğrenicimiz geleceğin başarılı yazılımcılarındadır.",
  "<br/>"
);

document.write(
  `${isim} isimli ${soyisim} soyisimindeki ${yaş} yaşındaki öğrenicimiz geleceğin başarılı yazılımcılarındadır.  <br/> `
);

// * Javascript Arrow Functions

// Javascript'de es6 ile birlikte gelen bir diğer yapı ise arrow functions'dır.Arrow functions modern fonksiyon tanımlama yöntemidir.Bu yöntem ile tanımlanan fonksiyonlar call-back functionlar için idealdir.

// ? Call-Back Function Nasıl Tanımlanır ?

// var,let veya const anahtar kelimelerinden biri seçilir sonrasında bu anahtar kelimeden sonra fonksiyona bir isim verilir.Verilen bu isimden sonra sırasıyla = () =>{} oluşturulur.Buradaki {} içerisinde fonksiyonun yapması gereken işlevler kodlanır.Klasik function'larda olduğu gibi fonksiyonun belirtilen işlemi yapması için çağırılması gerekir.Çağırma işlemi yine aynıdır.[fonksiyonAdı () şeklinde çağırılır]

// todo: 2 adet sayıyı toplayan bir arrow function oluşturunuz.

let toplamaİşlemi = () => {
  let sayi1 = 10;
  let sayi2 = 34;

  let toplam = sayi1 + sayi2;

  document.write(`Toplam: ${toplam} <br/>`);
};

toplamaİşlemi();

// ? Arrow function'lar nasıl parametre alır?

// Arrow function'larda parametreleri () içerisinde alırız.Fonksiyon içerisinde gerekli yerlerde kullanılırız.

// todo: Parametre olarak alınan 2 sayıyı çarpıp sonucu ekrana yazdıran bir arrow function oluşturunuz.

const çarpmaİşlemi = (a, b) => {
  let çarpım = a * b;

  document.write(`Çarpım: ${çarpım} <br/>`);
};

çarpmaİşlemi(5, 6);

// ? Arrow function'lar nasıl değer döndürür?

// Arrow function'larda değer döndürmek için klasik function'larda olduğu gibi return anahtar kelimesi kullanılabileceği gibi tek satırda return edilebilecek ifadeler için bunu return kullanmadan da yapabiliriz.Bunu {} ve return kullanmadan yaparız.

// todo: Dışarıdan alınan 3 adet sayının ortalamasını hesaplayıp sonucu return eden bir arrow function oluşturunuz.

// const ortalamaHesapla = (a, b, c) => {
//   let ortalama = (a + b + c) / 3;

//   return ortalama;
// };

const ortalamaHesapla = (a, b, c) => (a + b + c) / 3;

document.write(`Ortalama: ${ortalamaHesapla(30, 40, 50)} <br/>`);

// ! Arrow function'lar  bu tek satırdaki return işlemi yapabilmesinden ötürü ileride göreceğimiz call-back function'larda çokca kullanacağımız bir yapı olacaktır.

// todo: Çalıştırıldığında kullanıcıdan 3 adet sayı alıp bu sayıların ortalamasını hesaplayan bir arrow function oluşturunuz.

const ortalamaHesapla1 = () => {
  const s1 = Number(prompt("1. sayıyı girin:"));
  const s2 = Number(prompt("2. sayıyı girin:"));
  const s3 = Number(prompt("3. sayıyı girin:"));
  return (s1 + s2 + s3) / 3;
};

document.write("--------------------------", "<br/>");

// document.write("Ortalama-1: " + ortalamaHesapla1());

// * Javascript Objeler (Objects):

// Objeler içerisinde key-value(anahtar-değer) değer çiftleri halinde veri tutan javascript yapılardır.Objeler içerisinde string,number,boolean,array,function,object,... gibi javascript türleri tutabiliriz.

// ? Bir Obje Nasıl Tanımlanır ?

// Bir obje tanımlarken var,let ve const anahtar kelimelerinden biri seçilir sonrasında objeye bir isim verilir.Verilen isimden sonra atama operatörü konulduktan sonra {} oluşturulur.{} içerisinde objenin sahip olması istenen key-value değer çiftleri oluşturulur.

// todo: Kullanıcı adında bir obje oluşturunuz

// Objey tanımlama ve değer atama
const kullanıcı = {
  isim: "Selin",
  soyisim: "Aktaş",
  yaş: 30,
  cinsiyet: "Kadın",
  öğrenciMi: false,
  adres: {
    şehir: "İstanbul",
    ilçe: "Beyoğlu",
    postaKodu: 343234,
  },
  hobiler: ["Yazılım", "Spor", "Müzik", "Yüzme"],

  kullanıcıTanıtım: function () {
    document.write(
      `Kullanıcı İsim: ${this.isim} <br/> Kullanıcı Soyisim: ${this.soyisim} <br/> Kullanıcı Hobiler: ${this.hobiler} <br/>`
    );

    //! Obje içerisinde yer alan bir yapıda obje içerisindeki değerlere erişmeye çalıştığımızda javascript erişilmek istenen değerin obje içerisindeki bir değer mi yoksa obje dışarısında bulunan bir değer mi olduğu noktasında karışıklık yaşayıyor.Bunu düzeltmek için erişilmek istenen değerlerin başına this kelimesini eklenir.
  },
};

// Objeye erişme
// console.log(kullanıcı);

// Obje içerisindeki değerlere erişme

// console.log(kullanıcı.isim);
// console.log(kullanıcı.hobiler);
// console.log(kullanıcı.adres);

kullanıcı.kullanıcıTanıtım();

document.write("--------------------------", "<br/>");

// todo: Bir araba objesi oluşturunuz.Bu obje içerisinde en az birer string,number,boolean,array,object ve function içersin.Bu objeyi oluşturduktan,değer ataması yaptıktan sonra obje içerisindeki değerlere erişiniz.

const araba = {
  marka: "Toyota",
  model: "Corolla",
  yıl: 2020,
  renkler: ["Siyah", "Beyaz", "Kırmızı", "Mavi"],
  kazalıMı: false,
  motor: {
    hacim: 1.8,
    silindirSayısı: 4,
  },

  arabaTanıtım: function () {
    document.write(
      `Araba Markası: ${this.marka} <br/> Araba Modeli: ${this.model} <br/> Araba Renkleri: ${this.renkler} <br/>`
    );
  },
};

console.log(araba);

console.log(araba.marka);
console.log(araba.model);

araba.arabaTanıtım();

document.write(
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>",
  "<br/>"
);
