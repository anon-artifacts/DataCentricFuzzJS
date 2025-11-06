var goog = goog || {};
goog.global = this;
function f5(a6) {
    return goog.global.eval(a6);
}
goog.globalEval = f5;
goog.globalEval("var foofoofoo = 125; foofoofoo");
