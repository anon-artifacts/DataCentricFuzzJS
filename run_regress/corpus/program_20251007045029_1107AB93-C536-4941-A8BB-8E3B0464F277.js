function f0() {
}
var BUGNUMBER = 492840;
var summary = "ES5 Object.create(O [, Properties])";
f0((BUGNUMBER + ": ") + summary);
"create" in Object;
Object.create.length;
var o;
var desc;
var props;
var proto;
o = Object.create(null);
Object.getPrototypeOf(o);
const v32 = { value: 17, enumerable: false };
o = Object.create(null, { a: v32 });
Object.getPrototypeOf(o);
"a" in o;
(desc = Object.getOwnPropertyDescriptor(o, "a")) !== undefined;
desc.value;
desc.enumerable;
desc.configurable;
desc.writable;
props = Object.create({ bar: 15 });
Object.defineProperty(props, "foo", { enumerable: false, value: 42 });
o = Object.create(proto = { baz: 12 }, props);
Object.getPrototypeOf(o);
Object.getOwnPropertyDescriptor(o, "foo");
"foo" in o;
Object.getOwnPropertyDescriptor(o, "bar");
"bar" in o;
Object.getOwnPropertyDescriptor(o, "baz");
o.baz;
o.hasOwnProperty("baz");
try {
    const v87 = {};
    function f88() {
        return "base";
    }
    const v90 = { get: f88 };
    const v92 = Object.create(v87, { boom: v90 });
    function f93() {
        return "overridden";
    }
    const v95 = { get: f93 };
    var actual = Object.create(v92, { boom: v95 }).boom;
} catch(e100) {
}
f0(true, true);
f0("All tests passed!");
