let called_custom_unicode_getter = false;
const re = /./;
function f() {
    function f6() {
        called_custom_unicode_getter = true;
    }
    re.__defineGetter__("unicode", f6);
    return 2;
}
["",""];
const v14 = { valueOf: f };
re[Symbol.split]("abc", v14);
