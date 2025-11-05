function f0() {
    function x() {
        print("x");
    }
    function y() {
        print("y");
    }
    x = y;
    new x(y);
    new x();
}
f0();
function f12() {
    function x() {
        print("x");
    }
    function y() {
        print("y");
    }
    x = y;
    new x(y);
    new x();
    function foo() {
        x();
    }
}
f12();
function f26() {
    function f27() {
        print("x");
    }
    var o = { x: f27 };
    function y() {
        print("y");
    }
    const v37 = o.x;
    o.x = y;
    new v37(y);
    const t38 = o.x;
    new t38();
}
f26();
function f42() {
    function f43() {
        print("x");
    }
    var o = { x: f43 };
    function f49() {
        print("y");
    }
    var y = { x: f49 };
    const v55 = o.x;
    o = y;
    new v55(y);
    const t54 = o.x;
    new t54();
}
f42();
