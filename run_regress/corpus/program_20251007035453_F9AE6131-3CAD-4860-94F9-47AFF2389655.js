try {
    function f0() {
    }
    function expect(a2, a3) {
        const v4 = expect?.expected;
        try { f0(v4, a2, a3); } catch (e) {}
    }
    const v10 = {
        set x(a8) {
            try { expect(this, a8); } catch (e) {}
        },
        y: 4,
    };
    var window = v10;
    expect.expected = window;
    window.x = "setting through a setter directly";
    window.y = 5;
    const v15 = window?.y;
    try { f0(5, v15, "setting properties works"); } catch (e) {}
    var easy = { easy: "yes", __proto__: window };
    expect.expected = easy;
    easy.x = "setting through a setter all-native on prototype";
    easy.y = 6;
    const v24 = window?.y;
    try { f0(5, v24, "window.y remains as it was"); } catch (e) {}
    const v28 = easy?.y;
    try { f0(6, v28, "shadowing works properly"); } catch (e) {}
    let v33;
    try { v33 = evalcx(""); } catch (e) {}
    var sandbox = v33;
    sandbox.window = window;
    sandbox.print = f0;
    sandbox.expect = expect;
    let v36;
    try { v36 = evalcx("Object.create(window)", sandbox); } catch (e) {}
    var hard = v36;
    expect.expected = hard;
    hard.x = "a setter through proxy -> native";
    hard.y = 6;
    const v41 = window?.y;
    try { f0(5, v41, "window.y remains as it was through a proxy"); } catch (e) {}
    const v45 = hard?.y;
    try { f0(6, v45, "shadowing works on proxies"); } catch (e) {}
    hard.__proto__ = { passed: true };
    const v51 = hard?.passed;
    try { f0(true, v51, "can set proxy.__proto__ through a native"); } catch (e) {}
    let v55;
    try { v55 = evalcx("({ set x(y) { expect(this, y); }, y: 4 })", sandbox); } catch (e) {}
    var inverse = v55;
    expect.expected = inverse;
    inverse.x = "setting through a proxy directly";
    inverse.y = 5;
    const v60 = inverse?.y;
    try { f0(5, v60, "setting properties works on proxies"); } catch (e) {}
    let v64;
    try { v64 = Object.create(inverse); } catch (e) {}
    var inversehard = v64;
    expect.expected = inversehard;
    inversehard.x = "setting through a setter with a proxy on the proto chain";
    inversehard.y = 6;
    const v69 = inverse?.y;
    try { f0(5, v69, "inverse.y remains as it was"); } catch (e) {}
    const v73 = inversehard?.y;
    try { f0(6, v73, "shadowing works native -> proxy"); } catch (e) {}
    inversehard.__proto__ = { passed: true };
    const v79 = inversehard?.passed;
    try { f0(true, v79, "can set native.__proto__ through a proxy"); } catch (e) {}
} catch(e82) {
}
