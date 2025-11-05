new Uint32Array(9);
new Float32Array(1000);
new Int32Array(0);
new Uint8ClampedArray(1);
new Int16Array(1024);
new Uint16Array(12);
const v18 = [];
var gFutureCalls = v18;
function add_future_call(a21, a22) {
    if (!(a21 in gFutureCalls)) {
        gFutureCalls[a21] = [];
    }
}
function check_reset_test(a27) {
}
check_reset_test(0);
for (let i37 = (() => {
        const v32 = Symbol.toPrimitive;
        const v36 = {
            [v32]() {
                for (let v34 = 0; v34 < 100; v34++) {
                    add_future_call(this, 1);
                }
                return 1024;
            },
        };
        return 1;
    })();
    (() => {
        v18[1] ??= i37;
        let v39 = new WebAssembly.Memory({ initial: 6, address: 'i32' });
        add_future_call && i37;
        add_future_call(i37, 8);
        %PrepareFunctionForOptimization(add_future_call);
        %OptimizeMaglevOnNextCall(add_future_call);
        add_future_call(i37, 8);
        return i37 <= 8;
    })();
    ++i37) {
    function f47(a48) {
        function f49() {
            check_reset_test(a48);
        }
        let v51 = 0;
        while (v51 < 6) {
            try {
                f49();
            } catch(e55) {
            }
            v51++;
        }
        add_future_call(a48, f49);
    }
    f47(i37);
}
