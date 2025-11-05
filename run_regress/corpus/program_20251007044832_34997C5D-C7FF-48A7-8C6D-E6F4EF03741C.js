function f0() {
}
function DetachArrayBufferValue(a2, a3) {
    const v7 = {
        valueOf() {
            try { detachArrayBuffer(a2); } catch (e) {}
            return a3;
        },
    };
    return v7;
}
function DetachTypedArrayValue(a9, a10) {
    const v15 = {
        valueOf() {
            const v12 = a9.buffer;
            try { detachArrayBuffer(v12); } catch (e) {}
            return a10;
        },
    };
    return v15;
}
for (const v21 of [0,1,10,4096]) {
    const v23 = new Int32Array(v21);
    let ta = v23;
    let value = DetachArrayBufferValue(ta.buffer, 123);
    const v29 = () => {
        let v30;
        try { v30 = ta.fill(value); } catch (e) {}
        return v30;
    };
    v29();
}
for (const v38 of [0,1,10,4096]) {
    const v40 = new Int32Array(v38);
    let ta = v40;
    let value = DetachTypedArrayValue(ta, 123);
    const v45 = () => {
        let v46;
        try { v46 = ta.fill(value); } catch (e) {}
        return v46;
    };
    v45();
}
if (typeof f0 === "function") {
    f0(0, 0);
}
