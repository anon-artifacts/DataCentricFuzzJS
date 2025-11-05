function f0() {
}
var BUGNUMBER = 518103;
var summary = "partial flat closures must not reach across funargs";
var actual = "no crash";
var expect = actual;
function Timer() {
}
function f9(a10) {
    Timer.q.push(a10);
}
Timer.prototype = { initWithCallback: f9 };
Timer.q = [];
var later;
function f17(a18, a19, a20, a21) {
    later = a21;
}
var ac = { startSearch: f17 };
function f24() {
}
function f25() {
}
var bm = { insertBookmark: f24, getIdForItemAt: f25 };
function run_test() {
    var tagIds = [];
    function doSearch(a33) {
        function f36() {
            var num = tagIds.length;
            const v39 = new Timer();
            var timer = v39;
            var next = a33.slice(1);
            function f44() {
                return doSearch(next);
            }
            timer.initWithCallback({ notify: f44 });
        }
        ac.startSearch(a33, "", null, { onSearchResult: f36 });
    }
    doSearch("title");
}
run_test();
later.onSearchResult();
for (const v55 in Timer.q) {
    Timer.q[v55].notify();
}
f0(expect, actual, summary);
