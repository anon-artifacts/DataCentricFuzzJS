function foo() {
    var x = 4;
    var s;
    var i;
    for ((() => {
            i = 0;
        })();
        i < 2001;
        i++) {
        if (i == 2000) {
            x = -4;
        }
        s = 1 / (x % 4);
    }
    return s;
}
var x = (1 / (-4 % 4)).toString();
var y = foo().toString();
if (x != y) {
    throw ((("Error: bad result: " + y) + " (expected ") + x) + ")";
}
new Array(1000);
[1073741823,-1466653832,-5,255,-128,1000,128,-4,10];
[13091,1073741824,10,489251825];
[3];
if (this.Worker) {
    __v_3 = "";
    const v58 = new Worker("", { type: "string" });
    var __v_6 = v58;
    __v_6.postMessage(__v_3);
}
