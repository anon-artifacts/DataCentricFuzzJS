function addNullBoolUndefined(a1, a2) {
    return a1 + a2;
}
try { noInline(addNullBoolUndefined); } catch (e) {}
for (let i7 = 0; i7 < 10000; ++i7) {
    let v15;
    try { v15 = addNullBoolUndefined(0.5, null); } catch (e) {}
    var value = v15;
    if (value !== 0.5) {
        throw (("addNullBoolUndefined(0.5, null) failed with i = " + i7) + " returned value = ") + value;
    }
    let v26;
    try { v26 = addNullBoolUndefined(null, undefined); } catch (e) {}
    var value = v26;
    if (value === value) {
        throw (("addNullBoolUndefined(null, undefined) failed with i = " + i7) + " returned value = ") + value;
    }
    let v36;
    try { v36 = addNullBoolUndefined(true, null); } catch (e) {}
    var value = v36;
    if (value !== 1) {
        throw (("addNullBoolUndefined(true, null) failed with i = " + i7) + " returned value = ") + value;
    }
    let v47;
    try { v47 = addNullBoolUndefined(undefined, false); } catch (e) {}
    var value = v47;
    if (value === value) {
        throw (("addNullBoolUndefined(undefined, false) failed with i = " + i7) + " returned value = ") + value;
    }
    let v57;
    try { v57 = addNullBoolUndefined(false, true); } catch (e) {}
    var value = v57;
    if (value !== 1) {
        throw (("addNullBoolUndefined(false, true) failed with i = " + i7) + " returned value = ") + value;
    }
    let v68;
    try { v68 = addNullBoolUndefined(null, 42); } catch (e) {}
    var value = v68;
    if (value !== 42) {
        throw (("addNullBoolUndefined(null, 42) failed with i = " + i7) + " returned value = ") + value;
    }
}
