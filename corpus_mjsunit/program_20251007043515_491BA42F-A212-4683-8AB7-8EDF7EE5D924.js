try {
    function f0() {
    }
    const nativeErrors = [InternalError,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError];
    const v11 = Error?.prototype;
    let v13;
    try { v13 = Reflect.ownKeys(v11); } catch (e) {}
    try { v13.toString(); } catch (e) {}
    Error?.prototype?.name;
    Error?.prototype?.message;
    for (const v22 of nativeErrors) {
        const v23 = v22?.prototype;
        let v24;
        try { v24 = Reflect.ownKeys(v23); } catch (e) {}
        try { v24.toString(); } catch (e) {}
        v22?.prototype?.name;
        v22?.name;
        v22?.prototype?.message;
        v22?.prototype?.constructor;
    }
    if (typeof f0 === "function") {
        try { f0(0, 0); } catch (e) {}
    }
} catch(e41) {
}
