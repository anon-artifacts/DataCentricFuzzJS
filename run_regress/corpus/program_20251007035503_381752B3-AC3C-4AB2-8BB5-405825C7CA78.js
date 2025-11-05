function g(a1) {
    const v4 = -1 % a1;
    let v7;
    try { v7 = Math.cos(8); } catch (e) {}
    return v4 && (v7 >>> 0);
}
try { g(2); } catch (e) {}
const v14 = -1;
let v15;
try { v15 = g(v14); } catch (e) {}
try { uneval(v15); } catch (e) {}
