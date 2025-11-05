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
shouldBe(Reflect.getOwnPropertyDescriptor.length, 2);
const v19 = {
    toString() {
        const v18 = new Error("ok");
        throw v18;
    },
};
var toPropertyKey = v19;
const v21 = () => {
    Reflect.getOwnPropertyDescriptor("hello", 42);
};
shouldThrow(v21, `TypeError: Reflect.getOwnPropertyDescriptor requires the first argument be an object`);
const v27 = () => {
    Reflect.getOwnPropertyDescriptor("hello", toPropertyKey);
};
shouldThrow(v27, `TypeError: Reflect.getOwnPropertyDescriptor requires the first argument be an object`);
const v32 = () => {
    Reflect.getOwnPropertyDescriptor(null, toPropertyKey);
};
shouldThrow(v32, `TypeError: Reflect.getOwnPropertyDescriptor requires the first argument be an object`);
const v37 = () => {
    Reflect.getOwnPropertyDescriptor(undefined, toPropertyKey);
};
shouldThrow(v37, `TypeError: Reflect.getOwnPropertyDescriptor requires the first argument be an object`);
const v42 = () => {
    Reflect.getOwnPropertyDescriptor({}, toPropertyKey);
};
shouldThrow(v42, `Error: ok`);
const v48 = { hello: 42 };
shouldBe(Reflect.getOwnPropertyDescriptor({ __proto__: v48 }, "hello"), undefined);
shouldBe(JSON.stringify(Reflect.getOwnPropertyDescriptor({ hello: 42 }, "hello")), `{"value":42,"writable":true,"enumerable":true,"configurable":true}`);
function f62() {
    const v64 = {
        get hello() {
        },
    };
    var object = v64;
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"enumerable":true,"configurable":true}`);
    shouldBe(desc.set, undefined);
    shouldBe(desc.get, Object.getOwnPropertyDescriptor(object, "hello").get);
}
f62();
function f82() {
    const v85 = {
        set hello(a84) {
        },
    };
    var object = v85;
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"enumerable":true,"configurable":true}`);
    shouldBe(desc.set, Object.getOwnPropertyDescriptor(object, "hello").set);
    shouldBe(desc.get, undefined);
}
f82();
function f103() {
    const v104 = {};
    var object = Object.defineProperty(v104, "hello", { enumerable: false, value: 42 });
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"value":42,"writable":false,"enumerable":false,"configurable":false}`);
}
f103();
function f119() {
    const v120 = {};
    var object = Object.defineProperty(v120, "hello", { enumerable: false, configurable: true, value: 42 });
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"value":42,"writable":false,"enumerable":false,"configurable":true}`);
}
f119();
function f136() {
    const v137 = {};
    var object = Object.defineProperty(v137, "hello", { enumerable: true, configurable: false, value: 42 });
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"value":42,"writable":false,"enumerable":true,"configurable":false}`);
}
f136();
function f153() {
    const v154 = {};
    var object = Object.defineProperty(v154, "hello", { enumerable: true, configurable: false, writable: false, value: 42 });
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"value":42,"writable":false,"enumerable":true,"configurable":false}`);
}
f153();
function f171() {
    const v172 = {};
    var object = Object.defineProperty(v172, "hello", { enumerable: true, configurable: false, writable: true, value: 42 });
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"value":42,"writable":true,"enumerable":true,"configurable":false}`);
}
f171();
function f189() {
    const v193 = {
        get hello() {
        },
        set hello(a192) {
        },
    };
    var object = v193;
    var desc = Reflect.getOwnPropertyDescriptor(object, "hello");
    shouldBe(JSON.stringify(desc), `{"enumerable":true,"configurable":true}`);
    shouldBe(desc.get, Object.getOwnPropertyDescriptor(object, "hello").get);
    shouldBe(desc.set, Object.getOwnPropertyDescriptor(object, "hello").set);
}
f189();
function f213() {
    const v217 = {
        get hello() {
        },
        set hello(a216) {
        },
    };
    var object = v217;
    const v221 = {
        toString() {
            return "hello";
        },
    };
    var desc = Reflect.getOwnPropertyDescriptor(object, v221);
    shouldBe(JSON.stringify(desc), `{"enumerable":true,"configurable":true}`);
    shouldBe(desc.get, Object.getOwnPropertyDescriptor(object, "hello").get);
    shouldBe(desc.set, Object.getOwnPropertyDescriptor(object, "hello").set);
}
f213();
