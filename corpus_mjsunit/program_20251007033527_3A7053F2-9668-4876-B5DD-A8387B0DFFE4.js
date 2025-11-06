function __f_2(a1, a2) {
    a1[1] = a2;
}
function __f_9() {
    var arr = [1.5,0,0];
    __f_2(1.5);
    __f_2(arr);
}
__f_9();
