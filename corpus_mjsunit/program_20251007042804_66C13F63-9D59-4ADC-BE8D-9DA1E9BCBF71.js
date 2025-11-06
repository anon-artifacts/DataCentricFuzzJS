var foo_call_count = 0;
function foo() {
    foo_call_count++;
}
true || foo() ? 1 : 2;
foo_call_count == 0;
false && foo() ? 1 : 2;
foo_call_count == 0;
foo() || true ? 1 : 2;
foo_call_count == 1;
false || foo() ? 1 : 2;
foo_call_count == 2;
foo() || false ? 1 : 2;
foo_call_count == 3;
true && foo() ? 1 : 2;
foo_call_count == 4;
foo() && true ? 1 : 2;
foo_call_count == 5;
foo() && false ? 1 : 2;
foo_call_count == 6;
