print(/(ab)|(ac)/.exec("aabc"));
print(/(ab)|(ac)+/.exec("qacbacacd"));
print(/(ab)+|(ac)+/.exec("qababacacd"));
print(/(?:ab)+|(ac)+/.exec("qababacacd"));
print(/(?:ab)+|(?:ac)+/.exec("qababacacd"));
const v23 = new RegExp("^([^?]+)");
var a = v23;
var a1 = a.exec("file://d:\foo.txt");
print(a1);
const v30 = new RegExp("^([a-z+.-]+://(?:[^/]*/)*)[^/]*$");
var b = v30;
var b1 = b.exec("file://d:\foo.txt");
print(b1);
var c = b.exec(a.exec("file://d:\foo.txt")[1])[1];
print(c);
var http = "http://ezedev/WAC/onenoteframe.aspx?Fi=c%3A%5CViewingData%5Cbasefile%5CTest&H=ol&C=0__ezedev&ui=en-US";
print(a.exec(http));
print(b.exec(a.exec(http)[1]));
var d = b.exec(a.exec(http)[1])[1];
print(d);
var d = ("foo bar").replace(/(foo)|(bar)/g, "[$1$2]");
print(d + "");
var e = ("ab").replace(/(.)(.){0}/, "$1$2");
print(e + "");
var groups = {};
function Assert(a76, a77, a78, a79) {
    if (!groups[a78]) {
        groups[a78] = 1;
    } else {
        let v83 = groups[a78];
        v83++;
    }
    var condition = a76 === a77;
    if (!(!a79)) {
        condition = a76 == a77;
    }
    if (!condition) {
        print((((((a78 + " test ") + groups[a78]) + " failed. Expected: ") + a77) + ", Actual: ") + a76);
    } else {
        print(((a78 + " test ") + groups[a78]) + " passed");
    }
}
var needle = /(bc)/;
var haystack = "abcdef";
haystack.match(needle);
Assert(RegExp.$1, "bc", "numberedRegex", true);
Assert(RegExp.$2, "", "numberedRegex");
haystack.match(needle = /xy/);
Assert(RegExp.$1, "bc", "numberedRegex");
Assert(RegExp.$2, "", "numberedRegex");
