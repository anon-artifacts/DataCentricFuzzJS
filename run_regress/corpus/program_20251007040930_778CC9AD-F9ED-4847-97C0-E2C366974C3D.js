var funProto = Function.prototype;
Object.getOwnPropertyDescriptor(funProto, "prototype");
parseInt.prototype;
var oldObj;
for (let i14 = 0, i15 = 9; i14 < i15; oldObj = obj, i14++) {
    try {
        const v23 = new funProto();
        var obj = v23;
    } catch(e25) {
    }
    Object.getOwnPropertyDescriptor(funProto, "prototype");
    Object.getOwnPropertyDescriptor(parseInt, "prototype");
    parseInt.prototype;
}
