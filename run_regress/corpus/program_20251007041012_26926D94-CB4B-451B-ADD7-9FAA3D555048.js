function assertGood(a1) {
}
function f4() {
    var a = arguments;
    function f7() {
        assertGood.apply(null, a);
    }
    return f7;
}
const t9 = f4("good");
t9();
function f13() {
    var a = arguments;
    function f16() {
        a[0] = "good";
        assertGood.apply(null, a);
    }
    return f16;
}
const t19 = f13("bad");
t19();
const t20 = Object.prototype;
t20[0] = "good";
function f26() {
    var a = arguments;
    function f29() {
        delete a[0];
        assertGood.apply(null, a);
    }
    return f29;
}
const t31 = f26("bad");
t31();
const t32 = Object.prototype;
delete t32[0];
function assertUndefined(a40) {
}
function f42() {
    var a = arguments;
    function f45() {
        a[0] = "bad";
        assertUndefined.apply(null, a);
    }
    return f45;
}
const t45 = f42();
t45();
