var throwTypeErrorFunction = Object.getOwnPropertyDescriptor(Function.prototype, "arguments").get;
Object.prototype.hasOwnProperty.call(throwTypeErrorFunction, "name");
function f11() {
    'use strict';
    throwTypeErrorFunction.name = "foo";
}
try { f11(); } catch (e) {}
var lengthDesc = Object.getOwnPropertyDescriptor(throwTypeErrorFunction, "length");
lengthDesc.configurable;
lengthDesc.enumerable;
lengthDesc.writable;
function f24() {
    'use strict';
    throwTypeErrorFunction.length = 42;
}
try { f24(); } catch (e) {}
Object.isFrozen(throwTypeErrorFunction);
