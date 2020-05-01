// creates the object template
function Guitars(brand, inventory, sold) {
    this.brand = brand;
    this.inventory = inventory;
    this.sold = sold;
    // this.condition = ['new','used'];

    this.inStocK = function() {
        return this.inventory - this.sold;
    };

    // this.quality = function() {
    //     return this.condition;
    // };
}

// Creates Object instances
var gibsonlpGuitar = new Guitars('Gibson', 5, 3);
var gibsonsgGuitar = new Guitars('Gibson', 7, 3);
// var FenderS = new Guitars('Fender ' + 'Strat', 15, 4, condition[0,1]);
// var FenderJ = new Guitars('Fender ' + 'Jaguar', 2, 1, condition[1]);
// var prs = new Guitars('PRS', 2, 1, condition[0]);
// var ibenez = new Guitars('Ibenez', 4, 1, condition[0]);

// prints to HTML
var productInfo = gibsonlpGuitar.brand + ' in stock: ';
    productInfo += gibsonlpGuitar.inStock();
    // info += gibsonlpGuitar.quality();
var elguitar1 = document.getElementById('guitar1');
elguitar1.textContent = productInfo;