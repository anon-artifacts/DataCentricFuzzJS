console.log("This tests Symbol object behaviors.");
try {
    new Symbol();
} catch(e5) {
}
try {
    new Symbol("Cappuccino");
} catch(e9) {
}
var symbolObject = Object(Symbol.iterator);
symbolObject instanceof Symbol;
try {
    String(symbolObject);
} catch(e18) {
}
symbolObject.toString();
var object = {};
object[symbolObject] = 42;
object[symbolObject];
object["Symbol(Symbol.iterator)"];
object[Symbol.iterator];
var symbol = Symbol("Matcha");
object[symbol] = "Cocoa";
object[symbol];
object[symbol.valueOf()];
object[Object(symbol)];
object["Matcha"];
Symbol.iterator.hello;
successfullyParsed = true;
