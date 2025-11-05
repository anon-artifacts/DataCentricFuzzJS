let v2;
try { v2 = cacheEntry("assertEq('bar', String.raw`bar`);"); } catch (e) {}
var code = v2;
const v5 = { cloneSingletons: true };
let v7;
try { v7 = newGlobal(v5); } catch (e) {}
var g = v7;
const v10 = { global: g, saveBytecode: true };
try { evaluate(code, v10); } catch (e) {}
const v14 = { global: g, loadBytecode: true };
try { evaluate(code, v14); } catch (e) {}
