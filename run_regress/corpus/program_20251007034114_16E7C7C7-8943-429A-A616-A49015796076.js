console.log("This tests that ToString(Symbol) behaviors.");
String(Symbol.iterator);
try {
    String(Symbol.prototype);
} catch(e9) {
}
const v10 = Symbol.iterator;
Symbol.prototype.toString.call(v10);
const v15 = Symbol("hello");
Symbol.prototype.toString.call(v15);
const v19 = Symbol();
Symbol.prototype.toString.call(v19);
const v23 = Symbol();
Object.prototype.toString.call(v23);
const v28 = Symbol.prototype;
Object.prototype.toString.call(v28);
Object.prototype.toString.call(Symbol);
successfullyParsed = true;
