// creates the object template
function Guitars(brand, inventory, sold, condition) {
    this.brand = brand;
    this.inventory = inventory;
    this.sold = sold;

    this.inStock = function() {
        return this.inventory - this.sold;
    };

}

// Creates Object instances
var gibsonlp = new Guitars('Gibson ' + 'LP', 5, 3);
var gibsonsg = new Guitars('Gibson ' + 'SG', 7, 3);
var FenderS = new Guitars('Fender ' + 'Strat', 15, 4);
var FenderJ = new Guitars('Fender ' + 'Jaguar', 2, 1);


// prints to HTML
var productInfo = gibsonlp.brand + ': ';
    productInfo += gibsonlp.inStock();

var elguitar1 = document.getElementById('guitar1');
elguitar1.textContent = productInfo;

var productInfo = gibsonsg.brand + ': ';
    productInfo += gibsonsg.inStock();

var elguitar1 = document.getElementById('guitar2');
elguitar1.textContent = productInfo;

var productInfo = FenderS.brand + ': ';
    productInfo += FenderS.inStock();

var elguitar1 = document.getElementById('guitar3');
elguitar1.textContent = productInfo;

var productInfo = FenderJ.brand + ': ';
    productInfo += FenderJ.inStock();

var elguitar1 = document.getElementById('guitar4');
elguitar1.textContent = productInfo;