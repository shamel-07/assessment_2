var menu = [
  { name: "Berry Blast", size: "medium", price: 6.5, fruit: "strawberry", calories: 210 },
  { name: "Mango Sunrise", size: "large", price: 7.25, fruit: "mango", calories: 280 },
  { name: "Green Glow", size: "small", price: 5.75, fruit: "spinach", calories: 160 }
];
function makeSmoothie(name, size, price, fruit, calories) {
    return {name, size, price, fruit, calories}
}
console.log (makeSmoothie("Mango Sunrise", "large", 7.25, "mango", 280))

function displaySmoothie(smoothie) {
    return smoothie.name + " | " + smoothie.size + " | " + smoothie.price + " | " + smoothie.fruit + " | " + smoothie.calories
}
console.log(displaySmoothie(menu[0]))

function findMostExpensiveSmoothie(menu) {
    let mostExpensive = menu[0]
    for (let i = 1 ; i < menu.lenght ; i++){
        if (menu[i].price > mostExpensive.price){
            mostExpensive = menu [i]
        }
    }
    return mostExpensive.name
}
console.log (findMostExpensiveSmoothie(menu))