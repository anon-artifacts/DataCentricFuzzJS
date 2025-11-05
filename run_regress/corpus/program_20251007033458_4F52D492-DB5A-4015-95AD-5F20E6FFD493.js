function foo(a1, a2) {
    a1[a2] = 35;
}
var x = { bilbo: 3 };
var y = { frodo: 3, bilbo: "hi" };
foo(x, "bilbo");
foo(x, "bilbo");
foo(y, "bilbo");
