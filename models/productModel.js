//models/productModel.js

class product {
    constructor(id, name, price, qty, creatdate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.creatdate = creatdate;
    }
}
module.exports = product