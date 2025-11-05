function f(a1, a2) {
    var arr;
    if ((typeof a2 === "object") && (a2 instanceof Array)) {
        arr = a2;
    } else {
        arr = arguments;
    }
    var i = arr.length;
    while (--i >= 0) {
        arr[i];
    }
    var arrIsArguments = arr[1] !== a2;
}
f(false, "b", "c");
f(false, "b", "c");
f(false, "b", "c");
f(true, ["b","c"]);
