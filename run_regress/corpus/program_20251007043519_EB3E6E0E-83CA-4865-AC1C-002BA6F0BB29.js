console.log("This test makes sure stack unwinding works correctly in combination with dynamically added scopes");
function gc() {
    if (this.GCController) {
        GCController.collect();
    } else {
        for (let i9 = 0; i9 < 10000; ++i9) {
            const v15 = {};
        }
    }
}
var result;
function runTest() {
    var test = "outer scope";
    with ({ test: "inner scope" }) {
        function f23() {
            try {
                throw "";
            } finally {
                (result = test) === "inner scope";
                return;
            }
        }
        f23();
    }
}
runTest();
try {
    function f29() {
        try {
            throw "";
        } catch(e31) {
            function f32() {
            }
            throw f32;
        } finally {
        }
    }
    f29();
} catch(e34) {
}
a = {};
a *= (a * a) * a;
gc();
