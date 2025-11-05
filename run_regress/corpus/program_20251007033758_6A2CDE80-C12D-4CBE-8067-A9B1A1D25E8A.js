let v1;
try { v1 = newGlobal(); } catch (e) {}
pSandbox = v1;
try { evalcx("    x = ArrayBuffer;    y = new Map();    x += 1;    w = x;    x += '0';    z = x;", pSandbox); } catch (e) {}
try { evalcx("    x + '0';", pSandbox); } catch (e) {}
try { evalcx("    y.delete(z);    w.slice(2);", pSandbox); } catch (e) {}
