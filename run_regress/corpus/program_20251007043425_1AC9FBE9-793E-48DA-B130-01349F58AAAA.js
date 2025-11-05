var f = 2147483647;
function f2(a3) {
    if (f < a3) {
        f++;
    }
}
var func1 = f2;
try { func1(3); } catch (e) {}
try { func1(4); } catch (e) {}
try { func1(4702209150613300224); } catch (e) {}
if (f == 2147483648) {
    try { WScript.Echo("Passed"); } catch (e) {}
} else {
    try { WScript.Echo("Fail"); } catch (e) {}
}
