function foo(a1) {
    try { a1.hasOwnProperty("arguments"); } catch (e) {}
}
try { noInline(foo); } catch (e) {}
function bar() {
}
try { foo(bar); } catch (e) {}
function baz() {
    'use strict';
    function boo() {
    }
    return boo;
}
let v10;
try { v10 = baz(); } catch (e) {}
try { foo(v10); } catch (e) {}
