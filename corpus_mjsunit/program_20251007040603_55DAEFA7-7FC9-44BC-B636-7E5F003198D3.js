var functionWithoutProto = ([]).filter;
var obj = Object.create(functionWithoutProto);
function f6() {
}
functionWithoutProto.__proto__ = f6;
functionWithoutProto.prototype;
obj.prototype;
