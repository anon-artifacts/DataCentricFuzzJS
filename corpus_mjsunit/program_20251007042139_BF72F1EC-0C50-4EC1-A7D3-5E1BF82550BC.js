var oldSet = Map.prototype.set;
var m;
function constructMap() {
    const v13 = [["a",1],["b",2]];
    let v14;
    try { v14 = new Map(v13); } catch (e) {}
    m = v14;
}
const v15 = Map.prototype;
const v18 = Map.prototype.get;
Object.defineProperty(v15, "set", { get: v18, configurable: true });
try {
    function a() {
        return Map.prototype?.set;
    }
    a();
} catch(e27) {
}
try {
    constructMap();
} catch(e29) {
}
const v30 = Map.prototype;
function f32() {
    return oldSet;
}
Object.defineProperty(v30, "set", { get: f32 });
function a() {
    return Map?.prototype?.set;
}
a();
constructMap();
function b() {
    try { m.set("a", 2); } catch (e) {}
}
b();
m.get("a") === 2;
var oldAdd = Set.prototype.add;
var s;
function constructSet() {
    const v62 = [1,2,3,2,4,1];
    let v63;
    try { v63 = new Set(v62); } catch (e) {}
    s = v63;
}
const v64 = Set.prototype;
const v67 = Set.prototype.has;
Object.defineProperty(v64, "add", { get: v67, configurable: true });
try {
    function a() {
        return Set.prototype?.add;
    }
    a();
} catch(e75) {
}
try {
    constructSet();
} catch(e77) {
}
const v78 = Set.prototype;
function f80() {
    return oldAdd;
}
Object.defineProperty(v78, "add", { get: f80 });
function a() {
    return Set?.prototype?.add;
}
a();
constructSet();
function b() {
    try { s.add(6); } catch (e) {}
}
b();
s.has(6) === true;
