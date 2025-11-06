function toString(a1) {
    const v2 = a1.__proto__;
    try { f(v2); } catch (e) {}
    const v7 = Object?.prototype?.toString;
    let v8;
    try { v8 = v7.call(a1); } catch (e) {}
    return v8;
}
class C10 extends Number {
}
const t10 = C10.prototype;
t10[Symbol.toStringTag] = "TestNumber";
const v16 = new C10();
try { toString(v16); } catch (e) {}
const v20 = new C10();
try { toString(v20); } catch (e) {}
class C24 extends Boolean {
}
const t18 = C24.prototype;
t18[Symbol.toStringTag] = "TestBoolean";
const v29 = new C24();
try { toString(v29); } catch (e) {}
const v33 = new C24();
try { toString(v33); } catch (e) {}
class C37 extends String {
}
const t26 = C37.prototype;
t26[Symbol.toStringTag] = "TestString";
const v42 = new C37();
try { toString(v42); } catch (e) {}
const v46 = new C37();
try { toString(v46); } catch (e) {}
class C49 {
}
class C50 extends C49 {
}
const t36 = C50.prototype;
t36[Symbol.toStringTag] = "TestBigInt";
const v54 = new C50();
var b = v54;
try { toString(b); } catch (e) {}
try { toString(b); } catch (e) {}
class C62 extends C49 {
}
const t44 = C62.prototype;
t44[Symbol.toStringTag] = "TestSymbol";
const v66 = new C62();
var sym = v66;
const v68 = Symbol.prototype;
const t49 = sym.__proto__;
t49.__proto__ = v68;
try { toString(sym); } catch (e) {}
try { toString(sym); } catch (e) {}
