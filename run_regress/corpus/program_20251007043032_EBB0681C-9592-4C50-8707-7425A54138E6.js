var ieval = eval;
var offenders = [["...x"],["...rest"],["...rest"],["...rest"]];
for (const v12 of offenders) {
    function f13() {
        ieval(("function x(" + v12.join(", ")) + ") {}");
    }
    f13();
    function f23() {
        Function.apply(null, v12.concat("return 0;"));
    }
    f23();
}
