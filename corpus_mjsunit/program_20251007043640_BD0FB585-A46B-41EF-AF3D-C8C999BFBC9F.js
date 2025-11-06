let flag = true;
function o() {
    if (flag) {
        return { x: 20 };
    }
    return { y: 20, x: 20 };
}
try { noInline(o); } catch (e) {}
let counter = 0;
function e() {
    if ((++counter % 50) === 0) {
        let v19;
        try { v19 = new Error(); } catch (e) {}
        throw v19;
    }
}
try { noInline(e); } catch (e) {}
let counter2 = 0;
function e2() {
    if ((++counter2 % 2) === 0) {
        let v30;
        try { v30 = new Error(); } catch (e) {}
        throw v30;
    }
}
try { noInline(e2); } catch (e) {}
function escape() {
}
try { noInline(escape); } catch (e) {}
function baz(a35) {
    try {
        try { e(); } catch (e) {}
        const v37 = a35?.x;
        try { escape(v37); } catch (e) {}
    } catch(e39) {
        const v40 = a35?.x;
        try { escape(v40); } catch (e) {}
        try { e2(); } catch (e) {}
    } finally {
        a35?.x;
    }
}
try { noInline(baz); } catch (e) {}
{
    let o = { x: 20 };
    function run() {
        for (let i50 = 0; i50 < 1000; ++i50) {
            try {
                try { baz(o); } catch (e) {}
            } catch(e57) {
            }
        }
    }
    try { run(); } catch (e) {}
    o = { y: 40, x: 20 };
    try { run(); } catch (e) {}
}
