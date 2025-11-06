function f0() {
}
const v1 = /(a(?!bbb|bb)c)/gdis;
const v2 = /w\P{Any}/vd;
const v3 = /jc4/mgdis;
function f4() {
    return v3;
}
function f5(a6) {
    const v14 = {
        __proto__: a6,
        set h(a8) {
            try {
                super.set(v1);
            } catch(e10) {
            }
        },
        set g(a12) {
            a12 <= a6;
        },
        f: f4,
        [v3]: v1,
        c: a6,
        g: f4,
        [a6]: a6,
    };
    return v14;
}
f5(v2);
f5(v1);
f5(v2);
try {
    if ((f4.substr(-3) != ".js") && (f4.length != 1)) {
        evaluate(f4);
    }
} catch(e29) {
}
function testFloatArrayIndex() {
    var a = [];
    for (let i39 = 0; i39 < 10; ++i39) {
        a[3] = 5;
        a[3.5] = 7;
    }
    return (a[3] + ",") + a[3.5];
}
function test() {
    'use strict';
    let baz = 1;
    for (let i69 = (() => {
            function warmup(a60) {
                try { a60(0); } catch (e) {}
                try { a60(1); } catch (e) {}
                try { a60(2); } catch (e) {}
                try { a60(3); } catch (e) {}
            }
            return 0;
        })();
        false;
        ) {
    }
    return baz === 1;
}
if (!test()) {
    const v80 = new Error("Test failed");
    throw v80;
}
