console.log("Tests that check that sloppy getters and setters on the global object don't coerce undefined to their this.");
var act_e;
try {
    this.__proto__;
    var originalProto = this.__proto__;
    this.__proto__ = 1;
    if (this.__proto__ != originalProto) {
        throw "__proto__ was modified";
    }
} catch(e16) {
    act_e = e16;
}
if (act_e) {
    console.log(("shouldn't have thrown '" + e) + "' when accessing and modifying this.__proto__");
} else {
    console.log("this.__proto__ accessed succesfully and stayed frozen.");
}
try {
    Object.prototype.valueOf.call(3);
} catch(e30) {
}
try {
    Object.prototype.valueOf.call(null);
} catch(e36) {
}
try {
    Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get();
} catch(e42) {
}
try {
    const v44 = ["foo"];
    Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set(v44);
} catch(e50) {
}
try {
    const t35 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get;
    t35();
} catch(e58) {
}
try {
    const v60 = ["foo"];
    const t41 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
    t41(v60);
} catch(e68) {
}
var top_level_sloppy_getter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get;
try {
    top_level_sloppy_getter();
} catch(e76) {
}
var top_level_sloppy_setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
try {
    top_level_sloppy_setter(["foo"]);
} catch(e85) {
}
