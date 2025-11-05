function mod() {
    function f0() {
        for (let i3 = 0; i3 < 3; i3 = (i3 + 1) | 0) {
        }
        return { blah: i };
    }
    function f1(a15) {
        for (let i17 = 0; i17 < 3; i17 = (i17 + 1) | 0) {
        }
        return { blah: i };
    }
    function f2(a29, a30) {
        for (let i32 = 0; i32 < 3; i32 = (i32 + 1) | 0) {
        }
        return { blah: i };
    }
    function f3(a44, a45, a46) {
        for (let i48 = 0; i48 < 3; i48 = (i48 + 1) | 0) {
        }
        return { blah: i };
    }
    function f4(a60, a61, a62, a63) {
        for (let i65 = 0; i65 < 3; i65 = (i65 + 1) | 0) {
        }
        return { blah: i };
    }
    function bar() {
        let v78;
        try { v78 = f0(); } catch (e) {}
        v78?.blah;
        let v81;
        try { v81 = f1(); } catch (e) {}
        v81?.blah;
        let v84;
        try { v84 = f2(); } catch (e) {}
        v84?.blah;
        let v87;
        try { v87 = f3(); } catch (e) {}
        v87?.blah;
        let v90;
        try { v90 = f4(); } catch (e) {}
        v90?.blah;
    }
    bar();
}
mod();
mod();
mod();
