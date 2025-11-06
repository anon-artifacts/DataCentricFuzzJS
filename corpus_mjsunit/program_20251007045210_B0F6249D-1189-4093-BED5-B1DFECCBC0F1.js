function foo(a1) {
    return a1?.x;
}
foo({});
foo(1);
foo({});
foo(1);
foo({});
foo();
foo(1);
foo();
