function f0() {
}
var BUGNUMBER = 226078;
var summary = "Do not Crash @ js_Interpret 3127f864";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
function SetLangHead(a12) {
    with (p) {
        for (const v15 in x) {
            const v17 = "TxtH" + v15;
            let v19;
            try { v19 = getElementById(v17); } catch (e) {}
            if (v19 != undefined) {
                try { f0("huh"); } catch (e) {}
            }
        }
    }
}
x = [0,1,2,3];
function f30(a31) {
    let v34;
    try { v34 = uneval(this); } catch (e) {}
    try { f0(v34, a31); } catch (e) {}
    return undefined;
}
p = { getElementById: f30 };
SetLangHead(1);
f0(expect, actual, summary);
