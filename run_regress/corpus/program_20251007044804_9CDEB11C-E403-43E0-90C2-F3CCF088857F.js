const v2 = Function("Object.defineProperty(this, 'x', { configurable:true, get:function() { delete this['x'] } }); x()");
try { v2(); } catch (e) {}
