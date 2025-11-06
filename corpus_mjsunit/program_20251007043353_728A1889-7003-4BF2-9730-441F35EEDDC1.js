function f() {
    var ret;
    for (let i4 = 0; i4 < 10; ++i4) {
        {
            let local = 3;
            function f12() {
                print(local++);
            }
            ret = f12;
        }
    }
    return ret;
}
const t13 = f();
t13();
