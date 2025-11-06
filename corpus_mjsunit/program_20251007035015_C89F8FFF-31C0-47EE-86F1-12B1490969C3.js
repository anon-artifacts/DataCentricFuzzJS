function test_shr(a1) {
    var errors = 0;
    for (let i5 = 1; i5 < 1024; i5++) {
        var temp = a1 >>> i5;
        if (temp < 0) {
            errors++;
        }
    }
    return errors;
}
test_shr(1);
for (let i20 = 5; i20 >= -5; i20--) {
    test_shr(i20);
}
function f29() {
    function foo(a31, a32, a33) {
        var y;
        const v39 = (a31 = a31 >>> 0) | 0;
        y = v39;
        y = a31;
        a32 ? v39 : a31;
        return a33[y];
    }
    const v46 = new Array(42);
    foo(111, true, v46);
    const v51 = new Array(42);
    foo(111, true, v51);
    const v54 = -111;
    const v57 = new Array(42);
    foo(v54, true, v57);
}
f29();
function f60() {
    function foo(a62, a63, a64) {
        var y;
        const v70 = (a62 = a62 >>> 0) | 0;
        y = v70;
        y = a62;
        a63 ? v70 : a62;
        return a64[y];
    }
    const v77 = new Array(42);
    foo(111, true, v77);
    const v82 = new Array(42);
    foo(111, true, v82);
    const v87 = new Array(42);
    foo(111, true, v87);
}
f60();
