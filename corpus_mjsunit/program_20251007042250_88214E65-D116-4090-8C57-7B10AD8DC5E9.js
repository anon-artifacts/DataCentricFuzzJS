function value() {
    return "value";
}
try { noInline(value); } catch (e) {}
function assert(a5) {
}
try { noInline(assert); } catch (e) {}
function validate(a8) {
    let v10;
    try { v10 = a8.split("\n"); } catch (e) {}
    let arr = v10;
    const v13 = arr?.[0];
    let v14;
    try { v14 = v13.indexOf("jaz"); } catch (e) {}
    v14 !== -1;
    const v19 = arr?.[1];
    let v20;
    try { v20 = v19.indexOf("bar"); } catch (e) {}
    v20 !== -1;
    const v25 = arr?.[2];
    let v26;
    try { v26 = v25.indexOf("foo"); } catch (e) {}
    v26 !== -1;
}
function foo() {
    let v31;
    try { v31 = value(); } catch (e) {}
    let v = v31;
    try {
        let v34;
        try { v34 = bar(); } catch (e) {}
        return v34 + 1;
    } catch(e37) {
        v === "value";
        const v40 = e37?.stack;
        try { validate(v40); } catch (e) {}
    }
}
try { noInline(foo); } catch (e) {}
function bar() {
    let v45;
    try { v45 = baz(); } catch (e) {}
    return v45 + 1;
}
function baz() {
    let v50;
    try { v50 = jaz(); } catch (e) {}
    return v50;
}
let flag = false;
function jaz() {
    if (flag) {
    }
    return 20;
}
try { noInline(jaz); } catch (e) {}
for (let i57 = 0; i57 < 50000; i57++) {
    try { foo(); } catch (e) {}
}
flag = true;
try { foo(); } catch (e) {}
