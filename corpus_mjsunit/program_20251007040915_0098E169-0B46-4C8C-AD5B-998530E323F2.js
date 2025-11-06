function f0() {
}
var BUGNUMBER = 274035;
var summary = "Array.prototype[concat|slice|splice] lengths";
var actual = "";
var expect = "";
try { f0(BUGNUMBER); } catch (e) {}
try { f0(summary); } catch (e) {}
const v12 = summary + " ";
let v15;
try { v15 = inSection(1); } catch (e) {}
status = (v12 + v15) + " Array.prototype.concat.length ";
expect = 1;
actual = Array?.prototype?.concat?.length;
try { f0(expect, actual, status); } catch (e) {}
const v28 = summary + " ";
let v30;
try { v30 = inSection(2); } catch (e) {}
status = (v28 + v30) + " Array.prototype.slice.length ";
expect = 2;
actual = Array?.prototype?.slice?.length;
try { f0(expect, actual, status); } catch (e) {}
const v40 = summary + " ";
let v42;
try { v42 = inSection(3); } catch (e) {}
status = (v40 + v42) + " Array.prototype.splice.length ";
expect = 2;
actual = Array?.prototype?.splice?.length;
try { f0(expect, actual, status); } catch (e) {}
