function f0() {
}
var summary = "Peterson's algorithm for mutual exclusion";
f0(summary);
var N = 500;
var f = [false,false];
var turn = 0;
var counter = 0;
function worker(a15) {
    let him = 1 - a15;
    for (let i20 = 0; i20 < N; i20++) {
        f[a15] = true;
        turn = him;
        while (f[him] && (turn == him)) {
        }
        let x = counter;
        sleep(0.003);
        counter = x + 1;
        f[a15] = false;
    }
    return "ok";
}
var expect;
var actual;
if ((typeof scatter == "undefined") || (typeof sleep == "undefined")) {
    f0("Test skipped. scatter or sleep not defined.");
    actual = "Test skipped.";
    expect = "Test skipped.";
} else {
    function f53() {
        return worker(0);
    }
    function f56() {
        return worker(1);
    }
    var results = scatter([f53,f56]);
    expect = "Thread status: [ok,ok], counter: " + (2 * N);
    actual = (("Thread status: [" + results) + "], counter: ") + counter;
}
f0(expect, actual, summary);
