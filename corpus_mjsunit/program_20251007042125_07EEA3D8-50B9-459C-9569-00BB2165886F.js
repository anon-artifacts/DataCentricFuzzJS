function f0() {
}
{
    function f() {
        return "inner";
    }
}
function f() {
    return "outer";
}
f0(f(), "inner");
