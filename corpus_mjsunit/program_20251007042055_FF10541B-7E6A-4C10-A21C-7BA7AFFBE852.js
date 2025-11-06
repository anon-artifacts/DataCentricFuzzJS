let v1;
try { v1 = newGlobal(); } catch (e) {}
var g1 = v1;
let v3;
try { v3 = newGlobal(); } catch (e) {}
var g2 = v3;
try { schedulegc(g1); } catch (e) {}
try { gcslice(0); } catch (e) {}
try { schedulegc(g2); } catch (e) {}
try { gcslice(1); } catch (e) {}
try { gcslice(); } catch (e) {}
