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
shouldBe(Reflect.get.length, 2);
const v15 = () => {
    Reflect.get("hello");
};
shouldThrow(v15, `TypeError: Reflect.get requires the first argument be an object`);
var object = { hello: 42 };
shouldBe(Reflect.get(object, "hello"), 42);
shouldBe(Reflect.get(object, "world"), undefined);
var proto = [];
object.__proto__ = proto;
shouldBe(Reflect.get(object, "length"), 0);
var array = [0,1,2];
shouldBe(Reflect.get(array, 0), 0);
var proto = [0,1,2,5,6];
array.__proto__ = proto;
shouldBe(Reflect.get(array, 3), 5);
array.__proto__ = Object.prototype;
shouldBe(Reflect.get(array, 3), undefined);
const v67 = {
    value: 42,
    world: 200,
    get hello() {
        return this.value;
    },
};
var object = v67;
shouldBe(Reflect.get(object, "hello"), 42);
shouldBe(Reflect.get(object, "hello", { value: 200 }), 200);
shouldBe(Reflect.get(object, "hello", "OK"), undefined);
shouldBe(Reflect.get(object, "world"), 200);
shouldBe(Reflect.get(object, "world", { value: 200 }), 200);
shouldBe(Reflect.get(object, "world", "OK"), 200);
var value = 400;
shouldBe(Reflect.get(object, "hello", null), 400);
shouldBe(Reflect.get(object, "hello", undefined), 400);
const v115 = {
    value: 42,
    world: 200,
    get hello() {
        'use strict';
        return this.value;
    },
};
var object = v115;
shouldBe(Reflect.get(object, "hello"), 42);
shouldBe(Reflect.get(object, "hello", { value: 200 }), 200);
shouldBe(Reflect.get(object, "hello", "OK"), undefined);
shouldBe(Reflect.get(object, "world"), 200);
shouldBe(Reflect.get(object, "world", { value: 200 }), 200);
shouldBe(Reflect.get(object, "world", "OK"), 200);
const v147 = () => {
    Reflect.get(object, "hello", null);
};
shouldThrow(v147, `TypeError: null is not an object (evaluating 'this.value')`);
const v153 = () => {
    Reflect.get(object, "hello", undefined);
};
shouldThrow(v153, `TypeError: undefined is not an object (evaluating 'this.value')`);
const v163 = {
    value: 42,
    world: 200,
    set hello(a162) {
    },
};
var object = v163;
shouldBe(Reflect.get(object, "hello"), undefined);
shouldBe(Reflect.get(object, "hello", { hello: 42 }), undefined);
shouldBe(Reflect.get(object, "ok", { ok: 42 }), undefined);
