function f0() {
}
var BUGNUMBER = 861219;
var summary = "Date.prototype.toString is a generic function";
f0((BUGNUMBER + ": ") + summary);
const v9 = {};
const v10 = [];
const v11 = /foo/;
const v13 = Date.prototype;
const v15 = new Date();
const v17 = new Proxy(v15, {});
for (const v19 of [v9,v10,v11,v13,v17]) {
    const v20 = () => {
        const v22 = Date.prototype.toString;
        let v23;
        try { v23 = v22.call(v19); } catch (e) {}
        return v23;
    };
    v20();
}
for (const v36 of [null,,0,1.2,true,false,"foo",Symbol.iterator]) {
    const v37 = () => {
        const v39 = Date.prototype.toString;
        let v40;
        try { v40 = v39.call(v36); } catch (e) {}
        return v40;
    };
    v37();
}
if (typeof f0 === "function") {
    f0(true, true);
}
