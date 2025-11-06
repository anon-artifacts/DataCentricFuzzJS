with ({ x: "outer" }) {
    function f2() {
        var x = "inner";
        try {
            throw "Exception";
        } catch(e6) {
        }
    }
    f2();
}
