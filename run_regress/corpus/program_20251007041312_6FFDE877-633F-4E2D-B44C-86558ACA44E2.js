try {
    function f0(a1) {
        return a1 + 10;
    }
    function f4(a5) {
        return a5 + 20;
    }
    var a = [f0,f4];
    function f10(a11) {
        return a11 + 30;
    }
    const t11 = a.__proto__;
    t11.test = f10;
    function f(a16) {
        a[a](a16 + 1);
        return "r" + a[a](a16 + 2);
    }
    f(0);
    f(0);
    f(1);
    f(1);
    f("test");
    function f41(a42) {
        return a42 + 10;
    }
    function f46(a47) {
        return a47 + 20;
    }
    var a2 = [f41,,f46];
    function f52(a53) {
        return a53 + 30;
    }
    const t32 = a2.__proto__;
    t32.test = f52;
    function f2(a58) {
        const v62 = a58 + 1;
        try { a2[a2](v62); } catch (e) {}
        const v65 = a58 + 2;
        let v66;
        try { v66 = a2[a2](v65); } catch (e) {}
        return "r" + v66;
    }
    f2(0);
    f2(0);
    f2(2);
    f2(2);
    function f80() {
        f2(1);
    }
    f80();
} catch(e84) {
}
