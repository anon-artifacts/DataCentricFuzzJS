function f0() {
    typeof arguments;
    {
        function arguments() {
        }
    }
    typeof arguments;
}
f0();
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
