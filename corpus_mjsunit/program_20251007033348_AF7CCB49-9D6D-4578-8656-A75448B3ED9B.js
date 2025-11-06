function f0() {
}
var BUGNUMBER = 1290655;
var summary = "String.prototype.search should call GetMethod.";
f0((BUGNUMBER + ": ") + summary);
function create(a10) {
    const v12 = Symbol.search;
    const v15 = {
        [v12]: a10,
        toString() {
            return "-";
        },
    };
    return v15;
}
for (const v19 of [null,,]) {
    ("a-a").search(create(v19));
}
const v27 = Symbol.iterator;
for (const v32 of [1,true,v27,"",{},[]]) {
    const v33 = () => {
        const v34 = create(v32);
        let v36;
        try { v36 = ("a-a").search(v34); } catch (e) {}
        return v36;
    };
    v33();
}
if (typeof f0 === "function") {
    f0(true, true);
}
