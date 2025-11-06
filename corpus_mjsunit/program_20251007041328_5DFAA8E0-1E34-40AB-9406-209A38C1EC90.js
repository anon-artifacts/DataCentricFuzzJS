let lfPreamble = `\nassertEq = function(a,b) {\n  try { print(a); print(b); } catch(exc) {}\n}\n`;
const v2 = {};
try { evaluate(lfPreamble, v2); } catch (e) {}
var a = [1,2,3];
var b = [4,5,6];
function testFold() {
    for (let i17 = 0; i17 < 10; i17++) {
        var x = a?.[i17];
        var z = b?.[i17];
        if (((x / x) | 0) < 3) {
            x !== z;
        }
    }
}
for (let i35 = 0; i35 < 10; i35++) {
    try { testFold(); } catch (e) {}
}
