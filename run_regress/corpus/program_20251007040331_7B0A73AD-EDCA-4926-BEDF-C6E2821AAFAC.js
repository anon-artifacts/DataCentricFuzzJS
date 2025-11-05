function outer() {
    var val = 0;
    function foo() {
        val = 0;
        var z = false;
        var y = true;
        if (!z) {
            while ((() => {
                    const v10 = !z;
                    z = v10;
                    return v10;
                })()) {
                if (y) {
                    val++;
                }
            }
        }
        return val++;
    }
    return foo;
}
var foo = outer();
foo();
foo();
foo();
