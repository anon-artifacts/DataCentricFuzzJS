function foo(a1) {
    'use strict';
    a1.f = 42;
}
try { noInline(foo); } catch (e) {}
var a = {};
try { foo(a); } catch (e) {}
try { foo(a); } catch (e) {}
a = { f: 3 };
try { foo(a); } catch (e) {}
var b = {};
try { foo(b); } catch (e) {}
try { foo(b); } catch (e) {}
