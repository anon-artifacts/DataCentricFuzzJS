var C = {};
const v4 = new Proxy(C, {});
var B = v4;
var A = Object.create(B);
B.x = 1;
C.x;
