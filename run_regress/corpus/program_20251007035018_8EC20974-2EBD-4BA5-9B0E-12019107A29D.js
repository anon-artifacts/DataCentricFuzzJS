function testNonExtensible() {
    var a = [1,2,3,,,];
    Object.preventExtensions(a);
    for (let i10 = 0; i10 < 10; i10++) {
        a.length = 10;
    }
    a.length;
    for (let i20 = 0; i20 < 10; i20++) {
        a.length = 0;
    }
    a.length;
    a.toString();
}
testNonExtensible();
function testSealed() {
    var a = [1,2,3,,,];
    Object.seal(a);
    for (let i42 = 0; i42 < 10; i42++) {
        a.length = 10;
    }
    a.length;
    for (let i52 = 0; i52 < 10; i52++) {
        const v58 = () => {
            a.length = 0;
            return 0;
        };
        v58();
    }
    a.length;
    a.toString();
}
testSealed();
function testFrozen() {
    var a = [1,2,3,,,];
    Object.freeze(a);
    for (let i77 = 0; i77 < 10; i77++) {
        const v83 = () => {
            a.length = 10;
            return 10;
        };
        v83();
    }
    for (let i88 = 0; i88 < 10; i88++) {
        const v94 = () => {
            a.length = 0;
            return 0;
        };
        v94();
    }
    a.length;
    a.toString();
}
testFrozen();
