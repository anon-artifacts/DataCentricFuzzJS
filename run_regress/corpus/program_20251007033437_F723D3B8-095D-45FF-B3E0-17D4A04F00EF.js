function test() {
    'use strict';
    let baz = 1;
    for (let i4 = 0; false;) {
    }
    return baz === 1;
}
if (!test()) {
    const v15 = new Error("Test failed");
    throw v15;
}
