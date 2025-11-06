function f0() {
}
var BUGNUMBER = 328556;
var summary = "Do not Assert: growth == (size_t)-1 || (nchars + 1) * sizeof(char16_t) == growth, in jsarray.c";
var actual = "No Crash";
var expect = "No Crash";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
var D = [];
D.foo = D;
try { uneval(D); } catch (e) {}
try { f0(expect, actual, summary); } catch (e) {}
