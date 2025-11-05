try {
    var target = {};
    let v4;
    try { v4 = wrapWithProto(target, null); } catch (e) {}
    var wrapper = v4;
    const v7 = {};
    let v8;
    try { v8 = new Proxy(wrapper, v7); } catch (e) {}
    var p = v8;
    p.prop = 3;
    target?.prop;
} catch(e13) {
}
