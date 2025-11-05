let v2;
try { v2 = new Array(4); } catch (e) {}
try { f2(v2); } catch (e) {}
let v8;
try { v8 = Math.pow(2, 32); } catch (e) {}
const v10 = v8 - 1;
let v11;
try { v11 = new Array(v10); } catch (e) {}
try { f2(v11); } catch (e) {}
const v14 = { length: 10 };
try { f2(v14); } catch (e) {}
const v17 = { length: 10 };
try { f2(v17); } catch (e) {}
