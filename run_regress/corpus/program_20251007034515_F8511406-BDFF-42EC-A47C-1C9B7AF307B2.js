console.log("This test checks the behavior of Number.prototype.toLocaleString as described in the ECMAScript Internationalization API Specification (ECMA-402 2.0).");
Number.prototype.toLocaleString.length;
Object.getOwnPropertyDescriptor(Number.prototype, "toLocaleString").enumerable;
Object.getOwnPropertyDescriptor(Number.prototype, "toLocaleString").configurable;
Object.getOwnPropertyDescriptor(Number.prototype, "toLocaleString").writable;
try {
    Number.prototype.toLocaleString.call(0);
} catch(e24) {
}
try {
    Number.prototype.toLocaleString.call(NaN);
} catch(e29) {
}
try {
    Number.prototype.toLocaleString.call(Infinity);
} catch(e34) {
}
try {
    const v35 = new Number();
    Number.prototype.toLocaleString.call(v35);
} catch(e39) {
}
try {
    Number.prototype.toLocaleString.call();
} catch(e43) {
}
try {
    Number.prototype.toLocaleString.call(undefined);
} catch(e48) {
}
try {
    Number.prototype.toLocaleString.call(null);
} catch(e53) {
}
try {
    Number.prototype.toLocaleString.call("1");
} catch(e58) {
}
try {
    const v59 = [];
    Number.prototype.toLocaleString.call(v59);
} catch(e63) {
}
try {
    const v65 = Symbol();
    Number.prototype.toLocaleString.call(v65);
} catch(e69) {
}
(1).toLocaleString();
const v73 = new Number(1);
v73.toLocaleString();
try {
    (0.1).toLocaleString("i");
} catch(e78) {
}
Infinity.toLocaleString();
(123456.789).toLocaleString("ar");
(123456.789).toLocaleString("zh-Hans-CN-u-nu-hanidec");
(123.456).toLocaleString("en", { maximumSignificantDigits: 3 });
