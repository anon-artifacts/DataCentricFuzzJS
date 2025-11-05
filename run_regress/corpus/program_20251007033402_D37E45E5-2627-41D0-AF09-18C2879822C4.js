function noElement() {
    for (let i2 = 0; i2 < 10000; i2++) {
        var obj = { length: 0 };
        obj[0];
    }
}
function noElementCheckPrototype() {
    for (let i15 = 0; i15 < 10000; i15++) {
        var obj = { length: 0 };
        obj[0];
        i15 <= 1000 ? undefined : 1;
        if (i15 == 1000) {
            const t12 = Object.prototype;
            t12[0] = 1;
        }
    }
    const t16 = Object.prototype;
    delete t16[0];
}
function elementOnPrototype() {
    const t20 = Object.prototype;
    t20[0] = 3;
    for (let i44 = 0; i44 < 10000; i44++) {
        var obj = { length: 0 };
        obj[0];
    }
    const t26 = Object.prototype;
    delete t26[0];
}
function checkExpando() {
    for (let i60 = 0; i60 < 10000; i60++) {
        var obj = { length: 0 };
        if (i60 >= 1000) {
            obj[0] = 2;
        }
        obj[0];
        i60 < 1000 ? undefined : 2;
    }
}
noElement();
noElementCheckPrototype();
elementOnPrototype();
checkExpando();
