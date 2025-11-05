class C0 {
}
class C1 extends C0 {
    constructor(a3) {
        super();
        return a3;
    }
}
function f4() {
    try { new C1(null); } catch (e) {}
}
f4();
function f9() {
    try { new C1(42); } catch (e) {}
}
f9();
function f13() {
    try { new C1(true); } catch (e) {}
}
f13();
function f17() {
    try { new C1("hi"); } catch (e) {}
}
f17();
function f21() {
    const v23 = Symbol();
    try { new C1(v23); } catch (e) {}
}
f21();
new C1(undefined);
function f() {
}
const v29 = new f();
new C1(v29);
f();
new C1(/re/);
class C35 extends C0 {
    constructor(a37) {
        return a37;
    }
}
function f38() {
    try { new C35(null); } catch (e) {}
}
f38();
function f42() {
    try { new C35(42); } catch (e) {}
}
f42();
function f46() {
    try { new C35(true); } catch (e) {}
}
f46();
function f50() {
    try { new C35("hi"); } catch (e) {}
}
f50();
function f54() {
    const v56 = Symbol();
    try { new C35(v56); } catch (e) {}
}
f54();
function f59() {
    try { new C35(undefined); } catch (e) {}
}
f59();
function f2() {
}
const v65 = new f2();
new C35(v65);
f2();
new C35(/re/);
class C70 extends C0 {
    constructor() {
        super();
        return;
    }
}
new C70();
class C73 extends C0 {
    constructor() {
        super();
        return this;
    }
}
new C73();
