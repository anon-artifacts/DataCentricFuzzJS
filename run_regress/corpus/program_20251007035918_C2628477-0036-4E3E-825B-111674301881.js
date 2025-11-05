let foo = "get some property storage";
let first = "new first element";
let bar = "ensure property storage is zeroed";
function run(a7) {
    a7.foo = foo;
    let v10;
    try { v10 = new Array(100); } catch (e) {}
    try { a7.unshift(first, ...v10); } catch (e) {}
    a7.bar = bar;
    return a7;
}
try { noInline(run); } catch (e) {}
function test() {
    const v15 = [];
    let v16;
    try { v16 = run(v15); } catch (e) {}
    let array = v16;
    if (array?.foo !== foo) {
        let v21;
        try { v21 = new Error(); } catch (e) {}
        throw v21;
    }
    if (array?.bar !== bar) {
        let v25;
        try { v25 = new Error(); } catch (e) {}
        throw v25;
    }
    if (array?.[0] !== first) {
        let v29;
        try { v29 = new Error(); } catch (e) {}
        throw v29;
    }
    array = [];
    try { array.unshift(1); } catch (e) {}
    let v33;
    try { v33 = run(array); } catch (e) {}
    array = v33;
    if (array?.foo !== foo) {
        let v37;
        try { v37 = new Error(); } catch (e) {}
        throw v37;
    }
    if (array?.bar !== bar) {
        let v41;
        try { v41 = new Error(); } catch (e) {}
        throw v41;
    }
    if (array?.[0] !== first) {
        let v45;
        try { v45 = new Error(); } catch (e) {}
        throw v45;
    }
}
for (let i47 = 0; i47 < 1; i47++) {
    try { test(); } catch (e) {}
}
