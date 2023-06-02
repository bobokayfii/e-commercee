const productsRow=document.getElementsByClassName("kards");



function getProductCard({image,id,description,price}){
  return `
          <div class="kard">
            <button>
              <img class="like" src="images/Button.png" alt="">
            </button>
            <img class="ovqat" src=${image} alt="">
            <div class="pdd">

              <div class="flex1">
                <h6>${price} ₽</h6>
                <p>${price} ₽</p>
              </div>
              <div class="flex">
                <h5>С картой</h5>
                <h5>Обычная</h5>
              </div>
              <p>${description}</p>
              <div class="zvezda">
                <img src="images/zvezda1.png" alt="">
                <img src="images/zvezda1.png" alt="">
                <img src="images/zvezda0.png" alt="">
                <img src="images/zvezda0.png" alt="">
                <img src="images/zvezda0.png" alt="">
              </div>
              <button class="main-button"> 
                В корзину 
              </button>
            </div>
          </div>
  
  `;
}

products.forEach((product) => {
  let card = getProductCard(product)
  productsRow.innerHTML += card;
});