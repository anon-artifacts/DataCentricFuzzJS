try {
    var valuesDesc = Object.getOwnPropertyDescriptor(Array.prototype, "values");
    typeof valuesDesc;
    const v8 = Array.prototype;
    Symbol.iterator;
    v8[v8];
    valuesDesc.value;
    valuesDesc.configurable;
    valuesDesc.writable;
    valuesDesc.enumerable;
    const v16 = Array.prototype;
    Symbol.unscopables;
    v16[v16].values;
    const v20 = () => {
        const v21 = Array.prototype;
        Symbol.iterator;
        const v23 = v21[v21];
        let v24;
        try { v24 = new v23(); } catch (e) {}
        return v24;
    };
    v20();
} catch(e27) {
}
