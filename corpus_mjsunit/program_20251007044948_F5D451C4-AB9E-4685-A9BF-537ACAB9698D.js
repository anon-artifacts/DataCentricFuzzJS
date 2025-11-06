function shapeyConstructor() {
    y = iczqcn;
}
function test1() {
    for (const v7 in [1,2]) {
        try {
            try { new shapeyConstructor(v7); } catch (e) {}
        } catch(e9) {
        }
    }
}
function throwFunc() {
    try {
    } catch(e11) {
    }
    throw "ex";
}
function caller() {
    try { throwFunc(w); } catch (e) {}
}
function test2() {
    for (const v20 in [1,2]) {
        try {
            try { new caller(); } catch (e) {}
        } catch(e22) {
        }
    }
}
try { test1(); } catch (e) {}
try { test2(); } catch (e) {}
try { WScript.Echo("PASS"); } catch (e) {}
