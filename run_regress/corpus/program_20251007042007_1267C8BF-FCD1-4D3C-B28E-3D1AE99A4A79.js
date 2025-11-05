var m = { 1: "peek" };
var a = [0,,2,3];
a.__proto__ = m;
var log = [];
const v15 = Array.prototype[Symbol.iterator];
const t5 = Object.prototype;
t5[Symbol.iterator] = v15;
for (const v19 of a) {
    log.push(v19);
}
log[1];
log.join();
