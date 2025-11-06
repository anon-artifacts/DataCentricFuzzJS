const v0 = (a1, a2) => {
    a2[0].getFunction();
    two.name;
    a2[0].getFunctionName();
    a2[1].getFunction();
    one.name;
    a2[1].getFunctionName();
    return a2;
};
Error.prepareStackTrace = v0;
async function one(a19) {
    return await two(a19);
}
async function two(a24) {
    'use strict';
    try {
        a24 = await a24;
        const v26 = new Error();
        throw v26;
    } catch(e27) {
        return e27.stack;
    }
}
