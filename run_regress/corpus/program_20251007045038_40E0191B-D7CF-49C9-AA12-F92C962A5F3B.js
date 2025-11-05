var V = [1,2,3];
var X = Object.create(V);
const v10 = new Proxy(X, {});
var P = v10;
P.length;
