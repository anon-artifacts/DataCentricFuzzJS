var asyncAssertsExpected = 0;
function assertAsyncRan() {
    ++asyncAssertsExpected;
}
function assertLater(a5, a6) {
    a5();
    ++asyncAssertsExpected;
    var iterations = 0;
    function runAssertion() {
        if (a5()) {
            print(a6, "succeeded");
            --asyncAssertsExpected;
        } else {
            if (iterations++ < 10) {
            } else {
                print(a6 + " FAILED!");
            }
        }
    }
}
function assertAsyncDone(a25) {
    var iteration = a25 || 0;
    if (asyncAssertsExpected === 0) {
    } else {
        if (iteration > 10) {
        } else {
        }
    }
}
var y;
var x = Promise.resolve();
const v38 = () => {
    y = true;
};
x.then = v38;
const v40 = () => {
    return x;
};
Promise.resolve().then(v40);
const v43 = () => {
    return y === true;
};
v43();
