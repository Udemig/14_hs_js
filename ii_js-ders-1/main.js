// * Javascript Değişkenler:

// Değişkenler program içerisinde değeri değişebilen ifadeleri yönetmek için kullanılır.Bir program içerisinde değişkenleri kullanabilmek için:

// 1-) Değişken tanımlanmalı

// 2-) Değişkene değer atanmalı

// 3-) Program içerisinde değişken gerekli yerde kullanılmalı

// ? Değişken Tanımlama:

// Javascript'de değişken tanımlamak için ilk olarak var,let veya const anahtar kelimelerinden herhangi biri seçilir.Seçilen bu anahtar kelimeden sonra değişkene bir isim verilir.Değişkene verilecek isimlendirme noktasında istenilen isim seçilebilir.Ama değişken içeriği ile ilintili isim seçilmesinde fayda vardır.Eğer değişkene verilecek isim birden fazla kelimeden oluşacaksa bu isimlendirme camelCase'e göre yapılır.

// camelCase nedir ?

// Bir değişkenin ilk kelimesinin tamamının küçük harfle bundan sonra gelecek diğer kelimelerin ise sadece ilk harfi büyük olacak şekilde yazılmasıdır.

// ! Değişken adı seçilirken javascript içerisinde bulunan anahtar kelimeler ve javascript yapılarının isimleri seçilemez.

// ? Değişkene Değer Atama:

// Bir değişkene değer atamak için atama operatörü (=) kullanılır.Bu operatör sağındaki değeri alıp solundaki ifadenin değeri olarak atar.Eğer bu operatörün sağında bir değer değil bir dizi işlem varsa önce bu işlemler yapılır sonrasında ise bulunan sonuç solundaki ifadenin değeri olarak atanır.

// Değişken tanımlama ve değer atama
var kullaniciAdi = "tahaserdar";

// Program içerisinde değişken kullanımı
document.write(kullaniciAdi, "<br/>");

let plakaNo = 44;

document.write(plakaNo, "<br/>");

const başkent = "Ankara";

document.write(başkent, "<br/>");

// ? Neden 3 adet değişken tanımlama yöntemi var ?

// Javascript değişken tanımlama yöntemi olan var program içerisinde güvenlik açıklarına sebep olduğundan güncel projelerde tercih edilmez ve yerini let ve const'a bırakır.Güvenlik açığı oluşturmasının sebebi ise var ile tanımlı bir değişkenin yeniden tanımlanabilmesidir.

var isim = "Mustafa";

document.write(isim, "<br/>");

var isim = "Alperen";

document.write(isim, "<br/>");

let soyisim = "Özmen";

// let soyisim = "Yaman"; soyisim değişkeni zaten tanımlı olduğundan tekrardan tanımlamaya izin vermez.

const öğrenciNumarası = 123432;

// const öğrenciNumarası = 345432345; öğrenciNumarası değişkeni zaten tanımlı olduğundan tekrardan tanımlamaya izin vermez.

// ? let ve const arasındaki fark nedir?

// let ile tanımlanan bir değişkenin değerini güncelleyebiliriz ama const ile tanımlanan değişkenin değeri güncellenemez.

let sayı = 132;

document.write(sayı, "<br/>");

sayı = 234543; // sayı değişkenin değeri güncellendi

document.write(sayı, "<br/>");

const sayfaSayısı = 123432;

document.write(sayfaSayısı, "<br/>");

// sayfaSayısı = 455432;  const ile tanımlanan değişkenler sabittir.Doğrudan değer güncellemesi yapılamaz.

// let ve const arasındaki bir diğer fark ise let ile tanımlanan bir değişkenin değer ataması sonra yapılabilir.Ama const ile tanımlanan değişkenin değeri sonradan atanamaz.

let yazarAdı;

yazarAdı = "George Orwell";

document.write(yazarAdı, "<br/>");

// const şifre;
// şifre="12345wskdskks" const ile tanımlanacak değişkene değer ataması anında yapılmalıdır.Sonraki satırlarda yapılmaz.

// ! Bir değişkene değer atanırken eğer bu değişkenin değeri metin  olacaksa bu değeri "" içerisinde yazmalıyız.Ama değişkenin değeri sayı olacaksa direkt olarak yazılır.

// ! Özetle program içerisinde değeri değişebilecek ifadeleri yönetmek için değişkenler kullanılır.Değişken tanımlarken var,let veya const anahtar kelimelerinden biri seçilip sonrasında değişkene bir isim verildikten sonra bu değişkene bir değer atanır.var güncel projelerde tercih edilmez,yerini let ve const'a bırakmıştır.let ve const arasındaki fark ise let ile tanımlanan değişkenin değeri güncellenebilirken const ile tanımlanan bir değişkende bu söz konusu değildir.Bir diğer fark ise let ile tanımlanan değişkenin değeri sonradan atanabilirken const ile tanımlanan bir değişkende bu söz konusu değildir.

// * Javascript Veri Tipleri

// Javascript'de yer alan tüm yapıların birer veri tipi bulunmaktadır.Bu veri tipleri javascript'de yapılacak işlemler için önemlidir.

// string,number,boolean,object,array,class,null,undefined,function,...

// ! typeof=> Javascript'deki verilerin veri tipini kontrol etmek için kullanılır.

// ! string:

// Javascript'deki metin ifadelerin veri tipleri string'dir.String ifadeler "" içerisinde yazılır.

let kitapAdı = "Atomik Alışkanlıklar";

document.write("kitapAdı değişkeninin veri tipi: ", typeof kitapAdı, "<br/>");

// ! number:

// Javascript'deki sayı ifadelerinin veri tipi number'dır.Number ifadeler "" kullanmadan direkt olarak yazılır.

const kitapSayfası = 546;

document.write(
  "kitapSayfası değişkeninin veri tipi: ",
  typeof kitapSayfası,
  "<br/>"
);

// ! boolean:

// Javascript'deki true veya false değer alabilen ifadelerin veri tipi boolean'dır.Boolean ifadeler karar yapılarında çokca kullanılır.

let öğrenciMi = true;

document.write("öğrenciMi değişkeninin veri tipi: ", typeof öğrenciMi, "<br/>");

// ? 44 sayısının veri tipi nedir

document.write("44'ün veri tipi: ", typeof 44, "<br/>");

// ? "44" sayısının veri tipi nedir

document.write(" '44'ün veri tipi: ", typeof "44", "<br/>");

// ! undefined:

// Javascript'de içeriği belirlenmeyen yani değer ataması yapılmayan yapıların veri tipidir.

let kullanıcıYaş;

document.write(
  "kullanıcıYaş değişkeninin veri tipi: ",
  typeof kullanıcıYaş,
  "<br/>"
);

// ! null

// Javascript'de içeriği boş bırakılan ifadelerin veri tipidir.

let kullanıcıNumarası = null;

document.write(
  "kullanıcıNumarası değişkeninin veri : ",
  kullanıcıNumarası,
  "<br/>"
);

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// undefined ifadenin değeri atanmamış demektir.null ise geliştirici tarafından bilinçli olarak atanır.

// * Javascript Aritmetik Operatörler

//  Toplama (+):

//  Çıkarma (-):

//  Çarpma (*):

//  Bölme (/):

//  Mod Alma (%): Bir sayının bir sayıya tam bölümünden kalanı alma işlemi denir.

let sayi1 = 44;
let sayi2 = 11;

document.write("Toplam:", sayi1 + sayi2, "<br/>");

document.write("Çıkarma:", sayi1 - sayi2, "<br/>");

document.write("Çarpma:", sayi1 * sayi2, "<br/>");

document.write("Bölme:", sayi1 / sayi2, "<br/>");

document.write("Mod:", sayi1 / 5, "<br/>");

// ! Javascript'de "+" işaretinin iki görevi vardır:

// Birincisi numerik değerlerin toplanması

document.write("Toplama:", 32 + 56, "<br/>");

// İkincisi string ifadelerin birleştirilmesi

document.write("Birleştirme:", "44" + 56, "<br/>");

// Özetle "+" operatörü sağında ve solunda toplanabilir ifadeler varsa bunları toplayarak bir sonuç üretir.Ama sağında ve solundaki değerler toplanamayacaksa bunları birleştirir.

document.write("Merhaba " + "Nasılsın " + "Neredesin? " + "<br/>");

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// todo: İki adet sayı değişkeni oluşturunuz.Bu sayı değişkenleri ile toplama,çıkarma,çarpma,bölme ve mod alma işlemlerini yapınız elde edilen sonuçları ekrana yazdırınız.

let num1 = 88;
let num2 = 9;
document.write(num1 + num2 + "<br/>");
document.write(num1 - num2 + "<br/>");
document.write(num1 * num2 + "<br/>");
document.write(num1 / num2 + "<br/>");
document.write((num1 % num2) + "<br/>");

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// * Javascript Bağlaçlar

// Javascript bağlaçlar birden fazla koşula bağlı işlemler yapabilmek için kullanılır.

// 1.Ve (&&): İfadelerden her ikisi true ise true döndürür.Aksi tüm durumlarda false döndürür.

// 2.Veya (||): İfadelerden en az bir tanesinin true olması halinde true aksi halde ise false döndürür.

document.write("Ve Operatörü:", "<br/>");
document.write(true && true, "<br/>"); // true
document.write(true && false, "<br/>"); // false
document.write(false && false, "<br/>"); // false
document.write(false && true, "<br/>"); // false

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

document.write("Veya Operatörü", "<br/>");
document.write(true || true, "<br/>"); // true
document.write(true || false, "<br/>"); // true
document.write(false || false, "<br/>"); // false
document.write(false || true, "<br/>"); // true

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// * Javascript Karşılaştırma Operatörleri:

let sayı3 = 40;
let sayı4 = 50;

// 1.Küçüktür(<):
document.write("sayı3 sayı4'den küçük mü ?: ", sayı3 < sayı4, "<br/>");

// 2.Küçükeşittir(<=):
document.write("sayı3 40'dan küçükeşit mi ?: ", sayı3 <= 40, "<br/>"); // true
document.write("sayı3 30'dan küçükeşit mi ?: ", sayı3 <= 30, "<br/>"); // false

// 3.Büyüktür(>):
document.write("sayı4 sayı3'den büyük mü ?: ", sayı4 > sayı3, "<br/>");

// 4.Büyükeşittir(>=):
document.write("sayı4 50'den büyükeşit mi ?: ", sayı4 >= 50, "<br/>"); // true
document.write("sayı4 60'den büyükeşit mi ?: ", sayı4 >= 60, "<br/>"); // false

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// ! Özetle küçüktür ve büyüktür operatörleri sağında ve solunda bulunan ifadelerin karşılaştırılması durumunda true veya false sonuç döndürür.Küçükeşittir ve büyükeşittir operatörleri ise sağında ve solunda bulunan ifadelerin hem büyüklük veya eşitlik durumunu hemde eşitlik durumunu kontrol eder ve bu kontrollerden enaz birinin true olması true döndürmesi için yeterlidir.

// * Javascript Eşitlik ve Denklik Operatörleri

// Eşitlik Operatörü

// Matematikte iki ifadenin eşitliğini "=" işareti ile belirtiriz.Fakat "=" işareti javascript'de atama operatörü olarak kullanılır.Bu sebeple eğer javascript'de iki ifadenin eşitliğini kontrol etmek istiyorsak bunu "==" operatörü ile yaparız.Bu operatör solunda ve sağında yer alan değerlerin eşitliğini kontrol eder ve eşitlik durumunda true aksi durumda ise false döndürür.

let sayı5 = 80;

document.write("sayı5 80'e eşit mi ? ", sayı5 == 80, "<br/>");

// Denklik Operatörü

// Javascript'de iki ifadenin hem değer hemde veri tipi olarak eşitliğini "===" operatörü ile kontrol ederiz.Bu operatör iki kontrol yapar ve bu kontroller sonucunda iki kontrolünde true olması durumunda true aksi durumda false döndürür.

document.write("sayı5 '80'e denk mi ? ", sayı5 === "80", "<br/>");

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// * Javascript Fonksiyonlar

// Javascript fonksiyonları bir işlemi gerçekleştirmek için özelleştirilmiş kod bloklarıdır.Ör: İki sayıyı topla,kullanıcıya çıktı ver,3 sayının ortalamasını hesapla,...

// Javascript'de bir fonksiyonun bir işlemi yapabilmesi için önce bu fonksiyonun tanımlanması sonrasında ise bu fonksiyonun çağrılması gerekir.

// ? Javascript Fonksiyonları nasıl tanımlanır

// Javascript'de bir fonksiyon tanımlamak için önce "function" anahtar kelimesi kullanılır.Sonrasında fonksiyona bir isim verilir.Değişken isimlendirmesinde olduğu gibi fonksiyon isimlendirmesindede isim seçmekte özgürüz ama fonksiyonun yapacağı işlem ile ilintili bir isim seçmemizde fayda vardır.Fonksiyona verilen isimden sonra ise sırasıyla () ve {} oluşturulur.Buradaki {} içerisinde fonksiyonun yapması istenen işlem herneyse kodlanır.

// ! Fonksiyon tanımlandı
function topla() {
  let sayı6 = 20;
  let sayı7 = 30;

  document.write("Toplam: ", sayı6 + sayı7, "<br/>");
}

// ! Fonksiyon çağırldı

// ? Bir fonksiyon nasıl çağırılır
// Fonksiyon adı yazıldıktan sonra () konulur.
topla();

// ! Fonksiyon tanımlandı
function ortalamaHesapla() {
  let sayı8 = 20;
  let sayı9 = 30;
  let sayı10 = 45;
  let sayı11 = 65;

  document.write("Ortalama:", (sayı8 + sayı9 + sayı10 + sayı11) / 4, "<br/>");
}
// ! Fonksiyon çağırldı
ortalamaHesapla();
ortalamaHesapla();
ortalamaHesapla();
ortalamaHesapla();

// ? Javascript Fonksiyonları Nasıl Dinamik İşlemler Yapar

// Javascript'de fonksiyonların dinamik işlemler yapabilmesi parametre kullanımı ile sağlanır.Fonksiyonlarda parametre kullanırken ilk olarak bu fonksiyona dışarıdan parametre geçmeli sonrasında fonksiyon içerisinde fonksiyona geçilen parametre karşılanıp gerekli işlemler yapılmalıdır.Bir fonksiyona parametre fonksiyonun adının yanında yer alan () içerisinde geçilmeli sonrasında ise fonksiyon yapacağı işlemin belirlendiği {} içerisinde kullanılmalıdır.

function parametreliToplama(x, y) {
  // Dışarıdan x ve y parametrelerini al ve bu sayıları toplayarak toplam sonucunu elde et
  let toplam = x + y;

  // Elde edilen toplam sonucunu ekrana yazdır
  document.write("Toplam Sonuç: ", toplam, "<br/>");
}

// parametreliToplama() Fonksiyon bu şekilde çağırıldığında 'NaN' çıktısı verir.Bunun sebebi ise dışarıdan x ve y adında parametreler alamamasıdır.Çözüm olarak ise parametre geçilen fonksiyonlar çağırıldığında () içerisinde gerekli parametrelerin geçilmelidir.

parametreliToplama(44, 55);

// todo: ortalamaHesapla adında bir fonksiyon oluşturunuz.Bu fonksiyon dışarıdan aldığı 4 adet sayının ortalamasını hesaplayıp elde edilen sonucu ekrana yazdırsın.

function ortalamaHesapla(n1, n2, n3, n4) {
  document.write("Ortalama: " + (n1 + n2 + n3 + n4) / 4, "<br/>");
}
ortalamaHesapla(60, 70, 80, 90);

document.write(
  "--------------------------------------------------------------------------------",
  "<br/>"
);

// ? Bazı durumlarda bir fonksiyonun bir değeri fonksiyon dışarısına çıkarmasını isteyebiliriz.Peki bir fonksiyonun bir değeri fonksiyon dışarısına çıkarması nasıl sağlanır ?

function çarpmaİşlemi() {
  // Fonksiyon bir sonuç elde etsin
  let sonuç = 10 * 4;

  // Elde edilen sonucu fonksiyon çağırıldığında dosya dışarısına döndersin
  return sonuç;
}

document.write("Sonuç: ", çarpmaİşlemi(), "<br/>");

// ! Özetle fonksiyonlar belirli bir işlemi yapmak için özelleştirilmiş kod parçacıklarıdır.Fonksiyonların dinamik işlemler yapması istenirse bunun için parametre kullanılır.Eğer bir fonksiyonun bir değeri fonksiyon dışarısına çıkarması istenirse return kullanılır.

// * Javascript Girdi Metotları

// Javascript'de kullanıcıdan girdi alabilmek için kullanılabilecek metotlar vardır.Bu metotlar:

// 1.prompt(): Kullanıcıdan açılır bir popup ile değer almak için kullanılır.Alınan değer bir değişkene atanarak program içerisinde kullanılabilir.Fakat bu metotun geriye döndürdüğü değer string'dir.Eğer dışarıdan bir sayı alıncaksa bunu number'a çevirmemiz gerekir.

// 2.confirm(): Kullanıcıdan açılır bir popup ile onay almak için kullanılır.Açılan pencerede kullanıcıya "ok" ve "cancel" olmak üzere iki seçenek sunulur.Eğer kullanıcı "ok" seçeneğini seçerse true "cancel" seçeneğini seçerse geriye false değer döndürür.

// const kullanıcıYaşi = prompt("Kullanıcı yaş:");

// document.write("Kullanıcı yaş: ", kullanıcıYaşi, "<br/>");

// document.write("Kullanıcı yaş: ", typeof Number(kullanıcıYaşi), "<br/>"); // Kullanıcıdan alınan yaş değişkenin veri tipini number'a çevirmek için Number kullandık.

// const response = confirm("Bu işlemi onaylıyor musunuz?");

// document.write(response);

// todo: Kullanıcıdan prompt metodu ile iki adet sayı alan ve bu alınan sayıları toplayarak elde edilen sonucu ekrana yazdıran bir fonksiyon oluşturunuz.

// 1.Bir fonksiyon oluştur
function toplamaİşlemi() {
  // 2.Bu fonksiyon içerisinde prompt metotları kullanarak kullanıcıdan iki adet sayı al
  const number1 = Number(prompt("Sayı 1 giriniz:"));
  const number2 = Number(prompt("Sayı 2 giriniz:"));

  // 3.Alınan bu sayıları toplayarak toplam sonucu elde et
  const toplam = number1 + number2;

  // 4.Elde edilen sonucu ekrana yazdır
  document.write("Toplam: ", toplam, "<br/>");
}

// toplamaİşlemi();

document.write(
  "---------------------------------------------------------- ",
  "<br/>"
);

// * Javascript String Metotları

// Javascript'de metin ifadelerin veri tipi string'dir.String'lerin sahip olduğu metotlar:

const text =
  "Udemig akademiden selamlar.Frontend kursundaki sıradaki konumuz javascript.Javascript ile dinamik web siteleri oluşturabileceğiz.Javascript önemli bir programlama dilidir.";

document.write("String Metin: ", text, "<br/>");

// ! length: Bir string ifadenin karakter sayısını hesaplamak için kullanılır.Karakter uzunluğu hesaplanacak string ifadenin adından sonra .koyulup length metodu çağırılır.

document.write("String Metinin Uzunluğu: ", text.length, "<br/>");
