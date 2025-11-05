function f0() {
}
var BUGNUMBER = 338121;
var summary = "Issues with JS_ARENA_ALLOCATE_CAST";
var actual = "No Crash";
var expect = "No Crash";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
try { expectExitCode(0); } catch (e) {}
try { expectExitCode(5); } catch (e) {}
var fe = "vv";
for (i = 0; i < 24; i++) {
    fe += fe;
}
let v27;
try { v27 = new Function(fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, fe, "done"); } catch (e) {}
var fu = v27;
var fuout = "fu=" + fu;
try { f0("Done"); } catch (e) {}
try { f0(expect, actual, summary); } catch (e) {}
