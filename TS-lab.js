"use strict";
//TypeScript Lab
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mtns) {
    var nameOfTallestMountain = "";
    var tallestHeight = 0;
    for (var _i = 0, mtns_1 = mtns; _i < mtns_1.length; _i++) {
        var mtn = mtns_1[_i];
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    { name: "Sweater", price: 19.50 },
    { name: "Boots", price: 28.00 },
    { name: "Scarf", price: 9.75 }
];
function calcAverageProductPrice(products) {
    var total = 0;
    var averageNum = 0;
    var product = products[0];
    products.forEach(function (product) {
        total += product.price;
    });
    averageNum = total / (products.length);
    var averages = averageNum.toFixed(2);
    return averages;
}
var averageNum = calcAverageProductPrice(products);
console.log(averageNum);
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(items) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < items.length; i++) {
        sum += items[i].product.price * items[i].quantity;
    }
    return sum;
}
var sum = calcInventoryValue(inventory);
console.log(sum);
