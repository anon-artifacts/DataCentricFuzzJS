function baz() {
}
try { noInline(baz); } catch (e) {}
function bar(a4, a5, a6) {
    try { baz(a6); } catch (e) {}
    return (a4 + a5) + 20.2;
}
function foo(a12, a13) {
    let y = a12 + 10.54;
    let z = y;
    if (a13) {
        y += 1.23;
        z += 2.199;
    } else {
        y += 2.27;
        z += 2.18;
    }
    const v22 = a13 ? y : z;
    const v24 = !a13 ? y : z;
    let v25;
    try { v25 = bar(v22, v24); } catch (e) {}
    let r = v25;
    return r;
}
try { noInline(foo); } catch (e) {}
for (let i29 = 0; i29 < 1000; ++i29) {
    const v36 = i29 + 0.5;
    const v40 = !(!(i29 % 2));
    try { foo(v36, v40); } catch (e) {}
}
