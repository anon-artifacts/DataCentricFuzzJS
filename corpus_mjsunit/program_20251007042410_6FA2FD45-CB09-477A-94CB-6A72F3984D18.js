function f0() {
}
const v4 = [1,2];
let v5;
try { v5 = new ArrayBuffer(v4); } catch (e) {}
var buf = v5;
let v8;
try { v8 = new DataView(buf); } catch (e) {}
var bufView = v8;
try { detachArrayBuffer(buf); } catch (e) {}
const v12 = () => {
    let v14;
    try { v14 = bufView.getInt8(0); } catch (e) {}
    return v14;
};
try { v12(); } catch (e) {}
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
