function getter() {
    return 1;
}
function setter() {
}
function getDescriptor(a4, a5) {
    if (a5 != "prop") {
        throw "Unknown property: " + a5;
    }
    return { configurable: true, enumerable: true, get: getter, set: setter };
}
var handler = { getOwnPropertyDescriptor: getDescriptor };
const v17 = new Proxy({}, handler);
var proxy = v17;
Object.prototype.__lookupGetter__.call(proxy, "prop");
getter();
Object.prototype.__lookupSetter__.call(proxy, "prop");
setter();
