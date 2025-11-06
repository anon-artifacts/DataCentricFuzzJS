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
shouldBe(Reflect.deleteProperty.length, 2);
const v15 = () => {
    Reflect.deleteProperty("hello", 42);
};
shouldThrow(v15, `TypeError: Reflect.deleteProperty requires the first argument be an object`);
var object = { hello: 42 };
shouldBe(object.hello, 42);
shouldBe(object.hasOwnProperty("hello"), true);
shouldBe(Reflect.deleteProperty(object, "hello"), true);
shouldBe(object.hasOwnProperty("hello"), false);
shouldBe(Reflect.deleteProperty(object, "hasOwnProperty"), true);
shouldBe(object.hasOwnProperty("hasOwnProperty"), false);
shouldBe(Reflect.deleteProperty([], "length"), false);
shouldBe(Reflect.deleteProperty([0,1,2], 0), true);
const v62 = Symbol.iterator;
var object = { [v62]: 42 };
shouldBe(object.hasOwnProperty(Symbol.iterator), true);
shouldBe(object[Symbol.iterator], 42);
shouldBe(Reflect.deleteProperty(object, Symbol.iterator), true);
shouldBe(object.hasOwnProperty(Symbol.iterator), false);
const v85 = {
    toString() {
        const v84 = new Error("toString called.");
        throw v84;
    },
};
var toPropertyKey = v85;
const v87 = () => {
    Reflect.deleteProperty("hello", toPropertyKey);
};
shouldThrow(v87, `TypeError: Reflect.deleteProperty requires the first argument be an object`);
const v92 = () => {
    Reflect.deleteProperty({}, toPropertyKey);
};
shouldThrow(v92, `Error: toString called.`);
