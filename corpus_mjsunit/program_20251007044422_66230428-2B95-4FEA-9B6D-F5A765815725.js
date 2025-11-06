try {
    function f0() {
        var o = {};
        with (o) {
            o = "recorder not started, ";
        }
        "arguments" in o;
    }
    f0();
} catch(e9) {
}
