function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "traditional", ["mozzarella", "feta"], ["pepperoni", "sausage", "olives"]);
console.log(pizza3);

var pizza4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["pepperoni", "sausage","mushrooms", "olives", "onions" ]);
console.log(pizza4);


var crustTypes = [
    "deep dish",
    "hand tossed"
];

var sauceTypes = [
    "traditional",
    "marinara"
];

var cheeses = [
    "mozzarella",
    "feta"
];

var toppings = [
    "pepperoni",
    "sausage",
    "olives",
    "onions",
    "mushrooms"
];
