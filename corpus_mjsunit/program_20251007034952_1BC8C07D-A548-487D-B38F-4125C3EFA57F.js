new Int32Array(78);
new Int8Array(64);
new Uint8ClampedArray(6);
function newFastRegExp() {
    const v15 = new RegExp(".");
    return v15;
}
function toSlowRegExp(a17) {
    a17.constructor = newFastRegExp;
    a17.exec = 42;
}
let re = newFastRegExp();
const v21 = () => {
    return toSlowRegExp(re);
};
const v24 = Symbol.toPrimitive;
const evil_nonstring = { [v24]: v21 };
const empty_string = "";
String.prototype.replace.call(evil_nonstring, re, empty_string);
re = newFastRegExp();
String.prototype.match.call(evil_nonstring, re, empty_string);
re = newFastRegExp();
String.prototype.search.call(evil_nonstring, re, empty_string);
const v41 = newFastRegExp();
v41.constructor = newFastRegExp;
re = v41;
String.prototype.split.call(evil_nonstring, re, empty_string);
