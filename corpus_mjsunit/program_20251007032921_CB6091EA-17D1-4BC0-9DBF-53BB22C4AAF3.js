function f0() {
}
var UBound = 0;
var BUGNUMBER = 172699;
var summary = "UTF-8 decoder should not accept overlong sequences";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
let v21;
try { v21 = inSection(1); } catch (e) {}
status = v21;
expect = "URIError thrown";
try {
    try { decodeURI("%C0%AF"); } catch (e) {}
    actual = "no error thrown";
} catch(e27) {
    if (e27 instanceof URIError) {
        actual = "URIError thrown";
    } else {
        if (e27 instanceof Error) {
            actual = "wrong error thrown: " + e27?.name;
        } else {
            actual = "non-error thrown: " + e27;
        }
    }
}
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
    for (let i48 = 0; i48 < UBound; i48++) {
        const v53 = expectedvalues?.[i48];
        const v54 = actualvalues?.[i48];
        const v55 = statusitems?.[i48];
        try { f0(v53, v54, v55); } catch (e) {}
    }
}
