class C1 extends Array {
    constructor(a3) {
        throw "error";
    }
}
let o = Reflect.construct(RegExp, [], C1);
o.lastIndex = 4660;
gc();
