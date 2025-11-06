function f0() {
}
let v2;
try { v2 = newGlobal(); } catch (e) {}
var gw = v2;
var obj = {};
const v6 = gw?.Object;
let v7;
try { v7 = v6.create(obj); } catch (e) {}
var w = v7;
const v9 = () => {
    let v11;
    try { v11 = Object.setPrototypeOf(obj, w); } catch (e) {}
    return v11;
};
try { v9(); } catch (e) {}
const v14 = () => {
    const v15 = gw?.Object;
    let v16;
    try { v16 = v15.setPrototypeOf(obj, w); } catch (e) {}
    return v16;
};
try { v14(); } catch (e) {}
gw?.TypeError;
try { f0(0, 0); } catch (e) {}
