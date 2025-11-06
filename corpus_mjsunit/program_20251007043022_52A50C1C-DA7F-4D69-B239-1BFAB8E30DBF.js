function stackTraceDescription(a1) {
    let v3;
    try { v3 = a1.indexOf("@"); } catch (e) {}
    let indexOfAt = v3;
    let v6;
    try { v6 = a1.lastIndexOf("/"); } catch (e) {}
    let indexOfLastSlash = v6;
    if (indexOfLastSlash == -1) {
        indexOfLastSlash = indexOfAt;
    }
    let v12;
    try { v12 = a1.substring(0, indexOfAt); } catch (e) {}
    let functionName = v12;
    const v15 = indexOfLastSlash + 1;
    let v16;
    try { v16 = a1.substring(v15); } catch (e) {}
    let fileName = v16;
    return (functionName + " at ") + fileName;
}
function foo(a22) {
    for (let i24 = 0; i24 < 20; i24++) {
        i24--;
        i24++;
    }
    const v33 = a22 + 1;
    try { foo(v33); } catch (e) {}
}
let error = null;
try {
    try { foo(10); } catch (e) {}
} catch(e39) {
}
const v41 = error?.stack;
let v42;
try { v42 = v41.split("\n"); } catch (e) {}
let frame = v42?.[0];
let v45;
try { v45 = stackTraceDescription(frame); } catch (e) {}
let description = v45;
let v48;
try { v48 = description.indexOf(".js:18"); } catch (e) {}
if (v48 < 0) {
}
