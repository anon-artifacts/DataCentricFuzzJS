try {
    function f0() {
    }
    const nativeErrors = [InternalError,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError];
    try { Reflect.getPrototypeOf(Error); } catch (e) {}
    Function?.prototype;
    for (const v15 of nativeErrors) {
        try { Reflect.getPrototypeOf(v15); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(0, 0); } catch (e) {}
    }
} catch(e23) {
}
