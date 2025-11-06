const v2 = { a: "A", b: "B" };
function f3(a4) {
    const v5 = /a|b/g;
    function f6(a7) {
        return a4[a7];
    }
    ("abc").replace(v5, f6);
}
f3(v2);
function f13() {
    var b = { a: "A", b: "B" };
    const v18 = /a|b/g;
    function f19(a20) {
        return b[a20];
    }
    ("abc").replace(v18, f19);
}
f13();
function f26() {
    {
        let b = { a: "A", b: "B" };
        const v31 = /a|b/g;
        function f32(a33) {
            return b[a33];
        }
        ("abc").replace(v31, f32);
    }
}
f26();
function f39() {
    var b = { a: "A", b: "B" };
    function f44() {
        const v45 = /a|b/g;
        function f46(a47) {
            return b[a47];
        }
        ("abc").replace(v45, f46);
    }
    f44();
}
f39();
function f54() {
    {
        let b = { a: "A", b: "B" };
        function f59() {
            const v60 = /a|b/g;
            function f61(a62) {
                return b[a62];
            }
            ("abc").replace(v60, f61);
        }
        f59();
    }
}
f54();
function f69() {
    var b = { a: "A", b: "B" };
    function f74() {
        function f75() {
            const v76 = /a|b/g;
            function f77(a78) {
                return b[a78];
            }
            ("abc").replace(v76, f77);
        }
        f75();
    }
    f74();
}
f69();
function f86() {
    var b = { a: "A", b: "B" };
    with ({}) {
        function f92() {
            const v93 = /a|b/g;
            function f94(a95) {
                return b[a95];
            }
            ("abc").replace(v93, f94);
        }
        f92();
    }
}
f86();
function f102() {
    var b = { a: "A", b: "B" };
    function f107() {
        b = { a: 1, b: 2 };
        return "X";
    }
    var bad = f107;
    Object.defineProperty(b, "x", { get: bad });
    const v117 = /x|a|b/g;
    function f118(a119) {
        return b[a119];
    }
    ("xabc").replace(v117, f118);
}
f102();
