var heap_number_producer = { y: 1.5 };
heap_number_producer.y = 0;
var heap_number_zero = heap_number_producer.y;
var non_constant_eight = {};
non_constant_eight = 8;
function BreakIt() {
    return heap_number_zero | (1 | non_constant_eight);
}
function expose(a14, a15, a16) {
    return a15;
}
expose(8, 9, 10);
expose(8, BreakIt(), 10);
BreakIt();
