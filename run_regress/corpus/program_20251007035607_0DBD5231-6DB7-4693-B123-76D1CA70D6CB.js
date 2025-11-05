let v2;
try { v2 = evalcx("lazy"); } catch (e) {}
x = v2;
function f4() {
    try { x.eval("1"); } catch (e) {}
}
try { oomTest(f4); } catch (e) {}
