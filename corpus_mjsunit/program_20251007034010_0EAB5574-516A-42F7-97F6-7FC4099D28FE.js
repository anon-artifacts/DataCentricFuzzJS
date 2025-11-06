try {
    const v0 = {};
    const v1 = { z: v0 };
    const v2 = { y: v1 };
    const v3 = { x: v2 };
    var o = { w: v3 };
    const v6 = {};
    const v8 = { node: v6, edge: "w" };
    const v9 = {};
    const v11 = { node: v9, edge: "x" };
    const v12 = {};
    const v14 = { node: v12, edge: "y" };
    const v15 = {};
    const v18 = [v8,v11,v14,{ node: v15, edge: "z" }];
    try { Match.Pattern(v18); } catch (e) {}
    var a = [,o];
    const v24 = {};
    const v27 = [{ node: v24, edge: "objectElements[1]" }];
    try { Match.Pattern(v27); } catch (e) {}
    function C() {
    }
    const v30 = {};
    const t22 = C?.prototype;
    t22.obj = v30;
    let v32;
    try { v32 = new C(); } catch (e) {}
    var c = v32;
    const v34 = {};
    const v36 = { node: v34, edge: "group" };
    const v38 = Match?.Pattern?.ANY;
    const v40 = { node: v38, edge: "group_proto" };
    const v42 = Match?.Pattern?.ANY;
    const v43 = { constructor: v42 };
    const v46 = [v36,v40,{ node: v43, edge: "obj" }];
    try { Match.Pattern(v46); } catch (e) {}
    function f(a49) {
        function g(a51) {
            return a49 + a51;
        }
        return g;
    }
    var o = {};
    let v55;
    try { v55 = f(o); } catch (e) {}
    var gc = v55;
    const v58 = { node: gc, edge: "fun_environment" };
    const v60 = Match?.Pattern?.ANY;
    const v63 = [v58,{ node: v60, edge: "x" }];
    try { Match.Pattern(v63); } catch (e) {}
    const v65 = {};
    const v67 = { node: v65, edge: "group" };
    const v69 = Match?.Pattern?.ANY;
    const v71 = { node: v69, edge: "group_global" };
    const v72 = {};
    const v75 = [v67,v71,{ node: v72, edge: "o" }];
    try { Match.Pattern(v75); } catch (e) {}
    let v78;
    try { v78 = Symbol(); } catch (e) {}
    var so = { sym: v78 };
    const v81 = {};
    const v84 = [{ node: v81, edge: "sym" }];
    try { Match.Pattern(v84); } catch (e) {}
} catch(e86) {
}
