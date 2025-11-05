let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
let v4;
try { v4 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v4) {
    g.__proto__ = {};
}
const v6 = () => {
    let v8;
    try { v8 = g.eval("s += ''"); } catch (e) {}
    return v8;
};
try { v6(); } catch (e) {}
g?.ReferenceError;
