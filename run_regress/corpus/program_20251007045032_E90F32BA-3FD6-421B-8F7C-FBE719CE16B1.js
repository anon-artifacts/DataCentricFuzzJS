function f0() {
}
var BUGNUMBER = 367121;
var summary = "self modifying script detection";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    if (typeof Script == "undefined") {
        f0(expect = "Test skipped - Test requires Script object..", actual = "Test skipped - Test requires Script object..", summary);
    } else {
        gDelayTestDriverEnd = true;
    }
}
function handleLoad() {
    const v25 = document.createElement("iframe");
    var iframe = document.body.appendChild(v25);
    var d = iframe.contentDocument;
    function f32(a33) {
        s.compile("");
        const v41 = Array(101).join("aaaaa");
        const v44 = Array(11).join(v41);
        Array(11).join(v44);
    }
    d.addEventListener("test", f32, true);
    var e = d.createEvent("Events");
    e.initEvent("test", true, true);
    const v59 = new Script("d.dispatchEvent(e);");
    var s = v59;
    s.exec();
    gDelayTestDriverEnd = false;
    f0(expect, actual, summary);
}
