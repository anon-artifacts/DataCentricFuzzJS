var got_here = 0;
function make_sure_we_dont_get_here() {
    got_here = 1;
}
const t4 = RegExp.prototype;
t4.exec = make_sure_we_dont_get_here;
var re = /foo/;
re.exec = make_sure_we_dont_get_here;
try { re("foo"); } catch (e) {}
