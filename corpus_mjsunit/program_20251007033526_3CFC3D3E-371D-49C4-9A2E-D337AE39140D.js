function newFastRegExp() {
    const v3 = new RegExp(".");
    return v3;
}
function toSlowRegExp(a5) {
    a5.exec = 42;
}
let re = newFastRegExp();
const v9 = () => {
    return toSlowRegExp(re);
};
const v12 = Symbol.toPrimitive;
const evil_nonstring = { [v12]: v9 };
const empty_string = "";
String.prototype.replace.call(evil_nonstring, re, empty_string);
re = newFastRegExp();
String.prototype.match.call(evil_nonstring, re, empty_string);
re = newFastRegExp();
String.prototype.search.call(evil_nonstring, re, empty_string);
re = newFastRegExp();
String.prototype.split.call(evil_nonstring, re, empty_string);
