function push_wrapper(a1, a2) {
    a1.push(a2);
}
function pop_wrapper(a5) {
    return a5.pop();
}
var array = [2,2];
Object.freeze(array);
try {
    push_wrapper(array, 1);
} catch(e15) {
}
array.length;
try {
    push_wrapper(array, 1);
} catch(e20) {
}
array.length;
try {
    push_wrapper(array, 1);
} catch(e25) {
}
array.length;
try {
    push_wrapper(array, 1);
} catch(e30) {
}
array.length;
try {
    pop_wrapper(array);
} catch(e34) {
}
array.length;
try {
    pop_wrapper(array);
} catch(e38) {
}
array.length;
try {
    pop_wrapper(array);
} catch(e42) {
}
array.length;
try {
    pop_wrapper(array);
} catch(e46) {
}
array.length;
