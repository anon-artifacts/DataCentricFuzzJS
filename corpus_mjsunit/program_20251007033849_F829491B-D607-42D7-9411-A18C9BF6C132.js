function write(a1) {
    print(a1 + "");
}
function Test1() {
    write(Math.PI);
    write(Math.PI);
    let v12 = Math.PI;
    v12++;
    write(Math.PI);
    write(Math.PI);
}
Test1();
function Test2() {
    var a = [10,20];
    write(a.concat());
    write(a.concat());
}
Test2();
function Test3() {
    function f() {
        write("in f");
    }
    var o = {};
    Object.defineProperty(o, "x", { writable: false, value: f });
    write(o.x);
    o.x();
    o.x();
    write(o.x);
}
Test3();
function Test4() {
    function f50() {
    }
    Object.defineProperty(this, "x", { get: f50 });
    for (let i55 = 0; i55 < 10; i55++) {
        x = 20;
    }
}
Test4();
