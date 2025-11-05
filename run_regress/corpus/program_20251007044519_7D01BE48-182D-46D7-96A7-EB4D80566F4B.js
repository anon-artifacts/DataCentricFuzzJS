const v3 = Object.create(null);
const v5 = new Proxy(v3, {});
var obj = v5;
typeof obj;
obj != null;
