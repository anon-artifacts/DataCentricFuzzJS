let v1;
try { v1 = newGlobal(); } catch (e) {}
var g = v1;
const v3 = `\nvar b = /foo2/;\nObject.defineProperty(b, "source", { get: () => {}});\n`;
let v4;
try { v4 = g.eval(v3); } catch (e) {}
var b = v4;
let v7;
try { v7 = new RegExp(b); } catch (e) {}
v7?.source;
