function f0() {
}
var UBound = 0;
var BUGNUMBER = 220367;
var summary = "Regexp conformance test";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var re = /(a)|(b)/;
try { re.test("a"); } catch (e) {}
let v25;
try { v25 = inSection(1); } catch (e) {}
status = v25;
actual = RegExp?.$1;
expect = "a";
try { addThis(); } catch (e) {}
let v32;
try { v32 = inSection(2); } catch (e) {}
status = v32;
actual = RegExp?.$2;
expect = "";
try { addThis(); } catch (e) {}
try { re.test("b"); } catch (e) {}
let v39;
try { v39 = inSection(3); } catch (e) {}
status = v39;
actual = RegExp?.$1;
expect = "";
try { addThis(); } catch (e) {}
let v44;
try { v44 = inSection(4); } catch (e) {}
status = v44;
actual = RegExp?.$2;
expect = "b";
try { addThis(); } catch (e) {}
try { test(); } catch (e) {}
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual;
    expectedvalues[UBound] = expect;
    UBound++;
}
function test() {
    try { f0(BUGNUMBER); } catch (e) {}
    try { f0(summary); } catch (e) {}
    for (let i56 = 0; i56 < UBound; i56++) {
        const v61 = expectedvalues?.[i56];
        const v62 = actualvalues?.[i56];
        const v63 = statusitems?.[i56];
        try { f0(v61, v62, v63); } catch (e) {}
    }
}
