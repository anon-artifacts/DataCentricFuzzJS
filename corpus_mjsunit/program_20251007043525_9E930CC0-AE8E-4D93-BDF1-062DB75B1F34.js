var global = this;
function testNamedProperty(a3, a4) {
    global[a3] = a4;
    global.hasOwnProperty(a3);
    -1 < Object.keys(global).indexOf(a3);
    -1 < Object.getOwnPropertyNames(global).indexOf(a3);
    -1 == Object.getOwnPropertySymbols(global).indexOf(a3);
}
testNamedProperty("property0", "value");
testNamedProperty("0property", "value");
testNamedProperty("42", "value");
function testNamedNonEnumerableProperty(a32, a33) {
    Object.defineProperty(global, a32, { enumerable: false, value: a33 });
    global.hasOwnProperty(a32);
    -1 == Object.keys(global).indexOf(a32);
    -1 < Object.getOwnPropertyNames(global).indexOf(a32);
    -1 == Object.getOwnPropertySymbols(global).indexOf(a32);
}
testNamedNonEnumerableProperty("property1", "value");
testNamedNonEnumerableProperty("1property", "value");
testNamedNonEnumerableProperty("43", "value");
function testSymbolProperty(a64, a65) {
    global[a64 = Symbol(a64)] = a65;
    global.hasOwnProperty(a64);
    -1 == Object.keys(global).indexOf(a64);
    -1 == Object.getOwnPropertyNames(global).indexOf(a64);
    -1 < Object.getOwnPropertySymbols(global).indexOf(a64);
}
testSymbolProperty("property2", "value");
testSymbolProperty("2property", "value");
testSymbolProperty("43", "value");
