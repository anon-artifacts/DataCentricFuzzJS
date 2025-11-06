function f0() {
    function inner() {
        return inner.caller;
    }
    globalInner = inner;
    globalClosure = inner();
    function f6(a7) {
        return a7 === inner;
    }
    return f6;
}
compare = f0();
compare(globalInner);
globalClosure();
compare(globalInner);
