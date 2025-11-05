const v1 = new Uint16Array();
function f2(a3, a4) {
    return v1;
}
const v5 = { get: f2 };
const v8 = new Proxy([v5,v5], v5);
const t6 = Array.prototype.filter.bind(v8);
t6(Proxy);
