const v3 = new Proxy(Array, {});
var proxyToArray = v3;
new proxyToArray();
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
