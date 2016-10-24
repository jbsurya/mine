function product (sku, name, price){ /* buat object*/
	this.sku = this.sku || "sku";
	this.name = this.name || "surya";
	this.price = this.price || 180000;
};

var book = function (isbn, author){ /* buat class object child yang akan di inherit */ 
	this.isbn = this.isbn || "isbn id";
	this.author = this.author || "orang";
};

var fashion = function (color, size){
	this.color = this.color;
	this.size = this.size;
	this.getPromoPrice = function(){
		date = new Date();
		now  = date.getDay();
		promo= this.price;

		now === 6 ? promo = this.price * 0.2 : promo = this.price;
		console.log(promo);
	};

	
};



fashion.prototype = new product();
baju = new fashion();//input barang-barang
baju.color = "red";
baju.size = "XL";
book.prototype = new product(); /* untuk menghubungkan */
book1 = new book(); /* buat identitas baru dalam class object book bernama book1 */
book1.isbn = 182929;
book1.author = "jbsurya";

// ini sama aja kayak isi object biasa
// mycart.item = ['dea', 1232, 'dw441'];
// buat remove
// mycart.removeItem(baju);
//console.log(mycart.item);

function orderlineitem(){ 
this.product = this.product ;
this.totalitem = this.totalitem;

};


// order.addItem(baju, 2);
// order.addItem(book1, 3);

cart = {
	item : [],
	addItem : function(dada){
		this.item.push(dada); /* fungsi untuk mambah item */
	},
	removeItem : function(dada){
		this.item.splice(dada);
	},
	hargatotal : function(){
		var total = 0;
		this.item.forEach((barang) => { 
			total += barang.product.price * orderlineitem.totalitem; });
		
		console.log('total ', total);
		return total;
	},
	checkout : function(uang){
		var total = 0;
		this.item.forEach((barang) => { 
			total += barang.product.price * orderlineitem.totalitem; });
		console.log("uang anda", uang);
		console.log("kembalian", uang-total);

	}
};

function productmanager(){

this.products = [];
this.addProduct	= function (p) {
					this.products.push(p);
						};
this.getAllProducts = function () {
		console.log(this.products);
		return this.products;
	};
this.getProduct 	= function (sku) {
		console.log(this.products.filter(x => x.sku === sku.toString()));
		return this.products.filter(x => x.sku === sku.toString());
	};
this.removeProduct 	= function (sku) {
		var i = this.products.filter(x => x.sku === sku.toString());
		if (i != -1) {
			this.products.splice(i, 1);
		}
		console.log(i);
	};
this.updateProduct 	= function () {
		return;
	};

};
//tambah produk
buku2 = new book();
buku2.isbn = 3213231;
buku2.author = "jbsurya";
buku3 = new book()
buku3.isbn = 332132;
buku3.author = "orang orang";

baju2 = new fashion();
baju2.color = "blue";
baju2.size = "S";
baju3 = new fashion();
baju3.color = "black";
baju3.size = "M";

order = new orderlineitem();
order.product = buku3;
order.totalitem = 1;
order2 = new orderlineitem();
order2.product = buku2;
order2.totalitem = 1;
order3 = new orderlineitem();
order3.product = baju3;
order3.totalitem = 3;
console.log("promo baju3");
baju3.getPromoPrice();

console.log("cart : ");
cart.addItem(order);
cart.addItem(order2);
console.log(cart.item);

cart.hargatotal();
manager = new productmanager();
manager.addProduct(buku2);
manager.addProduct(baju3);
console.log(manager.products);
cart.checkout(19000000);

