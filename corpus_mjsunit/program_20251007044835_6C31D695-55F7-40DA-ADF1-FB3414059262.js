function f() {
    var o = null;
    try {
        delete o.prop;
    } catch(e4) {
    }
    try {
        delete o[1];
    } catch(e7) {
    }
    try {
        let v9 = o[{}];
        v9++;
    } catch(e11) {
    }
}
f();
