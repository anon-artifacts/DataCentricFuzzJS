function TestGeneratorOSRSimple() {
    function* gen1() {
        for (let i3 = 0; i3 < 3; ++i3) {
        }
        return 23;
    }
    var g = gen1();
    const v14 = { value: 23, done: true };
    g.next();
}
TestGeneratorOSRSimple();
function TestGeneratorOSRYieldAfterArming() {
    function* gen2() {
        for (let i20 = 0; i20 < 3; ++i20) {
            yield i20;
        }
        return 23;
    }
    var g = gen2();
    const v32 = { value: 0, done: false };
    g.next();
    const v36 = { value: 1, done: false };
    g.next();
    const v40 = { value: 2, done: false };
    g.next();
    const v44 = { value: 23, done: true };
    g.next();
}
TestGeneratorOSRYieldAfterArming();
function TestGeneratorOSRYieldBeforeArming() {
    function* gen3() {
        for (let i50 = 0; i50 < 3; ++i50) {
            yield i50;
        }
        return 23;
    }
    var g = gen3();
    const v62 = { value: 0, done: false };
    g.next();
    const v66 = { value: 1, done: false };
    g.next();
    const v70 = { value: 2, done: false };
    g.next();
    const v74 = { value: 23, done: true };
    g.next();
}
TestGeneratorOSRYieldBeforeArming();
function TestGeneratorOSRNested() {
    function* gen4() {
        for (let i80 = 0; i80 < 3; ++i80) {
            for (let i87 = 0; i87 < 3; ++i87) {
                for (let i94 = 0; i94 < 10; ++i94) {
                }
            }
            yield i80;
        }
        return 23;
    }
    var g = gen4();
    const v106 = { value: 0, done: false };
    g.next();
    const v110 = { value: 1, done: false };
    g.next();
    const v114 = { value: 2, done: false };
    g.next();
    const v118 = { value: 23, done: true };
    g.next();
}
TestGeneratorOSRNested();
