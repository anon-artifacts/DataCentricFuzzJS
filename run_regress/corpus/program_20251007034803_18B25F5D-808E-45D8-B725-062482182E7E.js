var iterProto = Object.getPrototypeOf(([])[Symbol.iterator]());
var s = "";
for (const v15 of ["duck","duck","duck","goose","and now you're it"]) {
    s += v15;
    if (v15 === "goose") {
        delete iterProto.next;
    }
    s += ".";
}
