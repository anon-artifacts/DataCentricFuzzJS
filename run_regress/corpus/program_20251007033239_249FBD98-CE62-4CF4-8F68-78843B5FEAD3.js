let v3;
try { v3 = Empty(); } catch (e) {}
try { test("(?:)", all_flags, v3); } catch (e) {}
let v9;
try { v9 = Atom("a"); } catch (e) {}
try { test("(?:a)", all_flags, v9); } catch (e) {}
let v13;
try { v13 = Atom("X"); } catch (e) {}
let v15;
try { v15 = Atom("a"); } catch (e) {}
let v17;
try { v17 = Atom("Y"); } catch (e) {}
const v18 = [v13,v15,v17];
let v20;
try { v20 = Text(v18); } catch (e) {}
try { test("X(?:a)Y", all_flags, v20); } catch (e) {}
