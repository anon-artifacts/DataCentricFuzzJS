try {
    function f() {
    }
    f(("").match(/(?:(?=g)).{2147483648,}/ + /[]/), null);
} catch(e8) {
}
const v12 = new RegExp("a[-\xDE]+M", "gi");
var re = v12;
re.exec("");
const v18 = new RegExp("a[-\u00b8]+?c", "gi");
var re = v18;
re.exec("");
const v24 = new RegExp("a[-\u00f8]?c", "gi");
var re = v24;
re.exec("");
