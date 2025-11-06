let v2;
try { v2 = Reflect.parse("f()"); } catch (e) {}
var loc = v2?.body?.[0]?.expression?.loc;
loc?.start?.column;
loc?.end?.column;
let v15;
try { v15 = Reflect.parse("f(x)"); } catch (e) {}
(loc = v15?.body?.[0]?.expression?.loc)?.start?.column;
loc?.end?.column;
