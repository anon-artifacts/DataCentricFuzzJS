function r(a1) {
    return a1.f;
}
function h() {
}
function y(a5) {
    var x = arguments;
    h.apply(r(a5), x);
}
y({ f: 3 });
y({ f: 3 });
y({ f: 3 });
y({ f: 3, u: 4 });
