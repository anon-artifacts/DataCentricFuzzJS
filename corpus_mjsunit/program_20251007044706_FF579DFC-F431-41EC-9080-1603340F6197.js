function g() {
    switch (0) {
        default:
            let v4;
            try { v4 = newGlobal(""); } catch (e) {}
            w = v4;
    }
    function f6(a7, a8) {
        try {
            try { evalcx(a8, w); } catch (e) {}
        } catch(e12) {
        }
    }
    return f6;
}
function f(a14) {
    const v16 = Function(a14);
    try { h(v16, a14); } catch (e) {}
}
let v19;
try { v19 = g(); } catch (e) {}
h = v19;
f("    x = [];    y = new Set;    z = [];    Object.defineProperty(x, 5, {        get: (function(j) {}),    });    Object.defineProperty(z, 3, {});    z[9] = 1;    x.shift();");
f("    z.every(function() {        x.filter(function(j) {            if (j) {} else {                y.add()            }        });        return 2    })");
