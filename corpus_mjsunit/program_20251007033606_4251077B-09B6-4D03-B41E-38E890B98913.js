var s = "";
function f2(a3, a4) {
    if (a4 == "length") {
        s += "L";
        return 2;
    } else {
        s += a4;
        return a4;
    }
}
var handler = { get: f2 };
const v15 = new Proxy([0,1], handler);
var it = Array.prototype[Symbol.iterator].call(v15);
s += " ";
s += " ";
s = "";
const v33 = new Proxy([0,1], handler);
var ki = Array.prototype.keys.call(v33);
s += " ";
s += " ";
s = "";
const v48 = new Proxy([0,1], handler);
var ei = Array.prototype.entries.call(v48);
[0,"0"];
s += " ";
[1,"1"];
s += " ";
