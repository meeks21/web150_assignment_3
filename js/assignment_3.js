
function Guitars (brand, inventory, sold, condition) {
    this.brand = brand;
    this.inventory = inventory;
    this.sold =sold;
    this.condition = ['new','used'];

    this.inStocK = function() {
        return this.inventory - this.sold;
        return this.condition;

    };
}

var gibsonlpGuitar = new Guitars('Gibson ' + 'LP', 5, 3, condition[0]);
var gibsonsgGuitar = new Guitars('Gibson ' + 'SG', 7, 3, condition[0,1]);
var FenderS = new Guitars('Fender ' + 'Strat', 15, 4, condition[0,1]);
var FenderS = new Guitars('Fender ' + 'Strat', 15, 4, condition[0,1]);