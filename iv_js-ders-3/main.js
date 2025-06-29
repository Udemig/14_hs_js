// * Javascript Dizi İçerisinde Obje Kullanımı

// Javascript'de dizilerin verilerimiz sahip olduğu metotlar ile kolayca yönetmemizi sağladığını görmüştük.Bir dizi içerisindeki elemanlar birer obje de olabilir.Dizi içerisinde obje tanımlarken direkt {} açıp bu {} içerisinde objenin sahip olması istenen değerleri kodlanır.

const kişiler = [
  { id: 1, isim: "Alperen", soyisim: "Uzun", yaş: 30, puan: 97 },
  { id: 2, isim: "Armağan", soyisim: "Şalter", yaş: 40, puan: 87 },
  { id: 3, isim: "Ayla", soyisim: "Ekici", yaş: 26, puan: 65 },
  { id: 4, isim: "Fadime", soyisim: "Eren", yaş: 20, puan: 43 },
  { id: 5, isim: "Fahri", soyisim: "Çağdaş", yaş: 50, puan: 24 },
];

// ! find: Bir dizi içerisindeki bir elemanı belirtilen koşula göre bulmak için kullanılır.Ör: kişiler dizisi içerisinde puanı 70'den büyük olan kullanıcıyı bul.find metodu bir dizi içerisinde eleman bulma işlemi yapacağından dizi adından sonra .find() şeklinde kullanılır.Buradaki () içerisinde ise bir call-back function ile eleman bulma koşulu yazılır.

// ! Önemli Not: find metodu bir diziyi döner.Döndüğü noktada ise belirtilen koşulu sağlayan birden fazla eleman varsa sadece ilk elemanı alır.Diğerleri almaz.

console.table(kişiler);

// todo: Kişiler dizisi içerisinde ismi Ayla olan kullanıcıyı bul.

// const bulunanKişi = kişiler.find(function (kişi) {
//   return kişi.isim == "Ayla";
// });

const bulunanKişi = kişiler.find((kişi) => kişi.isim == "Ayla");

// console.log(bulunanKişi);

// todo: Kişiler dizisi içerisinde puan'ı 70'den büyük olan kullanıcıları bul.

const puanlıKişiler = kişiler.find((person) => person.puan > 70);

// console.log(puanlıKişiler);

// Eğer bir dizide belirtilen koşulu sağlayan birden fazla elemanı almak istersek bunun için filter metodu kullanılır.

// ! filter: Bir dizi içerisindeki elemanları belirtilen koşula göre filtrelemek için kullanılır.Bu metot diziyi döner ve kendisine verilen call-back function içerisinde yazılan koşula göre dizideki elemanları filtreler.

// todo: Kişiler dizisi içerisinde puan'ı 70'den büyük olan kullanıcıları filtrele.

const puanaGöreKullanıcılar = kişiler.filter((kişi) => kişi.puan > 70);

console.log(puanaGöreKullanıcılar);

// ! find ve filter ile bir dizi içerisindeki elemanlara erişebiliriz.Bu iki metot arasındaki fark ise find diziyi döner ve geriye bir obje döndürür,filter ise bir diziyi döner ve geriye bir dizi döndürür.Bu sebeple belirtilen koşulu sağlayan birden fazla eleman olduğunda filter hepsini find ise sadece ilk bulduğunu return eder.

// ! sort: Bir dizi içerisinde yer alan elemanları sıralamak için kullanılır.sort metodu alfabetik sıralama yaparken herhangi bir sıkıntı yaşatmazken sayılar üzerinden sıralama yaparken ufak bir düzeltmeye ihtiyaç duyar.

const kullanıcılar = ["Yusuf", "Ali", "Mehmet", "Buse", "Elif", "Yaren"];

const sayılar = [1, 2, 56, 33, 44, 987, 12423, 876548, 245853, 9754533];

document.write(`Kullanıcılar: ${kullanıcılar} <br/>`);

document.write(`Sıralı Kullanıcılar A--Z: ${kullanıcılar.sort()} <br/>`);

document.write(`Sayılar: ${sayılar} <br/>`);

document.write(`Sıralı Sayılar: ${sayılar.sort()} <br/>`); // Sayıları sadece ilk basamağına bakarak sıralıyor.Ama sayıları sıralarken sadece ilk basamağa göre değil sayının tamamına bakarak sıralama yapmalıyız.Bunun içinse sort metodu içerisine bir fonksiyon yazmalıyız.

document.write(
  `Doğru Sıralı Sayılar K-->B: ${sayılar.sort((a, b) => a - b)} <br/>`
);

document.write(
  `Doğru Sıralı Sayılar B-->K: ${sayılar.sort((a, b) => b - a)} <br/>`
);

document.write(
  `Sıralı Kullanıcılar Z--A: ${kullanıcılar.sort().reverse()} <br/>`
); // Metin ifadelerden oluşan diziler için sort metodu içerisine yazılacak call-back funcition gerekli işlemi yapamayacağından bu durumda sort ile sıralanan elemanlara reverse ile takla attırılır.

document.write(`-------------------------------------- <br/>`);

// * Javascript Koşullu Yapılar (if-else)

// Javascript'de koşula  bağlı işlemler yapmak için if-else yapısı kullanılır.(Eğer kullanıcı 18'yaşından büyükse ehliyet alabilsin,kullanıcı admin ise ekleme-silme işlemleri yapsın,...)

// Javascript'de koşullu yapılar oluştururken if(){} yapısında () içerisinde koşul kontrolü yapılır.Bu koşulun sağlanması durumunda ise {} içerisinde yazılı kodlar çalışır.if bloğunda belirtilen koşulun sağlanmaması durumunda ise else kısmı çalışır.

// if --> eğer

// else --> değilse

// todo: kullanıcının yaşı 18'den büyükse ehliyet alabilir,değilse ehliyet alamaz yazdıran code-script'i oluşturunuz.

const kullanıcıYaşı = 17;

if (kullanıcıYaşı > 18) {
  document.write(`Kullanıcı ehliyet alabilir. <br/> `);
} else {
  document.write(`Kullanıcı ehliyet alamaz. <br/>`);
}

document.write(`-------------------------------------- <br/>`);

// ? Peki birden fazla koşul kontrolü nasıl yapılır?

// Birden fazla koşullu yapı oluşturmak istenirse bunu ilk koşul için if(){} ile bundan sonraki koşullu yapılar içinse else if(){} şeklinde oluşturulur.Ama son kontrol için else dememiz yeterlidir.

// todo:Kullanıcı puanı 50'den küçükse "Dersten kaldınız",50-64 arasında ise "Dersten geçtiniz ama belge alamadınız ",65-84 arasında ise "Teşekkür belgesi aldınız",85-100 arasında ise "Takdir belgesi aldınız" yazdıran code-script'i oluşturunuz.

const öğrenciNotu = 98;

if (öğrenciNotu < 50) {
  document.write(`Dersten kaldınız. <br/> `);
} else if (öğrenciNotu >= 50 && öğrenciNotu < 65) {
  document.write(`Dersten geçtiniz ama belge alamadınız. <br/> `);
} else if (öğrenciNotu >= 65 && öğrenciNotu < 85) {
  document.write(`Teşekkür belgesi aldınız. <br/> `);
} else {
  document.write(`Takdir belgesi aldınız. <br/> `);
}

// if  else-if else
// +     -       -
// -     +       -
// -     -       +

// todo: Kullanıcının parası 100.000TL'den,yaşı ise 25'den büyükse "Kullanıcı Motor alabilir" değilse "Motor alamaz" yazdıran code-script'i oluşturunuz.

const para = 120000;
const yas = 28;

if (para >= 100000 && yas >= 25) {
  document.write("Kullanıcı motor alabilir. <br/>");
} else {
  document.write("Kullanıcı motor alamaz. <br/>");
}

// * Javascript switch-case Yapısı

// Javascript'de bir değişkenin aldığı belirli sayıdaki değere karşılık işlemler yapabilmek için switch-case yapısı kullanılır.switch(){} yapısında () içerisinde kontrol yapılacak değişkenin adı yazılır.{} içerisinde ise kontrolü yapılan değişkenin herbir değeri case'ler ile yönetilir.case ile karşılanmayan değerler ise default ile karşılanır.

// switch-case yapısı bir case'e karşılık verilen işlem yapıldıktan sonra eğer dur demezsek diğer case'ler içinde çalışır.Bunu engellemek için case sonunda break komutu eklenir.Bu komut ile sonraki case'lerin çalışması engellenir.

// todo: haftanınGünü adlı değişkenin aldığı değerlere göre Pazartesi,Salı,Çarşamba,Perşembe,... şeklinde çıktı veren code-script'i oluşturunuz.

const haftanınGünü = 2;

switch (haftanınGünü) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;
  case 3:
    document.write(`Çarşamba <br/>`);
    break;
  case 4:
    document.write(`Perşembe <br/>`);
    break;
  case 5:
    document.write(`Cuma <br/>`);
    break;
  case 6:
    document.write(`Cumartesi <br/>`);
    break;
  case 7:
    document.write(`Pazar <br/>`);
    break;
  default:
    document.write(`Tanımsız Gün <br/>`);
}

// todo: Kullanıcıdan kursNo adında bir sayı alınız.Bu değişkenin değeri 1 ise "Frontend Kursu",2 ise "Backend Kursu",3 ise "React Native Kursu",4 ise "İngilizce Kursu",5 ise "Ios-Swift Kursu" bu değerlerin haricinde bir değer girilirse "Yanlış değer girdiniz." yazdıran code-script'i oluşturunuz.

// let kursNo = parseInt(prompt("Lütfen bir kurs numarası girin (1-5):"));
// switch (kursNo) {
//   case 1:
//     document.write("Frontend Kursu");
//     break;
//   case 2:
//     document.write("Backend Kursu");
//     break;
//   case 3:
//     document.write("React Native Kursu");
//     break;
//   case 4:
//     document.write("Ingilizce Kursu");
//     break;
//   case 5:
//     document.write("Ios-Swift Kursu");
//     break;
//   default:
//     document.write("Yanlis deger girdiniz");
// }

// * Javascript Döngüler

// Count Kavramı

let sayi1 = 10;

document.write(`Sayı: ${sayi1} <br/>`);

// sayi1 'in değerini 1 arttır

// sayi1 = sayi1 + 1;
sayi1++;

document.write(`Sayı-1: ${sayi1} <br/>`);

// sayi1 'in 5 katını al

// sayi1 = sayi1 * 5;
sayi1 *= 5;

document.write(`Sayı-2: ${sayi1} <br/>`);

// sayi1'den 3 çıkar

// sayi1 = sayi1 - 3;
sayi1 -= 3;

document.write(`Sayı-2: ${sayi1} <br/>`);

sayi1 += 5;

document.write(`Sayı-3: ${sayi1} <br/>`);

sayi1--;

document.write(`Sayı-4: ${sayi1} <br/>`);

document.write(`--------------------------------------------------- <br/>`);

// Javascript'de tekrar eden işlemleri gerçekleştirmek için döngüler kullanılır.(100 defa Merhaba Malatya yazdırma,bir dizideki her eleman için bir yazdırma işlemi yapma,...)

// todo: Ekrana 10 defa "Merhaba Malatya" yazdırın.

// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);
// document.write(`Merhaba Malatya <br/>`);

// ! for döngüsü:

// for döngüsü ile belirli bir sayıda işlemi tekrarlamak için kullanılır.for döngüsü bizden 3 adet değer ister.Bunlar kontrol yapılacak değer,kontrol koşulu ve kontrol edilecek değeri güncelleyecek yapıdır.Kontrol edilen değer kontrol koşulunu sağladığı müddetçe döngü çalışır.

for (let sayaç = 0; sayaç < 10; sayaç++) {
  document.write(`Merhaba Malatya <br/>`);
}

document.write(`--------------------------------------------------- <br/>`);

// todo: 1'den 50'ye kadar olan sayıları 1,2,3,... şeklinde ekrana for döngüsü ile yazdıran code-script'i oluşturunuz.

for (let sayaç1 = 1; sayaç1 <= 50; sayaç1++) {
  document.write(`${sayaç1} <br/>`);
}

document.write(`--------------------------------------------------- <br/>`);

// todo: 100'e kadar olan tüm çift sayıları ekrana for döngüsü ile yazdıran code-script'i oluşturunuz.

for (let çiftSayı = 0; çiftSayı <= 100; çiftSayı += 2) {
  document.write(`${çiftSayı} <br/>`);
}

document.write(`--------------------------------------------------- <br/>`);

// ! while döngüsü:

// Javascript'de bulunan bir diğer döngü ise while döngüsüdür.Bu döngü bir koşula göre işlem yapmamızı sağlar.Fakat bu döngü kontrol yapılan değerin güncellenmemesi durumunda durmaksınız çalışır yani sonsuz döngüye girer.Bu durum uygulamanın boyutunun artması ve uygulamanın patlamasına sebep olur.

// todo: Ekrana 10 defa "Udemig Akademiden selamlar" çıktısını while döngüsü ile yazdıran code-script'i oluşturunuz.

let sayaç2 = 0;

while (sayaç2 < 10) {
  document.write(`Udemig Akademiden selamlar <br/>`);

  // koşulun bağlı olduğu değeri güncelledik.Aksi durumda döngü sonsuz döngüye girecektir.
  sayaç2++;
}

document.write(`--------------------------------------------------- <br/>`);

// todo: Kullanıcının 1'den 50'ye kadar çektiği şınavlar için ekrana 1.şınav,2.şınav,... şeklinde çıktı veren uygulamayı while döngüsü ile oluşturunuz.

let şınav = 1;

while (şınav <= 50) {
  document.write(`${şınav}. şınav <br/> `);

  şınav++;
}
document.write(`--------------------------------------------------- <br/>`);

// ! do-while döngüsü:

// Javascript'deki bir diğer döngü do-while döngüsüdür.Bu döngü while döngüsündeki gibi bir koşula bağlı olarak çalışır.do-while'ın while'dan farkı önce çalışıp sonra koşulu kontrol etmesidir.Bu sebeple koşul sağlanmasa bile do-while enaz bir kere çalışır.

// todo: Ekrana 10 defa "Merhaba Javascript" çıktısını do-while döngüsü kullanarak yazdıran code-script'i oluşturunuz.

let sayı = 11;

do {
  document.write(`Merhaba Javascript <br/>`);

  sayı++;
} while (sayı <= 10);

document.write(`--------------------------------------------------- <br/>`);

// ! Döngüler tekrar eden işlemleri kolay bir şekilde yönetmemizi sağlar.

// * Javascript Dizilerde Döngüler

// Döngülerin javascript'de tekrar eden işlemleri yönetmek için kullanacağımız öğrendik.Javascript'de diziler içinde bazen tekrar eden işlemler yapabiliriz.Ör:Bir kişi dizisinin her elemanı için Hoşgeldin Yasin,Hoşgeldin Faruk,...

// Dizilerde kullanılan döngüler:

// 1-) Foreach: Bir dizinin her elemanı için bir işlem yapmak için kullanılır.Foreach bir dizinin tüm elemanlarını döner ve kendisine verilen call-back function'da belirtilen işlemi gerçekleştirir.

// 2-) Map:Map tıpkı foreach gibi dizinin tüm elemanlarını döner ve belirtilen işlemi gerçekleştirir.Ama map'in foreach'den farkı map bir diziyi dönerek geriye  bir dizi döndürür.Bu sebeple bir dizi üzerinde müdahalelerde bulunabilmemizi sağlar.

const öğrenciler = [
  "Meryem",
  "Ayşe",
  "Buse",
  "Merve",
  "Mehmet",
  "Kaan",
  "Yusuf",
  "Sarp",
  "Mert",
  "Gözde",
];

// document.write(`Hoşgeldin ${öğrenciler[0]}  <br/>`);
// document.write(`Hoşgeldin ${öğrenciler[1]}  <br/>`);
// document.write(`Hoşgeldin ${öğrenciler[2]}  <br/>`);
// document.write(`Hoşgeldin ${öğrenciler[3]}  <br/>`);
// document.write(`Hoşgeldin ${öğrenciler[4]}  <br/>`);
// document.write(`Hoşgeldin ${öğrenciler[5]}  <br/>`);

öğrenciler.forEach((öğrenci) => {
  document.write(`Hoşgeldin ${öğrenci}  <br/>`);
});

const puanlar = [100, 98, 42, 65, 65, 2421, 6435];

const yeniPuanlar = puanlar.map((puan) => puan * 5);

document.write(`Puanlar: ${puanlar} <br/>`);

document.write(`Yeni Puanlar: ${yeniPuanlar} <br/>`);

// ! Özetle bir dizi üzerinde tekrar eden işlemler yapabilmek için forEach veya map metodu kullanılır.forEach ve map arasındaki fark map ile dönülen dizi üzerinden müdahelelerde bulunabilmemizdir.

const yeniÖğrenciler = öğrenciler.map(
  (öğrenci) => `Udemig Öğrencisi:${öğrenci} `
);

document.write(`Yeni Öğrenciler: ${yeniÖğrenciler} <br/>`);

document.write(`--------------------------------------------------- <br/>`);

const kullanıcıYaşları = [23, 44, 56, 75, 24, 83, 65, 43];

// todo: 2025 yılındaki kullanıcı yaşlarının yazıldığı kullanıcıYaşları dizisindeki her bir kişinin 2027 yılındaki yaşların bulunduğu yaşlarının dizisini oluşturunuz.

const yeniKullanıcıYaşları = kullanıcıYaşları.map((kişi) => kişi + 2);

document.write(`Yaşlar: ${kullanıcıYaşları} <br/>`);

document.write(`Yeni Yaşlar: ${yeniKullanıcıYaşları} <br/>`);

// todo: Kullanıların vize notlarının bulunduğu dizideki herbir elemanın %40'ını hesaplayıp yeni bir dizi oluşturunuz.

const vizeNotları = [100, 20, 50, 65, 38, 89, 73];

const yeniVizeNotları = vizeNotları.map((not) => (not * 0.4).toFixed(1));

document.write(`Vize Notları: ${vizeNotları} <br/>`);

document.write(`Yeni Vize Notları: ${yeniVizeNotları} <br/>`);
document.write(`--------------------------------------------------- <br/>`);

// todo: yeniVizeNotları dizisindeki her notu 1.öğrencinin vize notunun %40:8,2.öğrencinin vize notunun %40:40,...

yeniVizeNotları.forEach((not, index) => {
  document.write(`${index + 1}.öğrencinin vize notunun %40'ı: ${not} <br/>`);
});

document.write(`--------------------------------------------------- <br/>`);

// * Javascript Spread Operatör (...)

// Spread operatör ile dizi ve objeleri genişletebiliriz.

let users = ["Halit", "Işıl", "Selin", "Nermin", "Şebnem"];

document.write(`Kişiler: ${users} <br/>`);

// let users1 = users.concat("Umut", "Kürşat");
let users1 = [...users, "Umut", "Kürşat"];

document.write(`Kişiler-1: ${users1} <br/>`);

document.write(`--------------------------------------------------- <br/>`);

let kullanıcı = {
  isim: "Taha Serdar",
  soyisim: "Mete",
};

console.log(kullanıcı);

let kullanıcı1 = {
  ...kullanıcı,
  yaş: 30,
};

console.log(kullanıcı1);

const kisiler = [
  { id: 1, isim: "Armağan", soyisim: "Şalter", puan: 10 },
  { id: 2, isim: "Zeynep", soyisim: "Kara", puan: 18 },
  { id: 3, isim: "Mehmet", soyisim: "Yıldız", puan: 22 },
  { id: 4, isim: "Elif", soyisim: "Demir", puan: 15 },
  { id: 5, isim: "Burak", soyisim: "Aydın", puan: 30 },
];

console.table(kisiler);

// todo: kisiler dizisi içerisindeki her elemanın sadece puan değerine 15 ekleyip diğer kısımların sabit kaldığı code-script'i oluşturunuz.
const yeniKişiler = kisiler.map((kişi) => {
  return { ...kişi, puan: kişi.puan + 15 }; // kisiler dizisi içerisinde yer alan her kişinin puan haricindeki değerlerini koruduk puan üzerine ise 15 ekledik
});

console.table(yeniKişiler);

// * Javascript try-catch-finally Yapısı

// Javascript'de program içerisindeki hata durumlarını yönetmek için try-catch yapısı kullanılır.Buradaki try bloğunda bir işlem yapılması istenir bu işlem sırasında bir hata alınırsa bu catch bloğunda yakalanıp gerekli işlemler yapılır.finally bloğunda ise hata ve başarılı bir şekilde işlem gerçekleştirildiğinde yapılacak kodlar yazılır.

try {
  // throw ==> Elle hata fırlatmak için kullanılır.Bir işlem sırasında hata olduğunda bu metot arka planda çalışır.
  throw new Error("401 yetkisiz işlem");
  document.write(`İşlem gerçekleştiriliyor <br/>`);
  // Ör:Api'dan veri alma
} catch (error) {
  document.write(`${error} <br/>`);
  // Ör: Api'dan veri çekme sırasında oluşan hatanın yönetimi
} finally {
  document.write(`İşlem tamamlandı. <br/>`);
  // Ör: Yüklenme ve hata durumları sıfırlanır
}

// try catch finally
//  +    -      +
//  -    +      +

// * Javascript Scope Kavramı
