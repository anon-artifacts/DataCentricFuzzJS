var script = "recursionCount, ";
for (let i3 = 0; i3 < 5000; ++i3) {
    script += "dummy, ";
}
script += "dummy";
let v13;
try { v13 = new Function(script, "return recursionCount ? g(recursionCount - 1) : 0;"); } catch (e) {}
var g = v13;
try { noInline(g); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    try { g(1); } catch (e) {}
}
try {
    try { g(1000000); } catch (e) {}
} catch(e28) {
    if (!(e28 instanceof RangeError)) {
        throw "bad value for e";
    }
}
