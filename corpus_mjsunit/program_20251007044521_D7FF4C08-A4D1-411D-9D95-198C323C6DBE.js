function test() {
    var passed = false;
    function asyncTestPassed() {
        passed = true;
    }
    class C6 extends Promise {
    }
    function f7(a8) {
        setTimeout(a8, 200, "foo");
    }
    const v13 = new Promise(f7);
    function f14(a15) {
        setTimeout(a15, 100, "bar");
    }
    const v20 = new Promise(f14);
    var fulfills = C6.all([v13,v20]);
    function f24(a25, a26) {
        setTimeout(a26, 200, "baz");
    }
    const v31 = new Promise(f24);
    function f32(a33, a34) {
        setTimeout(a34, 100, "qux");
    }
    const v39 = new Promise(f32);
    var rejects = C6.all([v31,v39]);
    var score = +(fulfills instanceof C6);
    function f46(a47) {
        score += (a47 + "") === "foo,bar";
        check();
    }
    fulfills.then(f46);
    function f55(a56) {
        score += a56 === "qux";
        check();
    }
    rejects.catch(f55);
    function check() {
        if (score === 3) {
            asyncTestPassed();
        }
    }
    return passed;
}
test();
