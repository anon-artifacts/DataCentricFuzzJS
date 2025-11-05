let v1;
try { v1 = Array(); } catch (e) {}
var ary = v1;
function f3(a4) {
    var i = 1;
    do {
        if (i++ >= 2) {
            break;
        }
        try { ary.push(a4); } catch (e) {}
        const v12 = -2147483648;
        let v14;
        try { v14 = Math.abs(v12); } catch (e) {}
        a4 = v14;
    } while (true)
}
var func2 = f3;
try { func2(3); } catch (e) {}
try { func2(132); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
