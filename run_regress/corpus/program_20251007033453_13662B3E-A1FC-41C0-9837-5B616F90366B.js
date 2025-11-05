function test() {
    'use strict';
    let scopes = [];
    for (let i4 = 0; i4 < 2; i4++) {
        function f10() {
            return i4;
        }
        scopes.push(f10);
    }
    let passed = (scopes[0]() === 0) && (scopes[1]() === 1);
    scopes = [];
    for (const v26 in { a: 1, b: 1 }) {
        function f27() {
            return v26;
        }
        scopes.push(f27);
    }
    return passed &= (scopes[0]() === "a") && (scopes[1]() === "b");
}
if (!test()) {
    const v42 = new Error("Test failed");
    throw v42;
}
