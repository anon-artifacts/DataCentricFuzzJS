const v1 = String.prototype;
const t1 = Number.prototype;
t1.__proto__ = v1;
Uint8Array.from(1);
