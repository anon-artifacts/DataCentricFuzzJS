var log = [];
const v2 = [];
const v7 = {
    get() {
        log.push("get 0");
    },
};
var replacer = Object.defineProperty(v2, 0, v7);
const v12 = new String();
const v18 = {
    value() {
        log.push("toString");
        return "";
    },
};
var space = Object.defineProperty(v12, "toString", v18);
JSON.stringify("", replacer, space);
log.length;
log[0];
log[1];
