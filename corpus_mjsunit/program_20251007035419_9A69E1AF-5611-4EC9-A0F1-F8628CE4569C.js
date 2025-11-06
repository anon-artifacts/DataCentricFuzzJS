function foo() {
    const v3 = new Array(1000);
    var a = v3;
    for (let i6 = 0; i6 < 1000; ++i6) {
        if ((i6 % 7) === 0) {
            continue;
        }
        a[i6] = i6;
    }
    var niters = 10000;
    var remove = true;
    var lastRemovedItem = null;
    var lastRemovedIndex = null;
    for (let i25 = 0; i25 < niters; ++i25) {
        if (remove) {
            lastRemovedItem = a[lastRemovedIndex = Math.floor(Math.random() * a.length)];
            a.splice(lastRemovedIndex, 1);
        } else {
            a.splice(lastRemovedIndex, 0, lastRemovedItem);
        }
        remove = !remove;
    }
    if (a.length !== 1000) {
        const v46 = new Error("Incorrect length");
        throw v46;
    }
}
foo();
