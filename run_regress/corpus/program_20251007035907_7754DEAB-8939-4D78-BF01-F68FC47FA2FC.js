var oa = {};
try { Array.pop(oa); } catch (e) {}
oa?.length;
var ob = {};
try { Array.push(ob, "twelve"); } catch (e) {}
ob?.length;
var oc = {};
try { Array.shift(oc); } catch (e) {}
oc?.length;
var od = {};
try { Array.unshift(od, "eight"); } catch (e) {}
od?.length;
