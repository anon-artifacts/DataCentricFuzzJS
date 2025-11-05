try { gczeal(13); } catch (e) {}
function A() {
}
A.prototype = [];
function B() {
}
let v6;
try { v6 = new A(); } catch (e) {}
B.prototype = v6;
