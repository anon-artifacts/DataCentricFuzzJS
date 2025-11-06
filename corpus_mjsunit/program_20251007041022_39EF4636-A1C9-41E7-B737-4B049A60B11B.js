let v4;
try { v4 = Assertion("START_OF_INPUT"); } catch (e) {}
try { test_mix("^", no_multiline_flags, v4); } catch (e) {}
let v10;
try { v10 = Assertion("START_OF_LINE"); } catch (e) {}
try { test_mix("^", multiline_flags, v10); } catch (e) {}
let v14;
try { v14 = Assertion("END_OF_INPUT"); } catch (e) {}
try { test_mix("$", no_multiline_flags, v14); } catch (e) {}
let v18;
try { v18 = Assertion("END_OF_LINE"); } catch (e) {}
try { test_mix("$", multiline_flags, v18); } catch (e) {}
let v23;
try { v23 = Assertion("BOUNDARY"); } catch (e) {}
try { test_mix("\b", all_flags, v23); } catch (e) {}
let v27;
try { v27 = Assertion("NON_BOUNDARY"); } catch (e) {}
try { test_mix("\B", all_flags, v27); } catch (e) {}
