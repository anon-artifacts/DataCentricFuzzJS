const v0 = `\nlet a\nf2()\n`;
try { Reflect.parse(v0); } catch (e) {}
const v3 = `\nlet a=1\nf2()\n`;
try { Reflect.parse(v3); } catch (e) {}
const v5 = `\nimport 'a'\nf2()\n`;
const v7 = { target: "module" };
try { Reflect.parse(v5, v7); } catch (e) {}
const v9 = `\nexport { a } from 'a'\nf2()\n`;
const v11 = { target: "module" };
try { Reflect.parse(v9, v11); } catch (e) {}
const v13 = `\nvar a\nf2()\n`;
try { Reflect.parse(v13); } catch (e) {}
const v15 = `\nvar a=1\nf2()\n`;
try { Reflect.parse(v15); } catch (e) {}
const v17 = `\nf1()\nf2()\n`;
try { Reflect.parse(v17); } catch (e) {}
const v19 = `\nwhile(false) { continue\nf2() }\n`;
try { Reflect.parse(v19); } catch (e) {}
const v21 = `\nwhile(false) { break\nf2() }\n`;
try { Reflect.parse(v21); } catch (e) {}
const v23 = `\nfunction a() { return\nf2() }\n`;
try { Reflect.parse(v23); } catch (e) {}
const v25 = `\nthrow 1\nf2()\n`;
try { Reflect.parse(v25); } catch (e) {}
const v27 = `\ndebugger\nf2()\n`;
try { Reflect.parse(v27); } catch (e) {}
