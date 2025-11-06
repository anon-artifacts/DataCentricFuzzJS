class C1 extends Function {
}
const v4 = new C1("x", "return this.bar + x");
let inst = v4;
let bound = inst.bind({ bar: 3 }, 4);
bound instanceof C1;
bound();
Object.setPrototypeOf(inst, null);
const v19 = { bar: 1 };
Object.getPrototypeOf(bound = Function.prototype.bind.call(inst, v19, 3));
bound();
function toBind() {
}
var boundArgs = [];
for (let i32 = 0; i32 < 5; i32++) {
    boundArgs.push(i32);
    let bound = toBind.bind(undefined, ...boundArgs);
    bound.prototype = {};
    class C43 extends bound {
    }
    let passedArgs = [];
    for (let i47 = 0; i47 < 15; i47++) {
        passedArgs.push(i47);
        const v54 = new C43(...passedArgs);
        Object.getPrototypeOf(v54);
        C43.prototype;
    }
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
