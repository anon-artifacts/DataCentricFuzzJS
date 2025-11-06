var caught = false;
try {
    function f2() {
        function f(a5) {
            if (a5 == 0) {
                return;
            }
            return f(a5 - 1);
        }
        let x = f(3);
    }
    f2();
} catch(e16) {
    caught = true;
}
