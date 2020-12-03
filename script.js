 const goods = [
  {title: 'PS5', price: 30000},
  {title: 'Iphone12', price: 100000},
  {title: 'Shirt', price: 1000},
  {title: 'XBOX', price: 30000},
  {title: 'Boots', price: 5000},

 ];

 const createGoodsItemTemplate = ({title, price}) => `<div class="goods-item">
 	<div class="image"></div>
 	<h3>${title}</h3>
 	<p>${price}</p>
 	<button>Купить</button>
 </div>`

 const renderGoods = (items) => {
 	const goodsItemList = items.map((item) => createGoodsItemTemplate(item))
 	.join("");
 	document.querySelector(".goods-list").innerHTML = goodsItemList;
 } 

 renderGoods(goods);
