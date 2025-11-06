var input = "webkit-search-cancel-button-aaaaaaa-bbbbb-ccccccc-dddddddd,";
var bad_regex = "([a-u-]|\u0080|\u0100)*[d]";
function forceUnicode(a5) {
    const v6 = /^\uffff/;
    return ("￿" + a5).replace(v6, "");
}
function testRegex(a12) {
    for (let i14 = 0; i14 < a12.length; i14++) {
        var sub = a12.substring(0, i14 + 1);
        var res = sub.match(bad_regex);
        if (i14 >= 50) {
            res.length;
            res[1];
            sub.substr(-2, 1);
        } else {
        }
    }
}
testRegex(input);
testRegex(forceUnicode(input));
