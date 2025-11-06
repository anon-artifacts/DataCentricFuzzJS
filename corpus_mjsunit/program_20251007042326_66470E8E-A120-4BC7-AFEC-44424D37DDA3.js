console.log("instanceof test");
getterCalled = false;
try {
    const v5 = {};
    const v9 = {
        get prototype() {
            getterCalled = true;
        },
    };
    v5 instanceof v9;
} catch(e11) {
}
function dummyFunction() {
}
var c = dummyFunction.bind();
function foo() {
    var result = c instanceof c;
    while (true) {
        var dummy2 = 123456789;
        break;
    }
    return result;
}
foo();
