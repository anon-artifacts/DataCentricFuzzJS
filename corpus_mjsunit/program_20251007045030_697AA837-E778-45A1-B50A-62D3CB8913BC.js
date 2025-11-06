function f0() {
}
var BUGNUMBER = 920479;
var summary = "Convert all arguments passed to Function() to string before doing any " + "parsing of the to-be-created Function's parameters or body text";
f0((BUGNUMBER + ": ") + summary);
const v11 = () => {
    const v15 = {
        toString() {
            throw 42;
        },
    };
    let v17;
    try { v17 = Function("@", v15); } catch (e) {}
    return v17;
};
v11();
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
