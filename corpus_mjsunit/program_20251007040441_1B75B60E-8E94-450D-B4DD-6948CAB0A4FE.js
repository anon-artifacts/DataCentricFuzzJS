function f() {
    function inner() {
    }
    inner.__proto__ = { b: "b" };
    try { new inner(); } catch (e) {}
    for (const v5 in inner) {
        inner?.[v5];
    }
    inner.prototype = { sox: "red" };
    let v9;
    try { v9 = new inner(); } catch (e) {}
    return v9;
}
try { f(); } catch (e) {}
let v11;
try { v11 = f(); } catch (e) {}
var Boston = v11;
if (Boston?.sox === "red") {
    try { WScript.Echo("pass"); } catch (e) {}
}
