function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var error = null;
    try {
        a4();
    } catch(e9) {
        error = e9;
    }
}
shouldBe(Reflect.has.length, 2);
const v15 = () => {
    Reflect.has("hello", 42);
};
shouldThrow(v15, `TypeError: Reflect.has requires the first argument be an object`);
var object = { hello: 42 };
shouldBe(Reflect.has(object, "hello"), true);
shouldBe(Reflect.has(object, "world"), false);
shouldBe(Reflect.has(object, "prototype"), false);
shouldBe(Reflect.has(object, "__proto__"), true);
shouldBe(Reflect.has(object, "hasOwnProperty"), true);
shouldBe(Reflect.deleteProperty(object, "hello"), true);
shouldBe(Reflect.has(object, "hello"), false);
shouldBe(Reflect.has([], "length"), true);
shouldBe(Reflect.has([0,1,2], 0), true);
shouldBe(Reflect.has([0,1,2], 200), false);
const v75 = Symbol.iterator;
var object = { [v75]: 42 };
shouldBe(Reflect.has(object, Symbol.iterator), true);
shouldBe(Reflect.has(object, Symbol.unscopables), false);
shouldBe(Reflect.deleteProperty(object, Symbol.iterator), true);
shouldBe(Reflect.has(object, Symbol.iterator), false);
const v98 = {
    toString() {
        const v97 = new Error("toString called.");
        throw v97;
    },
};
var toPropertyKey = v98;
const v100 = () => {
    Reflect.has("hello", toPropertyKey);
};
shouldThrow(v100, `TypeError: Reflect.has requires the first argument be an object`);
const v105 = () => {
    Reflect.has({}, toPropertyKey);
};
shouldThrow(v105, `Error: toString called.`);
const v112 = {
    toString() {
        return "ok";
    },
};
var toPropertyKey = v112;
shouldBe(Reflect.has({ ok: 42 }, toPropertyKey), true);
