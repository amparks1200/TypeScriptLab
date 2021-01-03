//TypeScript Lab

//Tallest Mountain

interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mtns : Mountain[]): string{
    let nameOfTallestMountain : string = "";
    let tallestHeight: number = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}

let tallestMountain : string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//Products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: "Sweater", price: 19.50},
    {name: "Boots", price: 28.00},
    {name: "Scarf", price: 9.75}
];

function calcAverageProductPrice(products : Product[]): string{
    let total: number = 0;
    let averageNum: number = 0;
    let product: Product = products[0];
    
    products.forEach(function (product) {
            total += product.price;
            }
    ); 
    averageNum = total / (products.length);
    let averages = averageNum.toFixed(2)
    return averages;
}

const averageNum = calcAverageProductPrice(products);
console.log(averageNum);

//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

function calcInventoryValue(items : InventoryItem[]): number {
    let i: number = 0;
    let sum: number = 0;
    for (i=0; i<items.length; i++) {
        sum += items[i].product.price * items[i].quantity;
    }
    return sum;
}

const sum = calcInventoryValue(inventory);
console.log(sum);

