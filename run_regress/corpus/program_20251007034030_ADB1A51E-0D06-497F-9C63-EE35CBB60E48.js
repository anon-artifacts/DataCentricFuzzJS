var glo;
function f2() {
}
var Proxy = f2;
function f4(a5) {
    glo = a5;
}
var print = f4;
function f7() {
    function handlerFactory() {
        function f9() {
            var yum = "PCAL";
            dumpln(yum + "LED: getOwnPropertyDescriptor");
        }
        return { getOwnPropertyDescriptor: f9 };
    }
    const v18 = Proxy(handlerFactory());
    function kspuxw() {
        print(kspuxw);
    }
    Object = kspuxw(v18);
}
f7();
glo();
function f26(a27) {
    function v0() {
        const v30 = arguments[0];
        function f31() {
            function v2() {
            }
            a27 = eval;
        }
        f31(v30);
        prop1 = a27;
    }
    v0();
}
f26();
print(prop1);
print("PASS");
