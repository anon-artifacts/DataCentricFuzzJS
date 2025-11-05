var callback;
function f2() {
    print("callback 1");
    var ran = false;
    function startTest() {
        print("startTest: ran == " + ran);
        if (!ran) {
            ran = true;
            try {
                function f14() {
                    print("callback 2");
                    startTest();
                    callback = null;
                }
                callback = f14;
            } catch(e19) {
                function f20() {
                    print("callback 2");
                    var x = e19;
                    callback = null;
                }
                callback = f20;
            }
        }
    }
    startTest();
}
callback = f2;
while (callback) {
    callback();
}
