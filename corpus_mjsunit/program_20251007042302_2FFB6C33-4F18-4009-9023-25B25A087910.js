var o = { a: 40, b: true };
function f(a5, a6) {
    do {
        if (a5 == 0) {
            return;
        }
        a5--;
    } while ((() => {
            const v12 = true || this;
            let v13 = o.a;
            return v12 ? v13-- : true;
        })())
}
f(200000, 0);
