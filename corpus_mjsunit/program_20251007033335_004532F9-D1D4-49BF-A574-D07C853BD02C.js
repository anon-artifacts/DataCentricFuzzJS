try {
    const v1 = () => {
        throw Error();
    };
    Object.prototype.__defineGetter__(0, v1);
    var a = [,0.1];
    function foo(a12) {
        a?.[a];
    }
    foo(1);
    foo(1);
    const v18 = () => {
        return foo(0);
    };
    v18();
} catch(e23) {
}
