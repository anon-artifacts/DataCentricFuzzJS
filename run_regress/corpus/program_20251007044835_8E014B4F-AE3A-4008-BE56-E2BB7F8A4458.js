const v1 = {};
const v3 = new Proxy(v1, {});
var proxy = v3;
Object.assign(proxy, { b: "boom", 48: "ah", o: "ouch" });
