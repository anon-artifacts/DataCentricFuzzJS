function f0() {
}
function verifyObjectDescriptors(a2, a3, a4) {
    const v6 = Object.getOwnPropertySymbols(a2);
    var allProperties = Object.getOwnPropertyNames(a2).concat(v6);
    f0([a3,a4], allProperties, "Result should have one descriptor for each own property");
    f0(a2.hasOwnProperty(a3), "Result should contain all own properties");
    f0(a2.hasOwnProperty(a4), "Result should contain all own properties");
    f0(a2[a3].value, "fooAllTrue", "Result value attribute should match the value set by defineProperties");
    f0(a2[a4].value, "fooAllFalse", "Result value attribute should match the value set by defineProperties");
    var expectedProps = ["configurable","writable","enumerable"];
    for (const v34 in expectedProps) {
        f0(a2[a3][expectedProps[v34]]);
        f0(a2[a4][expectedProps[v34]]);
    }
}
try {
    f0(Object.hasOwnProperty("getOwnPropertyDescriptors"));
    f0(Object.hasOwnProperty({}, "getOwnPropertyDescriptors"));
    Object.getOwnPropertyDescriptor({}, "getOwnPropertyDescriptors");
} catch(e54) {
}
for (const v56 in {}) {
    f0(v56 != "getOwnPropertyDescriptors");
}
f0(1, Object.getOwnPropertyDescriptors.length, "Object.getOwnPropertyDescriptors requires exactly one parameter.");
try {
    Object.getOwnPropertyDescriptors();
    Object.getOwnPropertyDescriptors(null);
} catch(e69) {
}
const v73 = {
    get a() {
    },
    set a(a72) {
    },
};
var a = v73;
var b = Object.getOwnPropertyDescriptors(a);
f0(b.a.get === Object.getOwnPropertyDescriptor(a, "a").get);
f0(b.a.set === Object.getOwnPropertyDescriptor(a, "a").set);
var foo = {};
const v97 = { configurable: true, enumerable: true, value: "fooAllTrue", writable: true };
const v102 = { configurable: false, enumerable: false, value: "fooAllFalse", writable: false };
Object.defineProperties(foo, { fooAllTrue: v97, fooAllFalse: v102 });
var desc = Object.getOwnPropertyDescriptors(foo);
f0(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, "fooAllTrue", "fooAllFalse");
var foo = {};
var allTrueNum = 1234;
var allFalseNum = 5678;
const v123 = { configurable: true, enumerable: true, value: "fooAllTrue", writable: true };
const v128 = { configurable: false, enumerable: false, value: "fooAllFalse", writable: false };
Object.defineProperties(foo, { [allTrueNum]: v123, [allFalseNum]: v128 });
var desc = Object.getOwnPropertyDescriptors(foo);
f0(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, allTrueNum.toString(), allFalseNum.toString());
f0(desc[allTrueNum].value, "fooAllTrue", "For properties with number names, resulting properties should be accessible with numeric names.");
f0(desc[allFalseNum].value, "fooAllFalse", "For properties with number names, resulting properties should be accessible with numeric names.");
var foo = {};
var allTrueSymbol = Symbol("allTrue");
var allFalseSymbol = Symbol("allFalse");
const v162 = { configurable: true, enumerable: true, value: "fooAllTrue", writable: true };
const v167 = { configurable: false, enumerable: false, value: "fooAllFalse", writable: false };
Object.defineProperties(foo, { [allTrueSymbol]: v162, [allFalseSymbol]: v167 });
var desc = Object.getOwnPropertyDescriptors(foo);
f0(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, allTrueSymbol, allFalseSymbol);
function f176() {
}
var proxyHandler = { getOwnPropertyDescriptor: f176 };
var key = "a";
var obj = {};
obj[key] = "value";
const v185 = new Proxy(obj, proxyHandler);
var proxy = v185;
var descriptor = Object.getOwnPropertyDescriptor(proxy, key);
f0(undefined, descriptor, "Descriptor matches result of [[GetOwnPropertyDescriptor]] trap");
var result = Object.getOwnPropertyDescriptors(proxy);
f0(result.hasOwnProperty(key));
