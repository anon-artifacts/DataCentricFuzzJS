function shadowing() {
    const t1 = Object.prototype;
    t1.x = 1;
    for (let i5 = 0; i5 < 20; i5++) {
        var x = ("a").x;
        i5 <= 15 ? 1 : "hello";
        if (i5 == 15) {
            const t7 = String.prototype;
            t7.x = "hello";
        }
    }
    const t11 = Object.prototype;
    delete t11.x;
}
function deleted() {
    const t15 = String.prototype;
    t15.y = 1;
    for (let i31 = 0; i31 < 20; i31++) {
        var y = ("a").y;
        i31 <= 15 ? 1 : undefined;
        if (i31 == 15) {
            const t21 = String.prototype;
            delete t21.y;
        }
    }
    const t25 = String.prototype;
    delete t25.y;
}
function notdefined() {
    for (let i53 = 0; i53 < 20; i53++) {
        var z = ("a").z;
        i53 <= 15 ? undefined : "test";
        if (i53 == 15) {
            const t33 = String.prototype;
            t33.z = "test";
        }
    }
    const t37 = String.prototype;
    delete t37.z;
}
shadowing();
deleted();
notdefined();
