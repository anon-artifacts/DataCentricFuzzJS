try {
    const v1 = { principal: 65535 };
    let v3;
    try { v3 = newGlobal(v1); } catch (e) {}
    const g1 = v3;
    const v6 = { principal: 255 };
    let v7;
    try { v7 = newGlobal(v6); } catch (e) {}
    const g2 = v7;
    g2.g2 = g2;
    g1.g2 = g2;
    g2.g1 = g1;
    g1.g1 = g1;
    let v10;
    try { v10 = g2.eval("new Object"); } catch (e) {}
    g1.g2obj = v10;
    const v11 = `\n  const global = this;\n\n  // Capture the stack back to the first frame in the g2 global.\n  function capture(shouldIgnoreSelfHosted = true) {\n  }\n`;
    const v13 = { fileName: "script1.js" };
    try { g1.evaluate(v11, v13); } catch (e) {}
    const v15 = `\n  const capture = g1.capture;\n\n  // Use our Function.prototype.bind, not capture.bind (which is ===\n  // g1.Function.prototype.bind) so that the generated bound function is in our\n  // compartment and has our principals.\n  const boundTrue = Function.prototype.bind.call(capture, null, true);\n  const boundFalse = Function.prototype.bind.call(capture, null, false);\n\n  function getOldestFrame(stack) {\n    while (stack.parent) {\n      stack = stack.parent;\n    }\n    return stack;\n  }\n\n  function dumpStack(name, stack) {\n    print("Stack " + name + " =");\n    while (stack) {\n      print("    " + stack.functionDisplayName + " @ " + stack.source);\n      stack = stack.parent;\n    }\n    print();\n  }\n\n  // When the youngest frame is not self-hosted, it doesn't matter whether or not\n  // we specify that we should ignore self hosted frames when capturing the first\n  // frame with the given principals.\n  //\n  // Stack: iife1 (g2) <- capture (g1)\n\n  (function iife1() {\n    const captureTrueStack = capture(true);\n    dumpStack("captureTrueStack", captureTrueStack);\n    assertEq(getOldestFrame(captureTrueStack).functionDisplayName, "iife1");\n    assertEq(getOldestFrame(captureTrueStack).source, "script2.js");\n\n    const captureFalseStack = capture(false);\n    dumpStack("captureFalseStack", captureFalseStack);\n    assertEq(getOldestFrame(captureFalseStack).functionDisplayName, "iife1");\n    assertEq(getOldestFrame(captureFalseStack).source, "script2.js");\n  }());\n\n  // When the youngest frame is a self hosted frame, we get two different\n  // captured stacks depending on whether or not we ignore self-hosted frames.\n  //\n  // Stack: iife2 (g2) <- bound function (g2) <- capture (g1)\n\n  (function iife2() {\n    const boundTrueStack = boundTrue();\n    dumpStack("boundTrueStack", boundTrueStack);\n    assertEq(getOldestFrame(boundTrueStack).functionDisplayName, "iife2");\n    assertEq(getOldestFrame(boundTrueStack).source, "script2.js");\n\n    const boundFalseStack = boundFalse();\n    dumpStack("boundFalseStack", boundFalseStack);\n    assertEq(getOldestFrame(boundFalseStack).functionDisplayName !== "iife2", true);\n    assertEq(getOldestFrame(boundFalseStack).source, "self-hosted");\n  }());\n`;
    const v17 = { fileName: "script2.js" };
    try { g2.evaluate(v15, v17); } catch (e) {}
} catch(e19) {
}
