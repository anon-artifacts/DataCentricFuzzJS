try { console.log("Check that short-circuiting Branch(LogicalNot(@a)) and then failing speculation does not result in the branch being taken the wrong way."); } catch (e) {}
function foo(a4) {
    if (a4?.f) {
        return 1;
    }
    return 0;
}
function bar(a9) {
    var b = !a9?.f;
    if (b) {
        return 1;
    }
    return 0;
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
try { noInline(bar); } catch (e) {}
var True = true;
var False = false;
for (let i25 = 0; i25 < 200; i25++) {
    var x;
    if (i25 == 100) {
        True = "string";
        False = void 0;
    }
    const v38 = { f: True };
    try { foo(v38); } catch (e) {}
    const v40 = { f: False };
    try { foo(v40); } catch (e) {}
    const v42 = { f: True };
    try { bar(v42); } catch (e) {}
    const v44 = { f: False };
    try { bar(v44); } catch (e) {}
}
