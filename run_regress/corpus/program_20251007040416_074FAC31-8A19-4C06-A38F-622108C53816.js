let v1 = "128";
function f3() {
    return v1;
}
function f4(a5, a6) {
    const v12 = {
        f: a5,
        b: "c",
        ["resizable"]: "c",
        h: a6,
        ["c"]: v1,
        ..."resizable",
        [a6](a8, a9, a10) {
            delete this?.h;
            v1 = a6;
            return a8;
        },
        c: v1,
        d: f3,
        ..."resizable",
        e: a6,
    };
    return v12;
}
const v13 = f4("resizable", v1);
const v14 = f4("c", v1);
f4("resizable", "resizable");
let v16 = 3;
let v19;
try { v19 = newGlobal(); } catch (e) {}
var g = v19;
try { g.eval("function f(n) { for (var i = 0; i < n; i++) f(0); }"); } catch (e) {}
try { g.f(10); } catch (e) {}
class C25 {
    constructor(a27, a28, a29) {
        v16 >>>= 1716;
        v14 & this;
    }
    valueOf(a32, a33, a34) {
        const v35 = super[a34];
        let v36;
        try { v36 = new v35(v35, "resizable"); } catch (e) {}
        return v36;
    }
}
new C25("c", "resizable", C25);
new C25(v1, "c", C25);
new C25("resizable", v1, v13);
function f40() {
    function f41(a42, a43) {
        function f44(a45, a46) {
        }
    }
    for (let v47 = 0; v47 < 10; v47++) {
        var x = {};
    }
}
