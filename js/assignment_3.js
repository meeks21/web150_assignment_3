// creates the object template
function Guitars (brand, inventory, sold, condition) {
    this.brand = brand;
    this.inventory = inventory;
    this.sold =sold;
    this.condition = ['new','used'];

    this.inStocK = function() {
        return this.inventory - this.sold;
    };

    this.quality = function() {
        return this.condition;
    }
}

// Creates Object instances
var gibsonlpGuitar = new Guitars('Gibson ' + 'LP', 5, 3, condition[0]);
var gibsonsgGuitar = new Guitars('Gibson ' + 'SG', 7, 3, condition[0,1]);
var FenderS = new Guitars('Fender ' + 'Strat', 15, 4, condition[0,1]);
var FenderJ = new Guitars('Fender ' + 'Jaguar', 2, 1, condition[1]);
var prs = new Guitars('PRS', 2, 1, condition[0]);
var ibenez = new Guitars('Ibenez', 4, 1, condition[0]);

// prints to HTML
var info = gibsonlpGuitar.brand + ' in stock: ';
    info += gibsonlpGuitar.inStock();
    info += gibsonlpGuitar.quality();