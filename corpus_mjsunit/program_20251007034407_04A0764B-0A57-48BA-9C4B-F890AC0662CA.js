function f0(a1, a2) {
    return a1 + a2;
}
var f1 = f0;
try { f1.toSource(); } catch (e) {}
try { f1.toString(); } catch (e) {}
try { decompileFunction(f1); } catch (e) {}
try { f1.toString(); } catch (e) {}
function f12(a13, a14) {
    return a13 + a14;
}
var f2 = f12;
try { f2.toSource(); } catch (e) {}
try { f2.toString(); } catch (e) {}
try { decompileFunction(f2); } catch (e) {}
try { f2.toString(); } catch (e) {}
function f23(a24, a25) {
    return a24 + a25;
}
var f3 = f23;
try { f3.toSource(); } catch (e) {}
try { f3.toString(); } catch (e) {}
try { decompileFunction(f3); } catch (e) {}
try { f3.toString(); } catch (e) {}
