function f0() {
}
var BUGNUMBER = 1021835;
var summary = "Returning non-object from @@iterator should throw";
f0((BUGNUMBER + ": ") + summary);
let primitives = [1,true,,null,"foo",Symbol.iterator];
function f() {
}
for (const v19 of primitives) {
    const v20 = Symbol.iterator;
    const v22 = {
        [v20]() {
            return v19;
        },
    };
    let arg = v22;
    const v24 = () => {
        let v25;
        try { v25 = f(...arg); } catch (e) {}
        return v25;
    };
    v24();
}
if (typeof f0 === "function") {
    f0(0, 0);
}
