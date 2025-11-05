var count = 0;
var target = Object.preventExtensions({ a: 1, b: 2, c: 3 });
const v15 = {
    getOwnPropertyDescriptor(a11, a12) {
        count++;
        return Object.getOwnPropertyDescriptor(a11, a12);
    },
};
const v16 = new Proxy(target, v15);
var p = v16;
Object.isSealed(p);
count = 0;
Object.isFrozen(p);
Object.seal(target);
count = 0;
Object.isSealed(p);
count = 0;
Object.isFrozen(p);
Object.freeze(target);
count = 0;
Object.isFrozen(p);
