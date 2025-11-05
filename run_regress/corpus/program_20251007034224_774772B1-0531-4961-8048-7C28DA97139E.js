function deleteSymbolFromJSSymbolTableObject(a2) {
    var symbolProperty = Symbol("test");
    a2[symbolProperty] = symbolProperty;
    if (a2[symbolProperty] !== symbolProperty) {
        const v15 = new Error("bad value: " + String(a2[symbolProperty]));
        throw v15;
    }
    delete a2[symbolProperty];
    if (symbolProperty in a2) {
        const v24 = new Error("bad value: " + String(a2[symbolProperty]));
        throw v24;
    }
}
deleteSymbolFromJSSymbolTableObject(this);
