function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        a1();
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
var symbol = Symbol("Cocoa");
const v14 = () => {
    "" + symbol;
};
shouldThrow(v14, `TypeError: Cannot convert a symbol to a string`);
const v19 = () => {
    +symbol;
};
shouldThrow(v19, `TypeError: Cannot convert a symbol to a number`);
const v23 = () => {
    Symbol.keyFor("Cappuccino");
};
shouldThrow(v23, `TypeError: Symbol.keyFor requires that the first argument be a symbol`);
const v28 = () => {
    Symbol.prototype.toString.call(null);
};
shouldThrow(v28, `TypeError: Symbol.prototype.toString requires that |this| be a symbol or a symbol object`);
const v35 = () => {
    const v36 = {};
    Symbol.prototype.toString.call(v36);
};
shouldThrow(v35, `TypeError: Symbol.prototype.toString requires that |this| be a symbol or a symbol object`);
const v42 = () => {
    Symbol.prototype.valueOf.call(null);
};
shouldThrow(v42, `TypeError: Symbol.prototype.valueOf requires that |this| be a symbol or a symbol object`);
const v49 = () => {
    const v50 = {};
    Symbol.prototype.valueOf.call(v50);
};
shouldThrow(v49, `TypeError: Symbol.prototype.valueOf requires that |this| be a symbol or a symbol object`);
