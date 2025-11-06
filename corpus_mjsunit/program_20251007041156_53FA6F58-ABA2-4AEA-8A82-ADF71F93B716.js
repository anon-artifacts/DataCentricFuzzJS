function f0() {
}
var BUGNUMBER = 496922;
var summary = "Incorrect handling of extra arguments";
var actual = "";
var expect = "0,0,1,1,2,2,3,3";
f0(BUGNUMBER);
f0(summary);
var a = [];
{
    function f13() {
        for (let i15 = 0; i15 < 4; ++i15) {
            function f21() {
                for (let i23 = 0; i23 < 2; ++i23) {
                    a.push(i15);
                }
            }
            f21();
        }
    }
    let f = f13;
    function f32() {
    }
    f32();
    f(99);
}
f0(expect, actual = "" + a, summary);
