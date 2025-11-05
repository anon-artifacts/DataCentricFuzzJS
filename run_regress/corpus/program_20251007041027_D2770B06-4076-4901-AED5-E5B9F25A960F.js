function TestArray(a1) {
    function Check(a3) {
        a3[0] = "";
        a3[0];
        a3[0] = {};
        a3[0];
        function f10() {
            return 27;
        }
        a3[0] = { valueOf: f10 };
        a3[0];
    }
    const v16 = new a1(1);
    Check(v16);
    const v19 = new a1(100);
    Check(v19);
}
TestArray(Uint8Array);
