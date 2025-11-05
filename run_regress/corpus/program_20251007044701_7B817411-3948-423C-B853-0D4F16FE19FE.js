function f() {
    var s = "äϠ�𝌆";
    var i = s[Symbol.iterator]();
    i.next().value;
    i.next().value;
    i.next().value;
    i.next().value;
    i.next().value;
}
f();
f();
f();
