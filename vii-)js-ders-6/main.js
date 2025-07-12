// * Javascript Call-Bind-Apply Metotları

// Javascript'de call,bind ve apply metotları ile bir objeye ait metotları bağlam belirterek başka bir obje içerisinde kullanabiliriz.

// ! call: Bu metot bağlam belirterek bir objeye ait özellikleri başka bir objede kullanmamızı sağlar.Bu metot dışarıdan argümanlar alabilir.

// ! apply: Bu metot tıpkı call gibi bir objede bulunmayan bir metodu bağlam belirterek kullanmamızı sağlar.call'dan farkı ise apply'a dışarıdan argüman verilecekse bu argümanlar bir dizi şeklinde verilmelidir.

// ! bind: Bu metot tıpkı call gibi bir objede bulunmayan bir metodu bağlam belirterek kullanmamızı sağlar.Argümanlarını call metodu gibi dışarıdan direkt olarak alır.bind metodu farklı olarak  istenilen özelliği doğrudan değil bir fonksiyona atayarak kullanmamızı ister.

const kişi = {
  isim: "Seçil",
  soyisim: "Vergili",
  yaş: 30,
  hobiler: ["Yazılım", "Spor", "Müzik", "Seyehat"],
  kişiTanıtım: function (şehir, postaKodu) {
    document.write(
      `Kişi adı: ${this.isim} <br/> Kişi soyadı: ${this.soyisim} <br/> Hobiler: ${this.hobiler} <br/> Kişi Şehir: ${şehir} Kişi Posta Kodu: ${postaKodu}  <br/><br/><br/><br/> `
    );
  },
};

// kişi.kişiTanıtım("Malatya", 4524);

const kişi1 = {
  isim: "Nursel",
  soyisim: "Çorak",
  yaş: 25,
  hobiler: ["Yazılım", "Spor", "Müzik", "Golf"],
};

// kişi.kişiTanıtım.call(kişi1, "İstanbul", 5435); kişi1 içerisinde yer almayan kişiTanıtım fonksiyonunu burada kullandık

const kişi2 = {
  isim: "Armağan",
  soyisim: "Salter",
  yaş: 27,
  hobiler: ["Yazılım", "Spor", "Müzik", "Golf", "Kitap Okuma", "Yüzme"],
};

//kişi.kişiTanıtım.apply(kişi2, ["Ankara", 123432]);  kişi2 içerisinde yer almayan kişiTanıtım fonksiyonunu apply metodu ile burada kullandık

const kişi3 = {
  isim: "Alperen",
  soyisim: "Uzun",
  yaş: 21,
  hobiler: [
    "Yazılım",
    "Spor",
    "Müzik",
    "Golf",
    "Kitap Okuma",
    "Yüzme",
    "Body Building",
  ],
};

const kişiUzaktanTanitim = kişi.kişiTanıtım.bind(kişi3, "Antalya", 648483); // kişi3 içerisinde yer almayan kişiTanıtım fonksiyonunu bind metodu ile burada kullandık

// kişiUzaktanTanitim();

// ! Özetle call,bind ve apply metotları ile bir objede yer almayan bir metodu bağlam belirterek kullanabiliyoruz.

// * Javascript DOM (Document Object Modal):

// Javascript'in başından bu yana dinamik web sitesi,dinamik işlemler,... kavramlardan çokca söz ettik.Bu dinamik olayları sağlama noktasında en çok kullanılan yapılardan biride DOM'dur.DOM ile kullanıcının arayüz etkileşime bağlı işlemler yapabiliriz.

// Daha önceki konularımızdan javascript çıktı metotlarında Html'deki body'in javascript'de document objesine denk geldiğini söylemiştik.Bu obje içerisinde yer alan yapıları birlikte inceleyelim.

// Javascript'de arayüzde yer alan bir eleman ile etkileşimli işlemler yapabilmemiz için ilk olarak Html kısmında oluşturulan elemanlara javascript kısmında erişmemiz gerekir.

// ! Html'den Javascript'e Eleman Çekme:

// Html'deki elemanları javascript kısmına çekmek için şu metotlar kullanılır:

// 1-)document.getElementsByTagName():Bu metot ile html kısmında bulunan bir elemanı etiket adına göre javascript kısmına çekebiliriz.Ama aynı tag'e sahip birden fazla eleman olabileceğinde bu metot seçilen elemanları bir dizi şeklinde döner.

const başlık1 = document.getElementsByTagName("h1");

// console.log(başlık1);

// 2-)document.getElementsByClassName():Bu metot ile html kısmında bulunan bir elemanı class adına göre javascript kısmına çekebiliriz.Ama aynı class adına sahip birden fazla eleman olabileceğinden bu metot erişilen elemanları bir dizi şeklinde döner.

const yazı = document.getElementsByClassName("text");

// console.log(yazı);

// 3-)document.getElementById(): Bu metot ile html kısmında bulunan bir elemanı id'sine göre javascript kısmına çekebiliriz.

const button = document.getElementById("more-btn");

// console.log(button);

// 4-)document.getElementById():

// Yukarıdaki 3 metotla html'den javascript'e eleman çekme işlemini yapabiliriz.Fakat güncel projelerde bu 3 metot yerine ES6 ile gelen querySelector metodu kullanılır.Bu yeni metot html'den javascript'e bir elemanı tag,class adı veya id'sine göre çekebilmemizi sağlar.Fakat bu metot kullanılırken şuna dikkat edilmelidir.getElementsByClassName veya getElementById metotları kullanılırken bu metotlara verilen direktif bellidir.Git şu class'a yada id'ye sahip elemanı al.Ama querySelector'da tag adları haricinde belirtilen kelimeler bir class adıda olabilir id adıda olabilir.Bu sebeple belirten kelime class adı ise başına "."; id ise başına "#" koymamız gerekir.

let resim = document.querySelector("img");

// console.log(resim);

let örnekYazi = document.querySelector("example-text");

// console.log(örnekYazi);  Bu kullanımda null değer döndürür.Çünkü erişilmeye çalışılan bir class mı id mi belli değil

let örnekYazi1 = document.querySelector("#example-text");

// console.log(örnekYazi1);

// querySelector ile html'den elemana çekmeye çalışıldığında erişilmek istenen elemandan birden fazla varsa bu noktada querySelector metodu sadece ilk bulunan elemanı alır.

// 4-)document.querySelectorAll(): Html'de belirtilen seçiciye sahip elemanlardan kaç tane varsa bunları bir dizi şeklinde döndürür.

let cards = document.querySelectorAll(".card");

// console.log(cards);

// ! Özetle html'de yer alan elemanlar için javascript'de dinamik işlemler yapabilmemizin ilk adımı bu elemanlara javascript kısmında erişmektir.Bu erişimi ise document.getElementsByTagName,document.getElementsByClassName,document.getElementById veya document.querySelector ve document.querySelectorAll metotları ile yapabiliriz.Bu metotların arasındaki farkları detaylı şekilde inceledik.

// * Html'den Javascript'e Çekilen Elemanlara Müdaheleler

// Bir Elemana Still Özelliği Ekleme:

// Bir elemana still özelliği eklemek için html'den javascript'e çekilen eleman adının sonuna "." koyulup sonrasında "style" yazılır.Style'ın akabinde ise verilmek istenen still özelliği yazılır.Still özelliğinin değeri ise "=" nün sağında yazılır.Eğer verilecek still özelliği birden fazla kelimeden oluşuyorsa bu kelimelerden ilkinin tüm harfleri küçük diğer kelimelerin ise sadece ilk harfi büyük yazılır. [camelCase]

const title1 = document.querySelector(".title-1");

// title1.style.backgroundColor = "red";
// title1.style.fontSize = "60px";
// title1.style.padding = "10px";
// title1.style.borderRadius = "5px";

// Javascript dosyası içerisinde elemanlara still özellikleri vermeyi bu şekilde yapmayız.Çünkü bu şekilde stillendirme yaparken otomatik tamamlama,still özelliğinin alacağı değerleri gösterme gibi özellikleri desteklenmez.Bunun yerine ilgili still özellikleri css dosyasında yazılır.Sonrasında istenilen elemana bu still özellikleri dinamik şekilde eklenir.

// Bir eleman için class işlemleri classList ile yapılır.

// ! Bir elemana class ekleme

title1.classList.add("başlık"); // Javascript kısmında bir elemanla ilgili class işlemleri "classList" özelliği ile yapılır.Burada elemana "başlık" adında bir class eklendi.Bu class'ın sahip olduğu stiller elemana otomatik olarak eklenir.

// ! Bir elemandan class kaldırma

const text1 = document.querySelector("#classExample");

text1.classList.remove("text-1");

const toggleBtn = document.querySelector("#toggle-btn");
const container = document.querySelector("#container");
// console.log(container);

// ! Bir elemana class ekle-çıkar (toggle)
// todo: toggleBtn'e tıklayınca container elemanına container classı ekle-çıkar yap

toggleBtn.addEventListener("click", () => {
  // ! classList.contains bir elemanın bir classı bulundurup bulundurmadığını kontrol eder

  //   if (container.classList.contains("container")) {
  //     // Class Kaldır
  //     container.classList.remove("container");
  //   } else {
  //     // Class Ekle
  //     container.classList.add("container");
  //   }

  container.classList.toggle("container"); // Eğer elemanda container classı varsa bunu kaldır yoksa bu classı ekle
});

// * Javascript Elemanların Html İçeriği Belirleme

// Javascript'de html'den bulunan elemanların içeriğini belirlemek için şu metotlar kullanılır.

const başlık4 = document.querySelector(".title-4");
const wrapper = document.querySelector(".wrapper");

// innerText: Bir html elemanın text içeriğini belirlemek için kullanılır.Bu metot yazı içeriği belirlenmek istenen eleman adından sonra .innerText ="Yazı İçeriği" şeklinde belirlememizi ister.

başlık4.innerText = "Udemig akademide sıradaki konumuz Javascript.";

// innerHTML: Bir html elemanının html içeriğini belirlemek için kullanılır.Bu metot innerText'den farklı olarak yazı içeriğini değil tüm html'ini günceller.Bu metot html içeriği güncellenecek elemanın içeriğini eleman adından sonra .innerHTML="Html İçerği" şeklinde belirlememizi ister.

wrapper.innerHTML = `<img src="https://picsum.photos/200" /> `;

// textContent: Bir elemanın yazı içeriğini belirlemek için kullanılır.Bu metot innerText ile aynı işleve sahiptir.

başlık4.textContent = "Udemig akademiden selamlar.";

// * Javascript AddEventListener (Olay İzleyicisi):

// Javascript'de bir kullanıcı event'ına bağlı olarak işlemler yapabilmemiz için addEventListener kullanılır.Bu metot iki değer ister.Birinci değer hangi olayın gerçekleşeceğini belirten string değer,ikincisi ise bu olayın gerçekleşmesi durumunda çalışacak fonksiyondur.Ör. butona tıklanıca giriş yap,form gönderildiğinde arama işlemi yap,...

// todo: Butona tıklanınca kullanıcıya bir uyarı fırlat.

// 1. Buton'u html'den javascript'e çek

const alertBtn = document.querySelector("#alert-btn");

// 2. Butona bir olay izleyicisi ekle
// 3. Olay izleyicisi çalıştığında çalışacak fonksiyonu belirle
alertBtn.addEventListener("click", () => {
  alert("Uyarı butonuna tıklandı");
});

// todo: wrapper elemanı sürüklendiğinde kullanıcıya bir uyarı ver

wrapper.addEventListener("dragend", () => {
  alert("Sürüklenme Bitti");
});

// todo: Bir formun gönderilmesini izleyip form içerisinde yer alan değerlere erişin.

// 1. Form'u html'den javascript'e çek
const loginForm = document.querySelector("#login-form");

// console.log(loginForm);

// 2. Form'a bir olay izleyicisi ekle
// 3. Form'un içerisindeki değerlere eriş
// ! Form gönderildiğinde default özellik olarak sayfa yenilenir.Bunu engelememiz gerekir.

// ! addEventListener çalıştığında fonksiyona bir event parametresi geçilir.Bu event parametresi ile event ile alakalı işlemler yapabiliriz.
const formSubmit = (event) => {
  // Sayfa yenilemesini engellle
  event.preventDefault();

  const userName = event.target[0].value;
  const password = event.target[1].value;

  // ! Eğer kullanıcı adı ve şifre girilmediyse kullanıcıya uyarı ver
  //    if (userName == "" && password == "") ==> Kullanıcı adı ve şifre girilmediyse
  if (!userName || !password) {
    alert("Giriş bilgilerini eksiksiz doldurunuz.");

    // Eğer kullanıcıya formu doldurun denildiyse fonksiyonu durdur
    return;
  }

  // Kullanıcı giriş yaptıysa giriş yapıldı bildirimi gönder.s

  console.log(userName);
  console.log(password);

  // Formu resetle
  event.target[0].value = "";
  event.target[1].value = "";

  alert("Giriş İşlemi");
};

loginForm.addEventListener("submit", (e) => formSubmit(e));

// todo: Bir tema değiş butonu oluşturunuz.Bu butona tıklayınca arayüzde açık ve koyu mod arasında değişim yapılsın.

// themeBtn'i html'den javascript'e çek
const themeBtn = document.querySelector("#theme-btn");

//  themeBtn'e bir olay izleyicisi ekle
themeBtn.addEventListener("click", () => {
  // body'e dark theme için class ekle
  document.body.classList.toggle("dark-theme");
});

// todo: theme-btn-1 class'lı butona tıklayınca theme-example class'ına sahip elemanı için dark-light thema değişimi yap.

const themeBtn1 = document.querySelector(".theme-btn-1");
const themeWrapper = document.querySelector(".theme-example ");

// console.log(themeBtn1);

themeBtn1.addEventListener("click", () => {
  themeWrapper.classList.toggle("dark");
});

// * Javascript Kısmından Bir Html Elemanı Oluşturma

// todo: Bir butona tıklayınca yeni bir html elemanı oluşturup bu elemanı arayüze ekleyin.

// 1. add-btn ve wrapper-1 id'sine sahip elemanları javascript kısmına çek

const addBtn = document.querySelector("#add-btn");

const wrapper1 = document.querySelector("#wrapper-1");

// 2. addBtn'e bir event listener ekle
addBtn.addEventListener("click", () => {
  // 3. Bir html elemanı oluştur
  // ! Javascript kısmından bir html elemanı oluşturmak için document.createElement metodu kullanılır.Bu metot () içerisinde hangi html elemanının oluşturulacağının belirtilmesini ister.
  const newDiv = document.createElement("div");

  // 4. Oluşturulan html elemanının yazı içeriğini belirle
  newDiv.textContent = "Yeni Div";

  // 5. Oluşturulan,yazı içeriği belirlenen elemanı arayüze ekle
  // ! Javascript'de bir html elemanının içerisine oluşturulan bir html elemanını eklemek için appendChild metodu kullanılır.

  wrapper1.appendChild(newDiv);

  // ! Javascript'de bir elemanı arayüzden kaldırmak için remove metodu kullanılır.
});

// ! Özetle DOM ile kullanıcı etkileşimli web siteleri oluşturabiliriz.Bunu yaparken hangi metotları kullanıyoruz detaylı şekilde gördük.

// * Javascript Localstorage
