var symbols = [Symbol(),Symbol("one"),Symbol.for("two"),Symbol.iterator,Object(Symbol())];
for (const v12 of symbols) {
    var obj = {};
    v12 in obj;
    obj.hasOwnProperty(v12);
    obj[v12];
    typeof obj[v12];
    Object.getOwnPropertyDescriptor(obj, v12);
    obj[v12] = "ok";
    v12 in obj;
    obj.hasOwnProperty(v12);
    obj[v12];
    Object.getOwnPropertyDescriptor(obj, v12);
    const v38 = { value: "ok", writable: true, enumerable: true, configurable: true };
    obj[v12] = 12;
    obj[v12];
    let v42 = obj[v12];
    v42++;
    obj[v12];
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
