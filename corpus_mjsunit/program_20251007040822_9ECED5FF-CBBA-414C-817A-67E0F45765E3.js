let v1;
try { v1 = newGlobal(); } catch (e) {}
var global = v1;
const v3 = global?.Array;
let v4;
try { v4 = new v3(); } catch (e) {}
const v6 = global?.Symbol?.iterator;
let v7;
try { v7 = v4[v6](); } catch (e) {}
var arrayIter = v7;
let v10;
try { v10 = Object.getPrototypeOf(arrayIter); } catch (e) {}
var ArrayIteratorPrototype = v10;
let v12;
try { v12 = Object.getPrototypeOf(ArrayIteratorPrototype); } catch (e) {}
var arrayIterProtoBase = v12;
var IteratorPrototype = arrayIterProtoBase;
delete IteratorPrototype?.next;
let v17;
try { v17 = global.eval("({a: 1})"); } catch (e) {}
var obj = v17;
for (const v19 in obj) {
}
