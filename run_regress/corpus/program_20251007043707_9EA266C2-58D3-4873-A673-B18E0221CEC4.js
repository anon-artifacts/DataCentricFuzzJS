function f0() {
}
const t2 = Object.prototype;
t2["z"] = f0;
function f4() {
    with ({}) {
        function f6(a7) {
            return a7;
        }
        var z = f6;
    }
}
f4();
