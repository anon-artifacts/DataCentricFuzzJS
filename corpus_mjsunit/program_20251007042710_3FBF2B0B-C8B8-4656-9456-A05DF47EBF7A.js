var Test = {};
class C2 {
    constructor(a4) {
        this.foo = a4;
    }
    toB() {
        const v6 = Test?.B;
        let v7;
        try { v7 = new v6(this); } catch (e) {}
        return v7;
    }
}
class C8 {
    constructor(a10) {
        this.bar = a10;
    }
}
Test.B = C8;
for (let i12 = 0; i12 < 10; i12++) {
    let v18;
    try { v18 = new C2(i12); } catch (e) {}
    var a = v18;
    let v20;
    try { v20 = a.toB(); } catch (e) {}
    var b = v20;
    try {
        const v23 = b?.bar?.foo;
        try { WScript.Echo(v23); } catch (e) {}
    } catch(e26) {
        try { WScript.Echo(e26); } catch (e) {}
        try { WScript.Echo(b); } catch (e) {}
        break;
    }
}
