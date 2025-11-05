try {
    function f0() {
    }
    var BUGNUMBER = 770344;
    var summary = "Object.getPrototypeOf behavior across compartments";
    const v7 = (BUGNUMBER + ": ") + summary;
    try { f0(v7); } catch (e) {}
    let v10;
    try { v10 = newGlobal(); } catch (e) {}
    var other = v10;
    var getProto = Object?.getPrototypeOf;
    var otherGetProto = other?.Object?.getPrototypeOf;
    var proto = {};
    let v20;
    try { v20 = Object.create(proto); } catch (e) {}
    var obj = v20;
    try { getProto(obj); } catch (e) {}
    try { otherGetProto(obj); } catch (e) {}
    other.proto = proto;
    let v25;
    try { v25 = other.evaluate("Object.create(proto)"); } catch (e) {}
    var otherObj = v25;
    try { getProto(otherObj); } catch (e) {}
    try { otherGetProto(otherObj); } catch (e) {}
    let v30;
    try { v30 = other.evaluate("({})"); } catch (e) {}
    var p = v30;
    let v32;
    try { v32 = Object.create(p); } catch (e) {}
    var objOtherProto = v32;
    try { getProto(objOtherProto); } catch (e) {}
    try { otherGetProto(objOtherProto); } catch (e) {}
    const v38 = "var otherProto = { otherProto: 1 }; " + "var otherObj = Object.create(otherProto);";
    try { other.evaluate(v38); } catch (e) {}
    const v40 = other?.otherObj;
    try { getProto(v40); } catch (e) {}
    other?.otherProto;
    const v43 = other?.otherObj;
    try { otherGetProto(v43); } catch (e) {}
    other?.otherProto;
    const v48 = "var newOtherProto = { newOtherProto: 1 }; " + "otherObj.__proto__ = newOtherProto;";
    try { other.evaluate(v48); } catch (e) {}
    const v50 = other?.otherObj;
    try { otherGetProto(v50); } catch (e) {}
    other?.newOtherProto;
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
    try { f0("Tests complete"); } catch (e) {}
} catch(e61) {
}
