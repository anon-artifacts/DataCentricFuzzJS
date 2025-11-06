try {
    var script = "                                                                   Error.prepareStackTrace = function(a, b) { return b; };                        try {                                                                          } catch (e) {                                                                  }                                                                              try {                                                                          } catch (e) {                                                                  }                                                                            ";
    function assertNotIn(a3, a4) {
        for (let i6 = 0; i6 < a4?.length; i6++) {
            const v13 = a4?.[i6];
            let v14;
            try { v14 = v13.getFunction(); } catch (e) {}
            false === v14;
        }
    }
    var caller_script = "(function (f) { f(); })";
    script = "  ";
    f.prototype = null;
    let v21;
    try { v21 = new f(); } catch (e) {}
    var o = v21;
    var otherObject = {};
    let v26;
    try { v26 = Object.getPrototypeOf(o); } catch (e) {}
    var proto = v26;
    proto === Object?.prototype;
    proto === otherObject?.prototype;
    let v32;
    try { v32 = Object.getPrototypeOf(o); } catch (e) {}
    (proto = v32) === Object?.prototype;
    proto === otherObject?.prototype;
    var ctor_script = "Function";
    var ctor_a_script = "(function() { return Function.apply(this, ['return 1;']); })";
    var ctor_b_script = "Function.bind(this, 'return 1;')";
    var ctor_c_script = "(function() { return Function.call(this, 'return 1;'); })";
    var promise_ctor_script = "Promise";
    var script_0 = "   ";
    const v49 = /_0/g;
    let v51;
    try { v51 = script_0.replace(v49, "_1"); } catch (e) {}
    script = script_0 + v51;
} catch(e53) {
}
