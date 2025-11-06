function write(a1) {
    print(a1 + "");
}
var groups = {};
function Assert(a9, a10) {
    if (!groups[a10]) {
        groups[a10] = 1;
    } else {
        let v14 = groups[a10];
        v14++;
    }
    if (!a9) {
        write(((a10 + " test ") + groups[a10]) + " failed");
    } else {
        write(((a10 + " test ") + groups[a10]) + " passed");
    }
}
write("regex test1");
var re = /a/;
const v37 = new String("abcda");
var str = v37;
if (re.test(str)) {
    write("  regex.test pass");
} else {
    write(" regex.test fail");
}
if (str.match(re)) {
    write("  string.match pass");
} else {
    write(" string.match fail");
}
var array = re.exec(str);
write(" string.exec : " + array);
var s = "";
var a = s.split(/\s+/);
write("a.length : " + a.length);
write("a[0]:" + a[0]);
var reTemp = /abc/i;
const v71 = new RegExp(reTemp, "g");
var re = v71;
var tmp = ("abcdef").replace(re, "");
Assert(re.lastIndex == 0, "lastIndex");
const v84 = new RegExp(/abc/i, "g");
var re = v84;
var tmp = ("abcdef").match(re);
Assert(re.lastIndex == 0, "lastIndex");
const v95 = new RegExp(/abc/g);
var re = v95;
re.exec("abcdef");
Assert(re.lastIndex == 3, "lastIndex");
var re = /abc/;
re.exec("abcdef");
Assert(re.lastIndex == 0, "lastIndex");
const v115 = new RegExp(/abc/g, "i");
var re = v115;
Assert(re.global == false, "global");
Assert(re.ignoreCase == true, "ignoreCase");
var re = /abc/i;
const v130 = new RegExp(re, "gm");
var re1 = v130;
Assert(re.global == false, "global");
Assert(re.multiline == false, "multiline");
Assert(re.ignoreCase == true, "ignoreCase");
Assert(re1.global == true, "global");
Assert(re1.multiline == true, "multiline");
Assert(re1.ignoreCase == false, "ignoreCase");
var exceptionThrown = false;
try {
    const v166 = new RegExp(/a/g, "ab");
    var re = v166;
} catch(e168) {
    exceptionThrown = true;
}
Assert(exceptionThrown, "invalid flags");
var re = /(ab)/g;
("abc     ").match(re);
Assert(RegExp.$1 == "ab", "lastIndex");
var re = /test/;
var exceptionThrown = false;
try {
    function f185() {
        throw "an exception string";
    }
    re.lastIndex = { toString: f185 };
} catch(e188) {
    exceptionThrown = true;
}
Assert(exceptionThrown == false, "lastIndex");
exceptionThrown = false;
try {
    Write("LastIndex is " + re.lastIndex);
} catch(e200) {
    exceptionThrown = true;
}
Assert(exceptionThrown == true, "lastIndex");
function testsc(a207, a208) {
    if (!a207.test(a208)) {
        write(("invalid interpretation of '" + a207) + "'");
    }
}
testsc(/^\cA$/, "");
testsc(/^[\cA]$/, "");
testsc(/^\c1$/, "\c1");
testsc(/^\c$/, "\c");
testsc(/\c/, "\c");
testsc(/^\c\1$/, "\c");
testsc(/\c/, "\c");
testsc(/^[\c1]$/, "");
testsc(/^[\c]$/, "c");
testsc(/^[\c]]$/, "c]");
testsc(/^[\c-e]+$/, "cde");
testsc(/^\777$/, "?7");
testsc(/^\777$/, "?7");
testsc(/^\170$/, "x");
c = [/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];
write(("aa").match(/([^])(\1)/));
