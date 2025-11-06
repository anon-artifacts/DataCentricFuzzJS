function test() {
    function f1() {
        return "simple_escape";
    }
    var simple_escape = f1;
    throw simple_escape;
}
function runtest() {
    try {
        test();
    } catch(e6) {
        return e6;
    }
}
const t14 = runtest();
print(t14());
const t15 = runtest();
print(t15());
