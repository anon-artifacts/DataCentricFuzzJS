const v1 = {};
function f2() {
    throw prox;
}
const v5 = new Proxy(v1, { getOwnPropertyDescriptor: f2 });
var prox = v5;
const v10 = Object.prototype.__lookupGetter__;
try { v10.call(prox, "q"); } catch (e) {}
