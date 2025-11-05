try {
    const v1 = { principal: 0 };
    let v3;
    try { v3 = newGlobal(v1); } catch (e) {}
    var low = v3;
    const v6 = { principal: 1048575 };
    let v7;
    try { v7 = newGlobal(v6); } catch (e) {}
    var high = v7;
    low.high = high;
    high.low = low;
    try { high.eval("function a() { return saveStack(1, low); }"); } catch (e) {}
    let v12;
    try { v12 = low.eval("high.a();"); } catch (e) {}
    var stack = v12;
    stack?.functionDisplayName;
    stack?.parent;
    try { stack.toString(); } catch (e) {}
} catch(e20) {
}
