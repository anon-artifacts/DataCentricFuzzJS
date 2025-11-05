try {
    const v1 = -1;
    let v3;
    try { v3 = serialize(v1); } catch (e) {}
    var buf = v3;
    let v6;
    try { v6 = serialize(undefined); } catch (e) {}
    var nbuf = v6;
    for (let i9 = 0; i9 < 5; i9++) {
        const v15 = nbuf?.[i9];
        buf[i9 + 8] = v15;
    }
} catch(e18) {
}
