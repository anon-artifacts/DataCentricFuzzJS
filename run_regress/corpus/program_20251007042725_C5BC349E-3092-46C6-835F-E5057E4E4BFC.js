try {
    const v0 = {};
    let v2;
    try { v2 = newGlobal(v0); } catch (e) {}
    const g1 = v2;
    let v4;
    try { v4 = newGlobal(newGlobal); } catch (e) {}
    const g2 = v4;
    let v7;
    try { v7 = g2.eval("new Object"); } catch (e) {}
    g1.g2obj = v7;
    const v8 = `\n  const global = this;\n  function capture(shouldIgnoreSelfHosted = true) {\n  }\n  (function iife1() {\n    const captureTrueStack = capture(true);\n  }());\n`;
    const v9 = {};
    try { g1.evaluate(v8, v9); } catch (e) {}
} catch(e11) {
}
