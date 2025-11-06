function test() {
    'use strict';
    const bar = 123;
    {
        const bar = 456;
    }
    return bar === 123;
}
if (!test()) {
    const v11 = new Error("Test failed");
    throw v11;
}
