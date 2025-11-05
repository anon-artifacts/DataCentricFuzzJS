const v2 = new Int32Array(10);
var x = v2;
function f() {
    for (let i7 = -100; i7 < 100; i7++) {
        x[i7] = i7 + 1;
        if ((i7 >= 0) && (i7 < 10)) {
            x[i7];
            i7 + 1;
        } else {
            x[i7];
        }
    }
}
f();
var bigint = "" + Math.pow(2, 53);
x[bigint] = "twelve";
x[bigint];
x["9999999999999999999999"] = "twelve";
x["9999999999999999999999"];
x[1e+22] = "twelve";
x[1e+22];
x["Infinity"] = "twelve";
x["Infinity"];
x["-Infinity"] = "twelve";
x["-Infinity"];
