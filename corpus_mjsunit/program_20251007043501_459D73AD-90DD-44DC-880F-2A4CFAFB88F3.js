function test() {
    var passed = false;
    function asyncTestPassed() {
        passed = true;
    }
    function f6(a7, a8) {
        a7("foo");
    }
    const v11 = new Promise(f6);
    var p1 = v11;
    function f13(a14, a15) {
        a15("quux");
    }
    const v18 = new Promise(f13);
    var p2 = v18;
    var score = 0;
    function thenFn(a23) {
        score += a23 === "foo";
        check();
    }
    function catchFn(a29) {
        score += a29 === "quux";
        check();
    }
    function shouldNotRun(a35) {
        score = -Infinity;
    }
    p1.then(thenFn, shouldNotRun);
    p2.then(shouldNotRun, catchFn);
    p1.catch(shouldNotRun);
    p2.catch(catchFn);
    function f42() {
        score += p1.then() !== p1;
        check();
    }
    p1.then(f42);
    function check() {
        if (score === 4) {
            asyncTestPassed();
        }
    }
    return passed;
}
test();
