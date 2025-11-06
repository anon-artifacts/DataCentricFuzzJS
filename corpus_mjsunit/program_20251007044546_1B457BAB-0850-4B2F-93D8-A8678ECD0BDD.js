try {
    const MaxStringLength = (2 ** 30) - 2;
    const v6 = () => {
        const v8 = MaxStringLength + 1;
        let v10;
        try { v10 = ("a").repeat(v8); } catch (e) {}
        return v10;
    };
    try { v6(); } catch (e) {}
    let v14;
    try { v14 = ("ΐ").repeat(MaxStringLength); } catch (e) {}
    var s = v14;
    s?.length;
    var ex = null;
    try {
        try { escape(s); } catch (e) {}
    } catch(e21) {
        ex = e21;
    }
    (ex === "out of memory") || (ex instanceof InternalError);
} catch(e28) {
}
