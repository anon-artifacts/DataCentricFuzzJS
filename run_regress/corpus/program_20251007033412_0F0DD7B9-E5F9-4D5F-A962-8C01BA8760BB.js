const v1 = Object.prototype;
const v5 = {
    set() {
        throw "error";
    },
};
Object.defineProperty(v1, "length", v5);
const v7 = Object.prototype;
const v11 = {
    set() {
        throw "error";
    },
};
Object.defineProperty(v7, "values", v11);
const v13 = {};
const v14 = (a15) => {
    return a15;
};
JSON.stringify(v13, v14);
