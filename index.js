// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let copyCat = cats.slice();
    copyCat.push(name);
    
    return copyCat;
}

function prependCat(name) {
    let copyCat = [name, ...cats];
    return copyCat;
}

function removeLastCat() {
    let copyCat = cats.slice(0, cats.length - 1);
    
    return copyCat;
}

function removeFirstCat() {
    let copyCat = cats.slice(1);

    return copyCat;
}