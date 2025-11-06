function f0() {
}
var BUGNUMBER = 818617;
var summary = "ECMAScript 2017 Draft ECMA-262 Section 20.1.3.2: Number.prototype.toExponential";
f0((BUGNUMBER + ": ") + summary);
Number.prototype.toExponential.call(NaN, 555);
Number.prototype.toExponential.call(NaN, 5);
Number.prototype.toExponential.call(Infinity, 555);
Number.prototype.toExponential.call(Infinity, 5);
const v32 = -Infinity;
Number.prototype.toExponential.call(v32, 555);
const v38 = -Infinity;
Number.prototype.toExponential.call(v38, 5);
let x = 10;
const v49 = {
    valueOf() {
        x = 20;
        return 1;
    },
};
Number.prototype.toExponential.call(NaN, v49);
const v55 = () => {
    const v58 = {
        valueOf() {
            throw "hello";
        },
    };
    const v60 = Number.prototype.toExponential;
    let v61;
    try { v61 = v60.call(NaN, v58); } catch (e) {}
    return v61;
};
v55();
const v63 = () => {
    const v66 = Number.prototype.toExponential;
    let v67;
    try { v67 = v66.call("Hello"); } catch (e) {}
    return v67;
};
v63();
if (typeof f0 === "function") {
    f0(true, true);
}
