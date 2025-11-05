const v1 = new Array();
var lfcode = v1;
lfcode.push(`\nfunction TestCase(e) {\n    this.expect = e;\n}\nfunction writeHeaderToLog() {}\nvar SECTION = "15.5.4.7-1";\nvar TITLE = "String.protoype.lastIndexOf";\nwriteHeaderToLog();\nvar j = 0;\nfor (k = 0, i = 0x0021; i < 0x007e; i++, j++, k++)\n    new TestCase("x" - 1);\nLastIndexOf();\nfunction LastIndexOf() {\n    if (isNaN(n)) {}\n}\n`);
lfcode.push(`\noomAfterAllocations(50);\nwriteHeaderToLog(SECTION + " " + TITLE);\nvar expect = "Passed";\ntry {\n    eval("this = true");\n} catch (e) {\n    result = expect;\n    exception = e.toString(0, 0);\n}\nnew TestCase();\n`);
while (lfcode.length > 0) {
    var file = lfcode.shift();
    loadFile(file);
}
function loadFile(a15) {
    try {
        if ((a15.substr(-3) != ".js") && (a15.length != 1)) {
            evaluate(a15);
        }
    } catch(e27) {
    }
}
