var log = [];
function LoggingProxy(a3) {
    function f4(a5, a6) {
        log.push("define", a6);
        return true;
    }
    function f10(a11, a12) {
        log.push("has", a12);
        return a12 in a11;
    }
    function f16(a17, a18) {
        log.push("get", a18);
        return a17[a18];
    }
    function f22(a23, a24, a25) {
        log.push("set", a24);
        a23[a24] = a25;
        return true;
    }
    var h = { defineProperty: f4, has: f10, get: f16, set: f22 };
    const v34 = new Proxy(a3 || [], h);
    return v34;
}
LoggingProxy.from = Array.from;
LoggingProxy.from([3,4,5]);
["define","0","define","1","define","2","set","length"];
log = [];
const v56 = new LoggingProxy([3,4,5]);
Array.from(v56);
[3,4,5];
["get",Symbol.iterator,"get","length","get","0","get","length","get","1","get","length","get","2","get","length"];
log = [];
var arr = [5,6,7];
arr[Symbol.iterator] = undefined;
const v88 = new LoggingProxy(arr);
Array.from(v88);
[5,6,7];
["get",Symbol.iterator,"get","length","get","0","get","1","get","2"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
