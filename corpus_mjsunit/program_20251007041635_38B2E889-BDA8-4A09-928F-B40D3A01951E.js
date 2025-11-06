function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        a1();
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
function f10() {
}
var bf = f10.bind();
const v18 = {
    get() {
        throw Error("OK");
    },
};
Object.defineProperty(bf, "prototype", v18);
function f21(a22) {
    const v23 = () => {
        Reflect.construct(a22, [], bf);
    };
    shouldThrow(v23, `Error: OK`);
}
([Array,Date,Boolean,Function,Number,String,RegExp,Error,Uint8Array,ArrayBuffer,Promise,Map,WeakMap,Set,WeakSet]).forEach(f21);
const v47 = {};
Reflect.construct(Proxy, [v47,{}], bf);
