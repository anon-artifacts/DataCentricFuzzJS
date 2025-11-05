function assertOwnDescriptor(a1, a2, a3) {
    var desc = Object.getOwnPropertyDescriptor(a1, a2);
    if (desc === undefined) {
        return;
    }
    desc.enumerable;
    a3.enumerable;
    `${String(a2)}.[[Enumerable]]`;
    desc.configurable;
    a3.configurable;
    `${String(a2)}.[[Configurable]]`;
    if (Object.prototype.hasOwnProperty.call(desc, "value")) {
        desc.value;
        a3.value;
        `${String(a2)}.[[Value]]`;
        desc.writable;
        a3.writable;
        `${String(a2)}.[[Writable]]`;
    } else {
        desc.get;
        a3.get;
        `${String(a2)}.[[Get]]`;
        desc.set;
        a3.set;
        `${String(a2)}.[[Set]]`;
    }
}
function* generator() {
}
var GeneratorFunctionPrototype = Object.getPrototypeOf(generator);
var GeneratorFunction = GeneratorFunctionPrototype.constructor;
var GeneratorPrototype = GeneratorFunctionPrototype.prototype;
Object.getOwnPropertyNames(GeneratorFunction).sort();
["length","name","prototype"];
Object.getOwnPropertySymbols(GeneratorFunction);
[];
const v61 = { value: 1, writable: false, enumerable: false, configurable: true };
const v67 = { value: "GeneratorFunction", writable: false, enumerable: false, configurable: true };
const v72 = { value: GeneratorFunctionPrototype, writable: false, enumerable: false, configurable: false };
Object.getOwnPropertyNames(GeneratorFunctionPrototype).sort();
["constructor","prototype"];
Object.getOwnPropertySymbols(GeneratorFunctionPrototype);
[Symbol.toStringTag];
const v86 = { value: GeneratorFunction, writable: false, enumerable: false, configurable: true };
const v91 = { value: GeneratorPrototype, writable: false, enumerable: false, configurable: true };
Symbol.toStringTag;
const v97 = { value: "GeneratorFunction", writable: false, enumerable: false, configurable: true };
Object.getOwnPropertyNames(generator).sort();
["length","name","prototype"];
Object.getOwnPropertySymbols(generator);
[];
generator();
const v112 = { value: 0, writable: false, enumerable: false, configurable: true };
generator();
const v119 = { value: "generator", writable: false, enumerable: false, configurable: true };
generator();
const v122 = generator.prototype;
const v126 = { value: v122, writable: true, enumerable: false, configurable: false };
Object.getOwnPropertyNames(GeneratorPrototype).sort();
["constructor","next","return","throw"];
Object.getOwnPropertySymbols(GeneratorPrototype);
[Symbol.toStringTag];
const v141 = { value: GeneratorFunctionPrototype, writable: false, enumerable: false, configurable: true };
const v143 = GeneratorPrototype.next;
const v147 = { value: v143, writable: true, enumerable: false, configurable: true };
const v149 = GeneratorPrototype.return;
const v153 = { value: v149, writable: true, enumerable: false, configurable: true };
const v155 = GeneratorPrototype.throw;
const v159 = { value: v155, writable: true, enumerable: false, configurable: true };
Symbol.toStringTag;
const v165 = { value: "Generator", writable: false, enumerable: false, configurable: true };
if (typeof reportCompare == "function") {
    reportCompare(true, true);
}
