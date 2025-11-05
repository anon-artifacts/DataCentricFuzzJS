var a = ["String",false,42];
var count = 0;
function getX(a8) {
    if (a8) {
        return 42;
    }
    return false;
}
try { noInline(getX); } catch (e) {}
function foo(a14) {
    var result = false;
    const v18 = a14 < 1000;
    let v19;
    try { v19 = getX(v18); } catch (e) {}
    var x = v19;
    x * 2;
    var y = a?.[a14 % a?.length];
    result = y === x;
    count += 1;
    return result;
}
try { noInline(foo); } catch (e) {}
var loopCount = 10000;
function bar() {
    var result;
    for (let i36 = 0; i36 < (loopCount - 1); i36++) {
        let v43;
        try { v43 = foo(i36); } catch (e) {}
        result = v43;
    }
    let v45;
    try { v45 = foo(0); } catch (e) {}
    result = v45;
    return result;
}
let v46;
try { v46 = bar(); } catch (e) {}
var result = v46;
