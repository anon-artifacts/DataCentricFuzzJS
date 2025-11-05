[-1498218415] != 4;
function CatchAndWriteExceptions(a4) {
    a4();
    return a4;
}
function f6() {
    const v8 = Symbol.toPrimitive;
    const v10 = {
        [v8]() {
        },
    };
    return 4;
}
CatchAndWriteExceptions(f6);
