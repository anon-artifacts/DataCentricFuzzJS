const v1 = new Array();
var lfcode = v1;
lfcode.push("const baz = 'bar';");
lfcode.push("2");
lfcode.push("{ function foo() {} }");
lfcode.push("evaluate('var INVALIDATE_MODES = INVALIDATE_MODE_STRINGS.map(s => ({mode: s}));function range(n, m) {}function seq_scan(array, f) {}function assertStructuralEq(e1, e2) {}for (var i = 0, l = a.length; i < l; i++) {}');");
lfcode.push("for (var x of new Set(Object.getOwnPropertyNames(this))) {}");
var lfRunTypeId = -1;
while (true) {
    var file = lfcode.shift();
    if (file == undefined) {
        break;
    }
    loadFile(file);
}
function loadFile(a24) {
    try {
        if (a24.substr(-3) == ".js") {
        }
        if (!isNaN(a24)) {
            lfRunTypeId = parseInt(a24);
        } else {
            switch (lfRunTypeId) {
                case 2:
                    const v37 = new Function(a24);
                    v37();
                    break;
                default:
                    evaluate(a24);
                    break;
            }
        }
    } catch(e41) {
    }
}
