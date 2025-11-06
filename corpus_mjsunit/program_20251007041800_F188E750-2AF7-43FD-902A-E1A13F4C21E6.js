function f0() {
}
var BUGNUMBER = 449627;
var summary = "Crash with JIT in js_FillPropertyCache";
var actual = "No Crash";
var expect = "No Crash";
f0(BUGNUMBER);
f0(summary);
if (typeof navigator == "undefined") {
    navigator = { userAgent: "Firefox", vendor: "Mozilla", platform: "Mac" };
}
global = this;
function _init() {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
}
function _searchString(a37) {
    for (let i39 = 0; i39 < a37.length; i39++) {
        var b = a37[i39].string;
        var c = a37[i39].prop;
        this.versionSearchString = a37[i39].versionSearch || a37[i39].identity;
        if (b) {
            if (b.indexOf(a37[i39].subString) != -1) {
                return a37[i39].identity;
            }
        } else {
            if (c) {
                return a37[i39].identity;
            }
        }
    }
}
function _searchVersion(a68) {
    var b = a68.indexOf(this.versionSearchString);
    if (b == -1) {
        return;
    }
    return parseFloat(a68.substring((b + this.versionSearchString.length) + 1));
}
const v85 = navigator.userAgent;
const v89 = { string: v85, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" };
const v90 = navigator.vendor;
const v93 = { string: v90, subString: "Apple", identity: "Safari" };
const v95 = global.opera;
const v97 = { prop: v95, identity: "Opera" };
const v98 = navigator.vendor;
const v101 = { string: v98, subString: "iCab", identity: "iCab" };
const v102 = navigator.vendor;
const v105 = { string: v102, subString: "KDE", identity: "Konqueror" };
const v106 = navigator.userAgent;
const v109 = { string: v106, subString: "Firefox", identity: "Firefox" };
const v110 = navigator.vendor;
const v113 = { string: v110, subString: "Camino", identity: "Camino" };
const v114 = navigator.userAgent;
const v117 = { string: v114, subString: "Netscape", identity: "Netscape" };
const v118 = navigator.userAgent;
const v122 = { string: v118, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" };
const v123 = navigator.userAgent;
const v127 = { string: v123, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" };
const v128 = navigator.userAgent;
const v133 = [v89,v93,v97,v101,v105,v109,v113,v117,v122,v127,{ string: v128, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }];
const v134 = navigator.platform;
const v137 = { string: v134, subString: "Win", identity: "Windows" };
const v138 = navigator.platform;
const v141 = { string: v138, subString: "Mac", identity: "Mac" };
const v142 = navigator.platform;
const v146 = [v137,v141,{ string: v142, subString: "Linux", identity: "Linux" }];
const v147 = {
    init: _init,
    searchString: _searchString,
    searchVersion: _searchVersion,
    dataBrowser: v133,
    dataOS: v146,
};
var BrowserDetect = v147;
BrowserDetect.init();
f0(expect, actual, summary);
