function f0() {
}
var BUGNUMBER = 470223;
var summary = "TM: Do not crash @ js_NewObjectWithGivenProto";
var actual = "";
var expect = "";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function F(a15) {
        for (R = [], s = 0;
            (() => {
                const v23 = a15.indexOf("m", s++);
                m = v23;
                return v23 >= 0;
            })();
            ) {
            R.push([m]);
        }
        for (i = R.length; i--;) {
            let r = R[i];
            if (r[0]) {
            }
        }
    }
    F("m");
    F("mm");
    f0(expect, actual, summary);
}
