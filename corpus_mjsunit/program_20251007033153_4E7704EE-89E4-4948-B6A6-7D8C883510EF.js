function f0() {
    return [this?.m,this];
}
const t3 = String?.prototype;
t3.m = f0;
var f = f0;
let v9;
try { v9 = ("s").m(); } catch (e) {}
var a = v9;
try { gczeal(4); } catch (e) {}
const v16 = { noScriptRval: true };
try { evaluate("for (a = 0; a < 13; a++) {}", v16); } catch (e) {}
