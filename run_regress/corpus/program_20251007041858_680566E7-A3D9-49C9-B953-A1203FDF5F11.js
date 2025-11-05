try {
    var TA = Object.getPrototypeOf(Int8Array);
    var obj = Reflect.construct(TA, [], Int8Array);
    const v9 = new Int8Array(4);
    v9.set(obj);
} catch(e11) {
}
