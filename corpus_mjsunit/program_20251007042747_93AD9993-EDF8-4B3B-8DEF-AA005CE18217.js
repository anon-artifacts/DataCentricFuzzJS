function f0() {
}
let v2;
try { v2 = newGlobal(); } catch (e) {}
var global = v2;
const v4 = global?.Int8Array;
let v6;
try { v6 = new v4(10); } catch (e) {}
var array = v6;
const v8 = (a9) => {
    return a9 == 1;
};
try { array.find(v8); } catch (e) {}
const v14 = (a15) => {
    return a15 == 0;
};
try { array.findIndex(v14); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
