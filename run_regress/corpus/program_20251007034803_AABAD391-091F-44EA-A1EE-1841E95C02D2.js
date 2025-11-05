try { console.log("Tests that if you alias the arguments in a very small function, arguments simplification still works even if the variable isn't must-aliased."); } catch (e) {}
function foo() {
    var args = arguments;
    return ((args = [1,2,3])?.[0] + args?.[1]) + args?.[2];
}
silentTestPass = true;
try { noInline(foo); } catch (e) {}
var result = "";
for (let i22 = 0; i22 < 300; i22 = i22 + 1) {
    var a;
    if (i22 < 200) {
        a = i22;
    } else {
        a = "hello";
    }
    var b = i22 + 1;
    var c = i22 + 3;
    try { foo(a, b, c); } catch (e) {}
}
