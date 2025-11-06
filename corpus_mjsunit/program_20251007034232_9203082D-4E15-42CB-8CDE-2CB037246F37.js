var do_set = false;
function set_proto_elements() {
    if (do_set) {
        const t3 = Array.prototype;
        t3[1] = 1.5;
    }
}
function f(a7, a8) {
    set_proto_elements();
    return a7[a8] + 0.5;
}
var arr = [0,,2.5];
f(arr, 0);
f(arr, 0);
f(arr, 0);
do_set = true;
f(arr, 1);
