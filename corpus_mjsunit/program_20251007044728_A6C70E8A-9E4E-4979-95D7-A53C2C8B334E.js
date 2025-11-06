var x = [10];
var visited = [];
const v10 = {
    preventExtensions() {
        visited.push("proxy_preventExtensions");
        return false;
    },
};
const v11 = new Proxy(x, v10);
var proxy = v11;
var exception;
try {
    visited.push("before_seal");
    Object.seal(proxy);
    visited.push("after_seal");
} catch(e21) {
    visited.push("catch");
    exception = e21;
}
var exceptionStr = "" + exception;
if (!exceptionStr.startsWith("TypeError:")) {
    throw "Did not throw expected TypeError";
}
if (visited != "before_seal,proxy_preventExtensions,catch") {
    throw "ERROR: visited = " + visited;
}
