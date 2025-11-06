console.log("Bug 7445, bug 7253: Handle Unicode escapes in regexps.");
var I3 = /^\s*(fwd|re|aw|antw|antwort|wg|sv|ang|odp|betreff|betr|transf|reenv\.|reenv|in|res|resp|resp\.|enc|\u8f6c\u53d1|\u56DE\u590D|\u041F\u0435\u0440\u0435\u0441\u043B|\u041E\u0442\u0432\u0435\u0442):\s*(.*)$/i;
var Ci = /\s+/g;
var BC = /^ /;
var BG = / $/;
function cy(a12) {
    var b = I3.exec(a12);
    if (b) {
        a12 = b[2];
    }
    return Gn(a12);
}
function Gn(a19) {
    return a19.replace(Ci, " ").replace(BC, "").replace(BG, "");
}
cy("Re: Hello");
cy("Ответ: Hello");
var regex = /^([^#<\u2264]+)([#<\u2264])(.*)$/;
regex.exec("24#Midnight").toString();
