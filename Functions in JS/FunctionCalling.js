'use strict';
// Functions Calling Other Functions

function CutFruitPieces(fruit) {
    return fruit = 4;
}

function fruitProcessor(apple, orange) {
    const applePieces = CutFruitPieces(apple);
    const orangePieces = CutFruitPieces(orange);

    const juices = `Juice with ${apple} apples and ${orange} oranges`;
    const juice = `Juice with ${applePieces} piese of apples and ${orange} piese of oranges`;
    // return juices;
    return juice;

}
console.log(fruitProcessor(2, 3));
