function f0() {
}
var BUGNUMBER = 1290655;
var summary = "String.prototype.match should call GetMethod.";
f0((BUGNUMBER + ": ") + summary);
function create(a10) {
    const v12 = Symbol.match;
    const v15 = {
        [v12]: a10,
        toString() {
            return "-";
        },
    };
    return v15;
}
var expected = ["-"];
expected.index = 1;
expected.input = "a-a";
for (const v24 of [null,,]) {
    ("a-a").match(create(v24));
}
const v31 = Symbol.iterator;
for (const v36 of [1,true,v31,"",{},[]]) {
    const v37 = () => {
        const v38 = create(v36);
        let v40;
        try { v40 = ("a-a").match(v38); } catch (e) {}
        return v40;
    };
    v37();
}
if (typeof f0 === "function") {
    f0(true, true);
}
