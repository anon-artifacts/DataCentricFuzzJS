function f0() {
}
var BUGNUMBER = 313153;
var summary = "generic native method dispatcher extra actual arguments";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
expect = "1,2,3";
function f15() {
    const v16 = [];
    const v19 = Array.concat;
    let v20;
    try { v20 = v19.apply(v16, arguments); } catch (e) {}
    return v20;
}
const v21 = f15(1, 2, 3);
let v22;
try { v22 = v21.toString(); } catch (e) {}
f0(expect, actual = v22, summary);
