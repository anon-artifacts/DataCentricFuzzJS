function f(a1) {
    var value = 23;
    function bogeyman() {
        value = 42;
    }
    a1(bogeyman);
    return value;
}
function apply(a8) {
    a8();
}
f(apply);
f(apply);
f(apply);
