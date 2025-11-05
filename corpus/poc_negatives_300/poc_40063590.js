// This disables inline allocation.
%SetAllocationTimeout(20, 0, false);
// Allocate.
for (let i = 0; i < 10000; ++i) {
  function f() { return i; }
}
// This crashes!
%SimulateNewspaceFull();