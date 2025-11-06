var exception;
try {
    const v4 = new String("@hBg");
    var str0 = v4;
    const t4 = Intl.Collator;
    const v8 = new t4();
    var collat3 = v8;
    str10 = str0.padEnd(2147483644, 1);
    const v15 = Symbol.toStringTag;
    Object.defineProperty(collat3, v15, { value: str10 });
    collat3.toLocaleString();
} catch(e21) {
    exception = e21;
}
