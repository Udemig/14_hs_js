const baseURL = `https://dummyjson.com`;

// todo: DummyJSON api'ından tarif detay verisini alınız.

const getRecipe = async (recipeId) => {
  try {
    // Api'a istek at
    const response = await fetch(`${baseURL}/recipes/${recipeId}`);

    // Response'u JSON'dan JS nesnesine çevir
    const recipe = await response.json();
    console.log(`Tarif geldi: ${recipe}`);
  } catch (error) {
    console.log(`Hata !! ${error}`);
  }
};

// getRecipe(1);

// todo: Aratılan tarif'i api'dan alınız.

const searchRecipe = async (query) => {
  // Api'a istek at
  const res = await fetch(
    `${baseURL}/recipes/search?q=${query}&sortBy=userId&order=asc`
  );

  // Gelen veriyi JSON'dan JS nesnesine çevir
  const result = await res.json();

  console.log(result.recipes);
};

// searchRecipe("pizza");

// searchRecipe("tomato");

// todo: Amazon api'ındaki product details endpoint'ine istek at

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

const getProductDetail = async (asin) => {
  // Api'ye istek at
  const response = await fetch(
    `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${asin}&country=US`,
    options
  );

  // Gelen veriyi JSON'dan JS nesnesine çevir
  const data = await response.json();

  console.log(data.data);
};

// getProductDetail("B0F13DGFBG");

// * Javascript Modüler Dosya Yönetimi

// Bir projedeki tüm javascript kodlarını tek javascript dosyasında yönetmek kod yönetimini zorlaştırır.Çünkü api işlemleri,ui işlemleri gibi farklı farklı işlemler yapılır.Bu yönetimi daha kolay hale getirmek için "Javascript Modüler Dosya Yönetimi" kullanılır.

// ! type="module" olarak belirlenen dosyada document.write metodu kullanılamaz.

// Javascript'de modüler dosya yönetimi için ilk olarak bir ana javascript dosyası seçilir.Bu dosya html'e bağlanırken script etiketine "type='module' " attribute'ü eklenir.Sonrasında  yardımcı javascript dosyaları oluşturulur.Ör. ui.js,api.js,constants.js,helpers.js,storage.js,... Oluşturulan bu yardımcı javascript dosyalarında gerekli javascript elemanları oluşturulur.[variables,array,object,number,function,obje,...] Oluşturulan bu elemanlar ilk olarak export {elemanAdı} ile dosya dışarısına çıkarılır sonrasında ise import {elemanAdı} from "dosyaYolu" şeklinde kullanılmak istenen dosya içerisine import edilir.

// ! Eğer bir javascript dosyasından sadece bir eleman dosya dışarısına çıkarmak isteniyorsa bunu export yerine export default ile yapabiliriz.export default'un export'dan farkı bir dosyadan sadcece tek elemanı dosya dışarısına çıkarmasıdır.import ederkende import {elemanAdı} from "dosyaYolu" şeklinde değil import elemanAdı from "dosyaYolu" şeklinde yapılır.

// import { months, adress } from "./constant.js";
// import { writeUser } from "./helpers.js";
// import users from "./users.js";

// console.log(months);

// console.log(adress);

// writeUser("Alperen");

// console.log(users);

// * Javascript Class Yapısı

// Javascrip Class'ları ile düzenli bir şekilde metotlar ve özellikler oluşturabiliriz.Bir class tanımlarken "class" keyword'ü kullanılır sonrasında class'a bir isim verilir.İsim verilirken class adı büyük harfle başlamalıdır.Verilen isimden sonra {} oluşturulur.Bu {} içerisinde class'a ait yapılar oluşturulur.Class içerisindeki yapıların kullanılabilmesi için "new" keyword'ü ile örneği alınmalıdır.

class Araba {
  // constructor: Class yapısının kurucu metodur.Bu metot class yapısı çalıştırıldığında ilk olarak çalışan yapıdır.Bu yapı içerisinde değer ataması yapılabilir.
  constructor(marka, model, yıl) {
    this.marka = marka;
    this.model = model;
    this.yıl = yıl;
    this.şanzımanTipi = "Otomatik";
    this.km = 10000;
    this.ikinciEl = false;
  }

  // methodhs: Class yapı içerisinde oluşturalan metotlardır.
  toplamaİşlemi() {
    document.write(`Toplam: ${4 + 5 + 8 + 56} <br/>`);
  }

  arabaTanıtım() {
    document.write(
      `Araba adı: ${this.marka} <br/> Araba model: ${this.model} <br/> Araba yıl: ${this.yıl}  <br/>`
    );
  }
}

const arabaClassı = new Araba("BMW", "M5", 2024);

// console.log(arabaClassı);

arabaClassı.toplamaİşlemi();

arabaClassı.arabaTanıtım();

// todo: Ufak bir muhasebe örneğini class yapısı ile oluşturunuz.

class Amount {
  constructor(person) {
    this.person = person;
    this.balance = 0;
  }

  // Ekleme
  increase(amount) {
    this.balance += amount;

    console.log(
      `Hesaba ${amount} TL para yatırılıdı. <br/> Toplam bakiye: ${this.balance}  <br/>`
    );
  }

  // Çıkarma
  decrease(amount) {
    this.balance -= amount;

    console.log(
      `Hesaptan ${amount} TL para çekildi. <br/> Toplam bakiye: ${this.balance}  <br/>`
    );
  }
}

const muhasebeClassı = new Amount("Ali");

muhasebeClassı.increase(400);

muhasebeClassı.increase(200);

muhasebeClassı.decrease(100);

console.log(muhasebeClassı);

// Class Yapısında Miras Alma

// Class'larda bazı yapıları tekrar tekrar yazmak yerine miras alma işlemi yapabiliriz.Miras alma işlemi class'larda inheritance olarak geçer.Class alma işlemi için miras alınacak class tanımlanırken class adından sonra extends mirasAlınacakClassAdı şeklinde tanımlanmalıdır.Sonrasında miras alınan class'ın constructor'ı içerisinde super metodu ile miras alınan class'ın constructor'ı çağırılır.

class ElektirikliAraba extends Araba {
  constructor(marka, model, yıl, şanzımanTipi, km) {
    super(marka, model, yıl, şanzımanTipi); // Araba classının constructor'ını miras al
    this.km = km;
  }
}

const elektirikliAraba = new ElektirikliAraba(
  "Tesla",
  "Model-S",
  2025,
  "Otomatik",
  5000
);

console.log(elektirikliAraba);

// todo: Kişi adında bir class oluşturunuz.constructor içerisinde hem değer ataması hemde değer alma yapınız.Birkaç metotda ekleyiniz.

class Kisi {
  constructor(name, age) {
    this.name = name;
    this.surname = "dağdemir";
    this.age = age;
  }

  kişiTanitim() {
    document.write(
      `Kişi adı: ${this.name} <br/> Kişi soyadı: ${this.surname} <br/> Kişi yaş: ${this.age} <br/>`
    );
  }
}
const kisi = new Kisi("pınar", 29);

kisi.kişiTanitim();
console.log(kisi);

// todo:  Çocuk adında bir class daha oluşturunuz.Bu class öncesinde oluşturulan kişi class'ından miras alsın.

class Cocuk extends Kisi {
  constructor(name, age, surname, gender) {
    super(name, age, surname);
    this.gender;
  }
}

const çocuk = new Cocuk("ayşe", 40, "kadın");

çocuk.kişiTanitim();

console.log(çocuk);

// Classlarda get-set Yapısı

// Javascript class'larında get ve set yapıları ile class içerisindeki değerleri kontrol edebişiliriz.

class Şehir {
  constructor(il, ilçe) {
    this.il = il;
    this.ilçe = ilçe;
    this._plakaNo = 44;
  }

  get ilGetir() {
    return `Şehir: ${this.il} İlçe: ${this.ilçe} Plaka No: ${this._plakaNo}`;
  }

  set ilGetir(il) {
    this.il = il;
  }
}

const şehirClassı = new Şehir("Malatya", "Battalgazi");

console.log(şehirClassı);

console.log(şehirClassı.ilGetir);

şehirClassı.ilGetir = "Hatay";

console.log(şehirClassı);

console.log(şehirClassı.plakaNo);

// todo: Bir class oluşturunuz.Bu class içerisinde api işlemlerini yapınız.

class API {
  // Kurucu Metot
  constructor() {
    this.baseURL = `https://imdb236.p.rapidapi.com/api/imdb`;
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };
  }

  // Film Arama
  async searchMovie(query) {
    const response = await fetch(
      `${this.baseURL}/search?type=movie&genre=${query}`,
      this.options
    );

    const movie = await response.json();

    console.log(movie.results);
  }

  // Film Detayı
  async getDetail(id) {
    // Api'a istek at
    const response = await fetch(`${this.baseURL}/${id}`, this.options);

    // Api'dan gelen veriyi json formatından js nesnesine çevir
    const detail = await response.json();

    console.log(detail);
  }
}

const api = new API();

api.searchMovie("Action");

api.getDetail("tt0816692");

// ! Özetle class yapısı düzenli kod yazmamızı sağlar.

// * HTTP Metotları

// Client ve server arasında haberleşme işlemi sırasında güvenli veri alışverişi sağlamak için kullanılan protokoldür.Bu protokol içerisinde yer alan metotlar:

// GET: Server'dan veri çekmek için kullanılır.

// POST:Client'dan server'a veri göndermek için kullanılır.

// PUT: Client'dan server'daki bir veriyi güncellemek için kullanılır.Put ile değer güncellemesi yapılacakken güncellenecek verinin tamamını vermemiz gerekir.

// PATCH: Client'dan server'daki bir veriyi güncellemek için kullanılır.Patch ile güncelleme işlemi yapılacaksa sadece güncellenecek olan verinin gönderilmesi gerekir.

// DELETE: Client'dan server'daki bir veriyi silmek için kullanılır.
