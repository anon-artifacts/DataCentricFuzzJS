function f0() {
}
var BUGNUMBER = 466747;
var summary = "TM: Do not assert: fp->slots + fp->script->nfixed + " + "js_ReconstructStackDepth(cx, fp->script, fp->regs->pc) == fp->regs->sp";
var actual = "";
var expect = "";
try { test(); } catch (e) {}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    gDelayTestDriverEnd = true;
    function newScriptWithLoop(a19) {
        let v22;
        try { v22 = document.createElement("script"); } catch (e) {}
        var ns = v22;
        const v27 = ("for (var q = 0; q < " + a19) + "; ++q) { }";
        let v28;
        try { v28 = document.createTextNode(v27); } catch (e) {}
        var nt = v28;
        try { ns.appendChild(nt); } catch (e) {}
        return ns;
    }
    function boom() {
        let v34;
        try { v34 = document.createElement("div"); } catch (e) {}
        var div = v34;
        let v37;
        try { v37 = newScriptWithLoop(7); } catch (e) {}
        try { div.appendChild(v37); } catch (e) {}
        let v40;
        try { v40 = newScriptWithLoop(1); } catch (e) {}
        try { div.appendChild(v40); } catch (e) {}
        const v42 = document?.body;
        try { v42.appendChild(div); } catch (e) {}
        try { f0(expect, actual, summary); } catch (e) {}
        gDelayTestDriverEnd = false;
    }
    try { window.addEventListener("load", boom, false); } catch (e) {}
}
