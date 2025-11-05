const v0 = (a1, a2) => {
    two();
    a2[0].getFunction();
    two.name;
    a2[0].getFunctionName();
    a2[0].isAsync();
    two();
    a2[1].getFunction();
    one.name;
    a2[1].getFunctionName();
    a2[1].isAsync();
    return a2;
};
Error.prepareStackTrace = v0;
async function one(a23) {
    return await two(a23);
}
async function two(a28) {
    try {
        a28 = await a28;
        const v30 = new Error();
        throw v30;
    } catch(e31) {
        return e31.stack;
    }
}
