function f() {
}
try { new EvalTest(); } catch (e) {}
function EvalTest() {
    with (this) {
        try { f(EvalTest); } catch (e) {}
    }
}
try { evaluate("var obj = new f(1, 'x');"); } catch (e) {}
