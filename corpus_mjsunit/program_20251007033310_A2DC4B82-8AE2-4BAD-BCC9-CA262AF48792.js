let v2;
try { v2 = Boolean(true); } catch (e) {}
var b1 = v2;
function f5() {
}
try { b1.__defineSetter__("something", f5); } catch (e) {}
let v8;
try { v8 = Boolean(true); } catch (e) {}
var b2 = v8;
function f11() {
}
try { b2.__defineGetter__("something else", f11); } catch (e) {}
try { WScript.Echo("Pass"); } catch (e) {}
