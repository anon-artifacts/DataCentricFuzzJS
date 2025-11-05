try {
    const v1 = {};
    function f2() {
        return [];
    }
    const v5 = new Proxy(v1, { getPropertyDescriptor: f2 });
    var p = v5;
    var o = Object.create(p);
    with (o) {
        unresolved_name();
    }
} catch(e12) {
}
