function f0() {
}
var BUGNUMBER = 1204027;
var summary = "Escape sequences aren't allowed in bolded grammar tokens (that is, in " + "keywords, possibly contextual keywords)";
f0((BUGNUMBER + ": ") + summary);
var randomExtensions = ["for \u0065ach (var x in []);","for e\u0061ch (var x in []);","[0 for \u0065ach (var x in [])]","[0 for e\u0061ch (var x in [])]","(0 for \u0065ach (var x in []))","(0 for e\u0061ch (var x in []))","(for (x \u006ff [1]) x)","(for (x o\u0066 [1]) x)"];
for (const v21 of randomExtensions) {
    const v22 = () => {
        let v24;
        try { v24 = Function(v21); } catch (e) {}
        return v24;
    };
    v22();
    "bad behavior for: " + v21;
}
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
