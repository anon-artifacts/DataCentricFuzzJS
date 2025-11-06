var functest;
var vartest = 0;
function functest(a6) {
    if (a6) {
        return 1;
    }
    vartest = 1;
    function f9(a10) {
        return 2;
    }
    functest = f9;
    return functest(true);
}
var value = functest(false);
print("vartest = " + vartest);
print("value = " + value);
function moobah() {
    function f24() {
        moobah.x = "whatever";
    }
    this.innerfb = f24;
    this.innerfb();
    print(moobah.x);
}
var moobah = moobah;
moobah();
