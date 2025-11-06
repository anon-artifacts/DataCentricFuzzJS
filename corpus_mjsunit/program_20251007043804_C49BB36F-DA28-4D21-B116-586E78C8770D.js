function push_wrapper(a1, a2) {
    a1.push(a2);
}
var object = { x: 8, length: 3 };
object[18] = 5;
object.__proto__ = Array.prototype;
push_wrapper(object, 1);
push_wrapper(object, 1);
object.length;
push_wrapper(object, 1);
push_wrapper(object, 1);
object.x;
object.length;
