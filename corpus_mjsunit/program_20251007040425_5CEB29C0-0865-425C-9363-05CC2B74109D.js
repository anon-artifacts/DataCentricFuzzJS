var arr = [];
var obj0 = {};
function f4() {
}
var func0 = f4;
obj0.method0 = func0;
const v8 = new Float32Array(256);
var f32 = v8;
protoObj0 = Object(obj0);
for (const v13 in f32) {
    function v9() {
        function f15() {
            function bar() {
                protoObj0.method0.apply(protoObj0, arguments);
                const v25 = this.method0.apply(this, arguments);
                this.method0.apply(v25, arguments);
            }
            return bar;
        }
        var v13 = { v14: f15 };
        protoObj0.v16 = v13.v14();
        function f34(a35) {
            this.v20 = a35;
        }
        const v37 = { method0: f34 };
        const t25 = protoObj0.v16;
        t25.prototype = v37;
        const t27 = protoObj0.v16;
        new t27(f32[11]);
    }
    v9();
}
print("PASSED");
