function FunctionCallerFromInlinedBuiltin() {
    function f() {
        function g() {
            Object.getOwnPropertyDescriptor(g, "caller");
        }
        ([0]).forEach(g);
    }
    f();
    f();
    f();
}
FunctionCallerFromInlinedBuiltin();
function FunctionArgumentsFromInlinedBuiltin() {
    function g() {
        g.arguments;
    }
    function f() {
        ([0]).forEach(g);
    }
    f();
    f();
    f();
}
FunctionArgumentsFromInlinedBuiltin();
