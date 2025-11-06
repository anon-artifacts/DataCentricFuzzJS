function outer(a1) {
    function inner() {
        var x = 10;
        function f5() {
            x = 20;
        }
        f5();
        return a1;
    }
    return inner();
}
outer(30);
