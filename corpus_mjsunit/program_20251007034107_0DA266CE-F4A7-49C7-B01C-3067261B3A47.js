var gFutureCalls = [];
function add_future_call(a3, a4) {
    if (!(a3 in gFutureCalls)) {
        gFutureCalls[a3] = [];
    }
}
function check_reset_test(a9) {
}
check_reset_test(0);
for (let i13 = 1; i13 <= 8; ++i13) {
    function f19(a20) {
        function f21() {
            check_reset_test(a20);
        }
        add_future_call(a20, f21);
    }
    f19(i13);
}
