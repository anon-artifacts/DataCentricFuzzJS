let v0 = "level1";
with ({}) {
    v0 += "level2";
    function f3(a4) {
        print();
        return v0;
    }
    print();
}
print.prototype = print;
function f10(a11) {
    with ({}) {
        print(a11);
    }
    return print;
}
