function f0() {
}
const t2 = Array.prototype;
t2.push = f0;
const v3 = Array.prototype;
Object.defineProperty(v3, "0", { get: f0, set: f0 });
("-").split(/-/);
("I-must-not-use-push!").split(/-/);
("Oh-no!").split(/(-)/);
("a").split(/(a)|(b)/);
