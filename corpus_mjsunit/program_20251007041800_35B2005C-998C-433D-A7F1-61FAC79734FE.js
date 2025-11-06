var primitives = ["string",42,null,,Symbol("symbol"),true,false];
for (const v11 of primitives) {
    var ret = Object.seal(v11);
    if (ret !== v11) {
        const v21 = new Error("bad value: " + String(ret));
        throw v21;
    }
}
