const v1 = {};
const v3 = new Proxy(v1, {});
var objectProxy = v3;
function f5() {
}
const v7 = new Proxy(f5, {});
var functionProxy = v7;
Object.prototype.toString.call(objectProxy);
Object.prototype.toString.call(functionProxy);
try {
    Function.prototype.toString.call(objectProxy);
} catch(e24) {
    !(!/incompatible/.exec(e24));
}
