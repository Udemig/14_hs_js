// Ui elemanlarını bir arada tutan obje
const uiElements = {
  menuBtn: document.querySelector("#menu-btn"),
  nav: document.querySelector("nav"),
  productsList: document.querySelector("#products-list"),
  cartItems: document.querySelector(".cart-items"),
};

// Api'dan alınan ürünler için birer html render edecek fonksiyon
const renderProduct = (products, callBackFunction) => {
  // Bu fonksiyon ürünler dizi içerisindeki her bir eleman için bir html oluştur
  const productsHtml = products
    .map(
      (product) => `  <div class="product">
         
          <img
            src="${product.image}"
            alt="${product.title}"
          />
        

          <div class="product-info">
            <h2>${product.title}</h2>

            <p>$${product.price.toFixed(2)}</p>

            <button class="add-to-cart" data-id="${
              product.id
            }"  >Add to cart</button>
          </div>
        </div>`
    )
    .join("");

  // Oluşturulan her bir html'i arayüzdeki productList elemanının içersine ekle
  uiElements.productsList.innerHTML = productsHtml;

  // ! renderProduct fonksiyonu çalışana kadar arayüzde bir product elemanı bulunmayacak dolayısıyla bir sepete ekle butonuda bulunmayacak.Bu durumda eğer diğer ui elemanlarına erişmeye çalıştığımız gibi bu butonlara erişmeye çalışırsak bu noktada istediğimizi elde edemeyiz.Çözüm olaraksa bu butonlara erişme işlemini renderProduct fonksiyonu içerisinde yapacağız.
  // Sepete ekle butonlarına eriş
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Erişilen sepete ekle butonlarına bir addEventListener ekle.addEventListener tekil elemanlara ekleneceğinden ilk olarak addToCartButtons'ı dön ve içerisindeki her bir elemaan teker teker eriş

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", callBackFunction);
  });
};

// Sepetteki ürünleri renderlayan fonksiyon
const renderCartItems = (cart) => {
  // Bu fonksiyondan beklentimiz sepetteki her bir eleman için bir html oluşturması ve bunu arayüze eklemesidir.

  // Bu fonksiyona dışarıdan verilen cart dizisi içerisinde yer alan her bir eleman için bir html oluştur
  const cartItemsHtml = cart
    .map(
      (item) => `  <div class="cart-item">
          
            <img
              src="${item.image}"
              alt="cart-item-image"
            />

        
            <div class="cart-item-info">
              <h2 class="cart-item-title">${item.title}</h2>

              <input
                type="number"
                min="1"
                value="${item.quantity}"
                class="cart-item-quantity"
              />
            </div>

           
            <h3 class="cart-item-price">$${item.price}</h3>

     
            <button class="remove-button">Remove</button>
          </div>`
    )
    .join("");

  // Oluşturulan cartHtml'i arayüze ekle
  uiElements.cartItems.innerHTML = cartItemsHtml;
};

// Sepette ürün bulunmadığında not-found içeriği render eden fonksiyon
const renderNotFound = () => {
  uiElements.cartItems.innerHTML = ` 
<div class="cookieCard">
  <p class="cookieHeading">Cookies.</p>
  <p class="cookieDescription">By using this website you automatically accept that we use cookies. <a href="#">What for?</a></p>
  <button class="acceptButton">Understood</button>
</div>
`;
};

export { uiElements, renderProduct, renderCartItems, renderNotFound };
