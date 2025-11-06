function f0() {
    const iarr = [0,1,2];
    const darr = [0,2,3.3];
    function indexOf(a12, a13) {
        return a12.indexOf(a13);
    }
    indexOf(iarr, 0);
    indexOf(darr, 0);
    indexOf(iarr, 2);
    indexOf(darr, 2);
    indexOf(iarr, 0);
    indexOf(darr, 0);
}
f0();
function f34() {
    const iarr = [0,1,2];
    function indexOf(a41, a42) {
        return a41.indexOf(a42);
    }
    indexOf(iarr, 0);
    indexOf(iarr, 2);
    indexOf(iarr, 0);
    const darr = [0,2,3.3];
    indexOf(darr, 0);
}
f34();
function f62() {
    const iarr = [,3];
    function indexOf(a68, a69) {
        return a68.indexOf(a69);
    }
    iarr.__proto__ = [2];
    -1;
    indexOf(iarr, 0);
    indexOf(iarr, 2);
    -1;
    indexOf(iarr, 0);
    indexOf(iarr, 2);
}
f62();
function f88() {
    const iarr = [,3];
    function indexOf(a94, a95) {
        return a94.indexOf(a95);
    }
    -1;
    indexOf(iarr, 2);
    indexOf(iarr, 3);
    -1;
    indexOf(iarr, 2);
    iarr.__proto__ = [2];
    indexOf(iarr, 2);
}
f88();
function f114() {
    var array = [,];
    function indexOf(a119) {
        return array.indexOf(a119);
    }
    indexOf(6);
    indexOf(6);
    indexOf(6);
    -1;
    array.__proto__.push(6);
    indexOf(6);
}
f114();
