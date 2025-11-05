function f0() {
}
var gTestfile = "reentrant-RegExp-creation-and-gc-during-new-RegExp-pattern-ToString.js";
var BUGNUMBER = 1253099;
var summary = "Don't assert when, in |new RegExp(pat)|, stringifying |pat| creates " + "another RegExp and then performs a GC";
const v11 = (BUGNUMBER + ": ") + summary;
try { f0(v11); } catch (e) {}
const v13 = `\nvar createsRegExpAndCallsGCWhenStringified =\n  {\n    toString: function() {\n      new RegExp("a");\n      gc();\n      return "q";\n    }\n  };\n\nassertEq(new RegExp(createsRegExpAndCallsGCWhenStringified).source, "q");\n`;
let v15;
try { v15 = newGlobal(); } catch (e) {}
try { v15.evaluate(v13); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(true, true); } catch (e) {}
}
try { f0("Tests complete"); } catch (e) {}
