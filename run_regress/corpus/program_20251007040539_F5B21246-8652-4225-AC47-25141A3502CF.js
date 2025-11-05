function f0() {
    return arguments;
}
let v2;
try { v2 = f0(); } catch (e) {}
var argObj = v2;
try { gczeal(4); } catch (e) {}
delete argObj?.callee;
