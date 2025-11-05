const v1 = `try { throw {} } catch ({e}) { var e; }`;
try { Function(v1, v1); } catch (e) {}
