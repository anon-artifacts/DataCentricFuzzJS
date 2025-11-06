const v1 = {};
function f2() {
    return undefined;
}
function f4() {
    return true;
}
const v6 = { getOwnPropertyDescriptor: f2, has: f4 };
let v7;
try { v7 = new Proxy(v1, v6); } catch (e) {}
var prox = v7;
let v11;
try { v11 = newGlobal(); } catch (e) {}
const v12 = v11?.__lookupSetter__;
try { v12.call(prox, "e"); } catch (e) {}
