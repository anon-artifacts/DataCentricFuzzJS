function testForEachMapCheck() {
    function f(a2, a3, a4) {
        Object.freeze(a4);
    }
    function g() {
        ([1,2,3]).forEach(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testForEachMapCheck();
function testFindMapCheck() {
    function f(a21, a22, a23) {
        Object.freeze(a23);
        return false;
    }
    function g() {
        ([1,2,3]).find(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testFindMapCheck();
function testMapMapCheck() {
    function f(a41, a42, a43) {
        Object.freeze(a43);
        return false;
    }
    function g() {
        ([1,2,3]).map(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testMapMapCheck();
function testFilterMapCheck() {
    function f(a61, a62, a63) {
        Object.freeze(a63);
        return true;
    }
    function g() {
        ([1,2,3]).filter(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testFilterMapCheck();
function testForEachCheckBounds() {
    function f(a81, a82, a83) {
        a83.length = 2;
    }
    function g() {
        ([1,2,3]).forEach(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testForEachCheckBounds();
function testFindCheckBounds() {
    function f(a99, a100, a101) {
        a101.length = 2;
        return false;
    }
    function g() {
        ([1,2,3]).find(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testFindCheckBounds();
function testMapCheckBounds() {
    function f(a118, a119, a120) {
        a120.length = 2;
        return false;
    }
    function g() {
        ([1,2,3]).map(f);
    }
    g();
    g();
    g();
    g();
    g();
}
testMapCheckBounds();
function testFilterCheckBounds() {
    function f(a137, a138, a139) {
        a139.length = 2;
        return true;
    }
    function g() {
        ([1,2,3]).filter(f);
    }
    g();
    g();
    g();
    g();
    g();
    g();
    g();
}
testFilterCheckBounds();
