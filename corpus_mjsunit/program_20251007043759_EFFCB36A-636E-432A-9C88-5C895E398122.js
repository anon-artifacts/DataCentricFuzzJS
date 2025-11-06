try {
    const v0 = /x/;
    let v1;
    try { v1 = v0.exec(); } catch (e) {}
    x = v1;
    let v4;
    try { v4 = new WeakMap(); } catch (e) {}
    let v7;
    try { v7 = wrapWithProto(v4, x); } catch (e) {}
    y = v7;
    y.length = 7;
    const v14 = Array?.prototype?.push;
    try { v14.call(y, 1); } catch (e) {}
    const v17 = Array?.prototype?.reverse;
    try { v17.call(y); } catch (e) {}
} catch(e19) {
}
