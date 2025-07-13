// * Javascript localStorage

// localStorage tarayıcı belleğinde string formatta veriler tutabildiğimiz depolama alanıdır.Bu alanda ufak veriler tutabiliriz.Ör. kullanıcıadı,şifre,token,... localStorage'a kayıt edilen veriler sayfa yenilense bile kaybedilmez.Ve localStorage'da veriler key-value değer çiftleri halinde tutulur.

//? localStorage'a Nereden Erişilir?

// localStorage'a tarayıcıda sağ tık > incele sekmesi açıldığında aşağıda yer alan 'Application' menüsündeki localStorage kısmından erişilir.

// ! localStorage'a Veri Kayıt Etme:

// localStorage'a veri kayıt etmek için localStorage.setItem() metodu kullanılır.Bu metot bizden iki değer talep eder.Birincisi kayıt edilecek veri için bir key değeri;ikincisi ise kayıt edilecek veri.

let kullanıcılar = ["Alperen", "Armağan", "Erol", "Fahri"];

localStorage.setItem("kullanıcılar", JSON.stringify(kullanıcılar)); // Js'den JSON'a geçiş

localStorage.setItem("username", "software_master_");

localStorage.setItem("age", JSON.stringify(23)); // Js'den JSON'a geçiş

// ! localStorage'dan Veri Alma:

// localStorage'dan veri almak için localStorage.getItem() metodu kullanılır.Bu metot () içerisinde alınmak istenen elemanın key değerini yazmamızı ister.

const kullanıcılarLocale = JSON.parse(localStorage.getItem("kullanıcılar")); // JSON'dan Js'e geçiş

// console.log(kullanıcılarLocale);

// ! localStorage'dan Veri Silme:

// localStorage'dan veri silmek için localStorage.removeItem() metodu kullanılır.Bu metot () içerisinde silinecek elemanın key değerini yazmamızı ister.

localStorage.removeItem("age");

// ! localStorage'ı Sıfırlama:

// localStorage'ı sıfırlamak için iki yöntem bulunur.Bunlardan ilki localStorage sekmesinden sağ tık > clear yapmak.Diğer ise localeStorage.clear() metodunu kullanmak.

localStorage.clear();

// ! Özetle localStorage tarayıcıda bulunan ufak verilerimizi tutabileceğimiz bir depolama alanıdır.Bu alanda key-value değer çiftleri halinde veriler tutarız.Kayıt edilecek verinin key ve value değerleri string formatta olmalıdır.

// * Javascript BOM (Browser Object Modal):

//  BOM Javascript'de tarayıcı etkileşimini sağlayan yapıları içerisinde bulundurur.DOM ile Html kısmında bulunan alana müdahelede bulunurken BOM ile tarayıcı etkileşimi sağlanır.Ör kullanıcıdan konum bilgisi alma,...

// BOM Yapısının Temel Objeleri:

// ! 1. window: Tarayıcı penceresini temsil eden bir objedir.Tarayıcı etkileşimi için gerekli yapıları içerisinde bulundurur.

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 600) {
    console.log(`Aside kısmı kapatıldı`);
  }
});

// ! 2.navigator: Tarayıcı hakkında bilgiler içeren objedir.Kullanıcının pc ile alakalı verileri,tercih ettiği diller,... gibi verilere erişmemizi sağlar.

// console.log(window.navigator);

// ! 3.location: Tarayıcının URL'i ile alakalı verilere erişmemizi sağlar.

// console.log(window.location);

// ! 4.history: Tarayıcı geçmişini kontrol etmek için kullanılırçü.

// console.log(window.history);

// ! window.navigator.geolocation objesi ile kullanıcının konum bilgisine erişip bu konum bilgisine göre işlemler yapabiliriz.Ör. Kullanıcı konumuna göre içerikleri listeleme,...

window.navigator.geolocation.getCurrentPosition(
  (e) => {
    console.log(`Kullanıcı konum erişimine izin verdi.`);

    console.log(e.coords);
  },
  (e) => {
    console.log(`Kullanıcı konum erişimine izin vermedi.`);
    console.log(e);
  }
);
