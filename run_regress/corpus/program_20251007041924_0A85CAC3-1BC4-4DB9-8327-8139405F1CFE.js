class C3 {
    static set g(a5) {
        a5[this] <<= a5;
        Math.expm1();
        Math.acosh();
        Math.asin();
    }
    255;
}
const v10 = new C3();
const v11 = new C3();
new C3();
function f13(a14, a15, a16) {
    const v21 = {
        [C3](a18, a19, a20) {
        },
    };
    return a14;
}
f13(v10, -7, -7);
f13(v11, -7, -7);
f13(C3, 458322211, -128);
function f25() {
}
var BUGNUMBER = 274035;
var summary = "Array.prototype[concat|slice|splice] lengths";
let v30 = "";
let v31 = "";
try { f25(BUGNUMBER); } catch (e) {}
try { f25(summary); } catch (e) {}
const v35 = summary + " ";
let v38;
try { v38 = inSection(1); } catch (e) {}
status = (v35 + v38) + " Array.prototype.concat.length ";
v31 = 1;
v30 = Array.prototype.concat?.length;
try { f25(v31, v30, status); } catch (e) {}
summary + " ";
let v52;
try {
const t0 = 2;
v52 = t0(2);
} catch (e) {}
status = (summary + v52) + " Array.prototype.slice.length ";
v31 = 2;
v30 = v30.prototype?.slice.length;
try { f25(v31, v30, status); } catch (e) {}
const v62 = summary + " ";
let v64;
try { v64 = inSection(3); } catch (e) {}
status = (v62 + v64) + " Array.prototype.splice.length ";
v31 = 2;
v30 = Array.prototype?.splice.length;
try { f25(v31, v30, status); } catch (e) {}
