function useObject(a1) {
    if (!Object.isFrozen(a1)) {
        var t = a1.f;
        a1.f = t * 2;
    }
    return a1.f;
}
var o = { f: 1, g: 2 };
useObject(o);
useObject(o);
Object.freeze(o);
useObject(o);
