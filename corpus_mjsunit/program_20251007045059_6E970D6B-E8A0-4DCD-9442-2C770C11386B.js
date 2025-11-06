function throwIfNoSuchProperty(a1) {
    const v12 = {
        get(a4, a5) {
            if (a5 in a4) {
                return a4[a5];
            }
            const v11 = new Error("no such handler method: " + a5);
            throw v11;
        },
    };
    const v13 = new Proxy(a1, v12);
    return v13;
}
var hits = 0;
var savedDesc;
var touchyHandler = throwIfNoSuchProperty({ set: undefined });
var target = {};
const v25 = new Proxy(target, touchyHandler);
var proto = v25;
var receiver = Object.create(proto);
receiver.x = 2;
receiver.x;
var desc = Object.getOwnPropertyDescriptor(receiver, "x");
desc.enumerable;
desc.configurable;
desc.writable;
desc.value;
