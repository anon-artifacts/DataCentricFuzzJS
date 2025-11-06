let v1;
try { v1 = new Map(); } catch (e) {}
let v2;
try { v2 = v1.toString(); } catch (e) {}
var x = v2;
for (let i5 = 0; i5 < 10; i5++) {
    let v12;
    try { v12 = new Set(); } catch (e) {}
    var tmp = v12;
    let v14;
    try { v14 = tmp.toString(); } catch (e) {}
    tmp = v14;
}
try { console.log(x); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
