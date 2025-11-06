function testMatch(a1, a2, a3, a4, a5, a6, a7) {
    var matchResult = a2.match(a3);
    a1 + "-match";
    var match = a2.substring(a6, a7);
    var preMatch = a2.substring(0, a6);
    var postMatch = a2.substring(a7);
    var lastParen = a5.length > 0 ? a5[a5.length - 1] : "";
    if (a3.global) {
        var lastMatch = matchResult[matchResult.length - 1];
        a1 + "-match-string_g";
    } else {
        matchResult[0];
        a1 + "-match-string";
        a5.length + 1;
        matchResult.length;
        a1 + "-cap-return";
        for (let i47 = 1; i47 < matchResult.length; i47++) {
            a5[i47 - 1];
            matchResult[i47];
            (a1 + "-cap-return-") + i47;
        }
    }
    RegExp["$&"];
    a1 + "-$&";
    RegExp.lastMatch;
    a1 + "-lastMatch";
    RegExp.$0;
    a1 + "-nocapture-10";
    for (let i73 = 1; i73 <= 9; i73++) {
        if (i73 <= a5.length) {
            a5[i73 - 1];
            RegExp["$" + i73];
            (a1 + "-capture-") + i73;
        } else {
            RegExp["$" + i73];
            (a1 + "-nocapture-") + i73;
        }
    }
    RegExp.$10;
    a1 + "-nocapture-10";
    RegExp.input;
    a1 + "-input";
    RegExp.$_;
    a1 + "-$_";
    RegExp["$`"];
    a1 + "-$`";
    RegExp.leftContext;
    a1 + "-leftContex";
    RegExp["$'"];
    a1 + "-$'";
    RegExp.rightContext;
    a1 + "-rightContex";
    RegExp["$+"];
    a1 + "-$+";
    RegExp.lastParen;
    a1 + "-lastParen";
}
var stringSample = "A man, a plan, a canal: Panama";
var stringSample2 = "Argle bargle glop glyf!";
var stringSample3 = "abcdefghijxxxxxxxxxx";
var re_nog = /\w+/;
testMatch("Nonglobal", stringSample, re_nog, ["A"], [], 0, 1);
re_nog.lastIndex = 2;
testMatch("Nonglobal-ignore-lastIndex", stringSample, re_nog, ["A"], [], 0, 1);
var re_multicap = /(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/;
testMatch("Capture-Nonglobal", stringSample3, re_multicap, ["abcdefghij","a","b","c","d","e","f","g","h","i","j"], ["a","b","c","d","e","f","g","h","i","j"], 0, 10);
var re = /\w+/g;
testMatch("Global", stringSample2, re, ["Argle","bargle","glop","glyf"], [], 18, 22);
re.lastIndex = 10;
testMatch("Global-ignore-lastIndex", stringSample2, re, ["Argle","bargle","glop","glyf"], [], 18, 22);
var re_cap = /\w(\w*)/g;
testMatch("Capture-Global", stringSample, re_cap, ["A","man","a","plan","a","canal","Panama"], ["anama"], 24, 30);
var re_atom = /an/;
testMatch("Atom", stringSample, re_atom, ["an"], [], 3, 5);
var re_atomg = /an/g;
testMatch("Global-Atom", stringSample, re_atomg, ["an","an","an","an"], [], 25, 27);
