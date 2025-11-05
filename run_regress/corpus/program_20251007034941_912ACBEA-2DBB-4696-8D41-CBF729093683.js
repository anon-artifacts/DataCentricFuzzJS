function foo(a1) {
    return a1?.f + (a1?.k * 1000);
}
try { noInline(foo); } catch (e) {}
for (let i10 = 0; i10 < 100; ++i10) {
    var o = { g_: 5 };
    function f20() {
        return 42 + this?.g_;
    }
    try { o.__defineGetter__("f", f20); } catch (e) {}
    function f27() {
        return 43 + this?.g_;
    }
    try { o.__defineGetter__("g", f27); } catch (e) {}
    function f34() {
        return 44 + this?.g_;
    }
    try { o.__defineGetter__("h", f34); } catch (e) {}
    function f41() {
        return 45 + this?.g_;
    }
    try { o.__defineGetter__("i", f41); } catch (e) {}
    function f48() {
        return 46 + this?.g_;
    }
    try { o.__defineGetter__("j", f48); } catch (e) {}
    function f55() {
        return 47 + this?.g_;
    }
    try { o.__defineGetter__("k", f55); } catch (e) {}
    let v61;
    try { v61 = foo(o); } catch (e) {}
    var result = v61;
    if (result != ((42 + 5) + (1000 * (47 + 5)))) {
        throw "Error: bad result: " + result;
    }
}
