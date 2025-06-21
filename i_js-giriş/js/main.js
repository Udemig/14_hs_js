// * Javascript Çıktı Operatörleri

// Javascript'de dinamik şekilde kullanıcıya çıktı vermek için kullanılabilecek metotlar şunlardır:

// ? 1-)console.log(): Kullanıcıya tarayıcıda yer alan console kısmında çıktı vermek için kullanılır.Bu metot () içerisinde yazılan değerleri tarayıcıda yer alan console kısmına yazdırır.Bu metot proje içerisinde bağlantı kontrolü,veri kontrolü ve hata tespiti sırasında çokca kullanılır.

// ! console kısmı tarayıcıda sağ tık > incele menüsü açıldığında aşağıda yer alan sekmedir.
console.log("Hello world");

// ? 2-)document.write(): Html kısmındaki body'nin javascript'deki karşılığı document'dir.document.write() metodu ile bu alana çıktı verebiliriz.Bu metot () içerisinde yer alan değerleri arayüze yazdırır.

document.write("Udemig akademiden selamlar");

// ? 3-)alert():Açılır bir popup ile kullanıcıya çıktı vermek için kullanılır.Bu metot () içerisinde yer alan değerleri açılır popup ile kullanıcıya gösterir.

// alert("İşlem sırasında bir hata oluştu.");

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

var kullaniciAdi;
