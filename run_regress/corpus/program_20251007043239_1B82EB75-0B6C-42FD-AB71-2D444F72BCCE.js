function f0() {
}
var BUGNUMBER = 1290655;
var summary = "String.prototype.split should call GetMethod.";
f0((BUGNUMBER + ": ") + summary);
function create(a10) {
    const v12 = Symbol.split;
    const v15 = {
        [v12]: a10,
        toString() {
            return "-";
        },
    };
    return v15;
}
for (const v19 of [null,,]) {
    ("a-a").split(create(v19));
    ["a","a"];
}
const v29 = Symbol.iterator;
for (const v34 of [1,true,v29,"",{},[]]) {
    const v35 = () => {
        const v36 = create(v34);
        let v38;
        try { v38 = ("a-a").split(v36); } catch (e) {}
        return v38;
    };
    v35();
}
if (typeof f0 === "function") {
    f0(true, true);
}
