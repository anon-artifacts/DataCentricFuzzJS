function f0() {
}
var BUGNUMBER = 358594;
var summary = "Do not crash on uneval(this).";
var actual = "";
var expect = "";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
function f() {
}
f.__proto__ = this;
const v17 = { set: f, enumerable: true, configurable: true };
try { Object.defineProperty(this, "m", v17); } catch (e) {}
try { uneval(this); } catch (e) {}
try { f0(expect, actual, summary); } catch (e) {}
