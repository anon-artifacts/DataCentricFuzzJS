BigInt.prototype.toJSON;
const v4 = () => {
    return JSON.stringify(40);
};
v4();
const v10 = () => {
    return JSON.stringify(Object(40));
};
v10();
function f17() {
    'bigint';
    typeof this;
    return String(this);
}
const t14 = BigInt.prototype;
t14.toJSON = f17;
JSON.stringify(40);
function f28() {
    'object';
    typeof this;
    return String(this);
}
const t22 = BigInt.prototype;
t22.toJSON = f28;
JSON.stringify(Object(40));
function f40() {
    return this;
}
const t28 = BigInt.prototype;
t28.toJSON = f40;
const v43 = () => {
    return JSON.stringify(40);
};
v43();
const v47 = () => {
    return JSON.stringify(Object(40));
};
v47();
function f52() {
    return Object(this);
}
const t41 = BigInt.prototype;
t41.toJSON = f52;
const v56 = () => {
    return JSON.stringify(40);
};
v56();
const v60 = () => {
    return JSON.stringify(Object(40));
};
v60();
const t50 = BigInt.prototype;
delete t50.toJSON;
let replacer;
function f69(a70, a71) {
    'bigint';
    typeof a71;
    40 == a71;
    return "43";
}
replacer = f69;
JSON.stringify(40, replacer);
function f79(a80, a81) {
    'object';
    typeof a81;
    40 == a81;
    return "43";
}
replacer = f79;
JSON.stringify(Object(40), replacer);
BigInt.prototype.toJSON;
const v93 = () => {
    return 40;
};
replacer = v93;
const v95 = () => {
    return JSON.stringify(40, replacer);
};
v95();
const v99 = () => {
    return JSON.stringify(Object(40), replacer);
};
v99();
BigInt.prototype.toJSON;
const v107 = () => {
    return Object(40);
};
replacer = v107;
const v110 = () => {
    return JSON.stringify(40, replacer);
};
v110();
const v114 = () => {
    return JSON.stringify(Object(40), replacer);
};
v114();
