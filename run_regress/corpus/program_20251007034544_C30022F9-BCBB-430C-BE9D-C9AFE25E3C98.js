var s = "foo";
var i;
for ((() => {
        i = 0;
    })();
    i < 18;
    i++) {
    s = s + s;
}
function repeatRegexp(a10) {
    for ((() => {
            i = 0;
        })();
        i < 1000;
        i++) {
        a10.test(s);
    }
}
repeatRegexp(/^bar/);
repeatRegexp(/^foo|^bar|^baz/);
repeatRegexp(/(^bar)/);
repeatRegexp(/(?=^bar)\w+/);
