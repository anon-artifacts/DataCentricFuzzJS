function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function* f8() {
}
var GeneratorFunction = f8.constructor;
class C11 extends GeneratorFunction {
    constructor() {
        super("yield 42");
    }
    hello() {
        return 50;
    }
}
const v16 = new C11();
let DerivedGenerator = v16;
shouldBe(DerivedGenerator.__proto__, C11.prototype);
shouldBe(DerivedGenerator.hello(), 50);
let gen = DerivedGenerator();
shouldBe(gen.next().value, 42);
