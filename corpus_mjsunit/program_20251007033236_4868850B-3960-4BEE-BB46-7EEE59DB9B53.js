function thingy() {
    function bar() {
        return bar.caller;
    }
    var ok = false;
    var badError = null;
    const v7 = async () => {
        try {
            bar();
            ok = true;
        } catch(e10) {
        }
    };
    var foo = v7;
    foo();
}
thingy();
